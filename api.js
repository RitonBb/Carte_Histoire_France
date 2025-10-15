// API Integration Module for Wikidata and Wikipedia
// This module handles data enrichment from external sources

class WikidataAPI {
    constructor() {
        this.endpoint = 'https://www.wikidata.org/w/api.php';
        this.wikipediaEndpoint = 'https://fr.wikipedia.org/w/api.php';
    }

    /**
     * Search for historical events in Wikidata
     * @param {string} query - Search query
     * @returns {Promise<Array>} - Array of search results
     */
    async searchEvents(query) {
        try {
            const params = new URLSearchParams({
                action: 'wbsearchentities',
                search: query,
                language: 'fr',
                format: 'json',
                origin: '*'
            });

            const response = await fetch(`${this.endpoint}?${params}`);
            const data = await response.json();
            return data.search || [];
        } catch (error) {
            console.error('Erreur lors de la recherche Wikidata:', error);
            return [];
        }
    }

    /**
     * Get entity details from Wikidata
     * @param {string} entityId - Wikidata entity ID (e.g., Q12345)
     * @returns {Promise<Object>} - Entity data
     */
    async getEntity(entityId) {
        try {
            const params = new URLSearchParams({
                action: 'wbgetentities',
                ids: entityId,
                languages: 'fr',
                format: 'json',
                origin: '*'
            });

            const response = await fetch(`${this.endpoint}?${params}`);
            const data = await response.json();
            return data.entities[entityId] || null;
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'entité:', error);
            return null;
        }
    }

    /**
     * Extract coordinates from Wikidata entity
     * @param {Object} entity - Wikidata entity
     * @returns {Array|null} - [latitude, longitude] or null
     */
    extractCoordinates(entity) {
        try {
            if (entity.claims && entity.claims.P625) {
                const coordinate = entity.claims.P625[0].mainsnak.datavalue.value;
                return [coordinate.latitude, coordinate.longitude];
            }
            return null;
        } catch (error) {
            console.error('Erreur lors de l\'extraction des coordonnées:', error);
            return null;
        }
    }

    /**
     * Get Wikipedia article summary
     * @param {string} title - Wikipedia article title
     * @returns {Promise<Object>} - Article summary
     */
    async getWikipediaSummary(title) {
        try {
            const params = new URLSearchParams({
                action: 'query',
                prop: 'extracts',
                exintro: true,
                explaintext: true,
                titles: title,
                format: 'json',
                origin: '*'
            });

            const response = await fetch(`${this.wikipediaEndpoint}?${params}`);
            const data = await response.json();
            const pages = data.query.pages;
            const pageId = Object.keys(pages)[0];
            return pages[pageId];
        } catch (error) {
            console.error('Erreur lors de la récupération du résumé Wikipedia:', error);
            return null;
        }
    }

    /**
     * Get images from Wikipedia Commons
     * @param {string} title - Article title
     * @returns {Promise<string|null>} - Image URL or null
     */
    async getWikipediaImage(title) {
        try {
            const params = new URLSearchParams({
                action: 'query',
                prop: 'pageimages',
                titles: title,
                piprop: 'original',
                format: 'json',
                origin: '*'
            });

            const response = await fetch(`${this.wikipediaEndpoint}?${params}`);
            const data = await response.json();
            const pages = data.query.pages;
            const pageId = Object.keys(pages)[0];
            
            if (pages[pageId].original) {
                return pages[pageId].original.source;
            }
            return null;
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'image:', error);
            return null;
        }
    }

    /**
     * Enrich event data with Wikipedia/Wikidata information
     * @param {Object} event - Historical event object
     * @returns {Promise<Object>} - Enriched event
     */
    async enrichEvent(event) {
        try {
            // Search for the event in Wikidata
            const searchResults = await this.searchEvents(event.title);
            
            if (searchResults.length > 0) {
                const entityId = searchResults[0].id;
                const entity = await this.getEntity(entityId);
                
                if (entity) {
                    // Extract additional information
                    const coordinates = this.extractCoordinates(entity);
                    if (coordinates) {
                        event.coordinates = coordinates;
                    }
                    
                    // Get Wikipedia summary
                    if (entity.sitelinks && entity.sitelinks.frwiki) {
                        const wikiTitle = entity.sitelinks.frwiki.title;
                        const summary = await this.getWikipediaSummary(wikiTitle);
                        if (summary && summary.extract) {
                            event.enrichedDescription = summary.extract;
                        }
                        
                        // Get image
                        const imageUrl = await this.getWikipediaImage(wikiTitle);
                        if (imageUrl) {
                            event.imageUrl = imageUrl;
                        }
                    }
                }
            }
            
            return event;
        } catch (error) {
            console.error('Erreur lors de l\'enrichissement:', error);
            return event;
        }
    }

    /**
     * Batch enrich multiple events
     * @param {Array} events - Array of events
     * @param {Function} progressCallback - Progress callback
     * @returns {Promise<Array>} - Enriched events
     */
    async enrichEvents(events, progressCallback = null) {
        const enriched = [];
        
        for (let i = 0; i < events.length; i++) {
            const enrichedEvent = await this.enrichEvent(events[i]);
            enriched.push(enrichedEvent);
            
            if (progressCallback) {
                progressCallback((i + 1) / events.length * 100);
            }
            
            // Add delay to respect API rate limits
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        
        return enriched;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WikidataAPI;
}
