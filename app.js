// Main Application JavaScript
// Handles map initialization, event display, and user interactions

class CarteHistoireFrance {
    constructor() {
        this.map = null;
        this.markers = [];
        this.currentPeriod = 'all';
        this.wikiAPI = new WikidataAPI();
        this.init();
    }

    /**
     * Initialize the application
     */
    init() {
        this.initMap();
        this.loadEvents();
        this.setupEventListeners();
    }

    /**
     * Initialize Leaflet map
     */
    initMap() {
        // Center on France
        this.map = L.map('map').setView([46.603354, 1.888334], 6);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18,
            minZoom: 5
        }).addTo(this.map);

        // Add scale control
        L.control.scale({ imperial: false, metric: true }).addTo(this.map);
    }

    /**
     * Load and display historical events
     */
    loadEvents() {
        this.clearMarkers();
        const filteredEvents = this.filterEventsByPeriod(historicalEvents, this.currentPeriod);
        
        filteredEvents.forEach(event => {
            this.addEventMarker(event);
        });
    }

    /**
     * Filter events by selected period
     * @param {Array} events - All events
     * @param {string} period - Selected period
     * @returns {Array} - Filtered events
     */
    filterEventsByPeriod(events, period) {
        if (period === 'all') {
            return events;
        }

        return events.filter(event => event.period === period);
    }

    /**
     * Add a marker for an event
     * @param {Object} event - Historical event
     */
    addEventMarker(event) {
        // Create custom icon based on category
        const icon = this.getIconForCategory(event.category);
        
        const marker = L.marker(event.coordinates, {
            icon: L.divIcon({
                className: 'custom-marker',
                html: icon,
                iconSize: [36, 36],
                iconAnchor: [18, 18]
            })
        }).addTo(this.map);

        // Create popup content
        const popupContent = this.createPopupContent(event);
        marker.bindPopup(popupContent, {
            maxWidth: 300,
            className: 'custom-popup'
        });

        // Add click event for detailed view
        marker.on('click', () => {
            setTimeout(() => {
                const detailsBtn = document.querySelector(`#details-btn-${event.id}`);
                if (detailsBtn) {
                    detailsBtn.addEventListener('click', () => {
                        this.showEventDetails(event);
                    });
                }
            }, 100);
        });

        this.markers.push(marker);
    }

    /**
     * Get icon emoji for event category
     * @param {string} category - Event category
     * @returns {string} - Icon emoji
     */
    getIconForCategory(category) {
        const icons = {
            'Bataille': '⚔️',
            'Politique': '🏛️',
            'Religieux': '⛪',
            'Architecture': '🏰',
            'Révolution': '🔥',
            'Sociale': '👥',
            'Infrastructure': '🌉'
        };
        return icons[category] || '📍';
    }

    /**
     * Create popup content HTML
     * @param {Object} event - Historical event
     * @returns {string} - HTML content
     */
    createPopupContent(event) {
        return `
            <div class="popup-content">
                <h3>${event.title}</h3>
                <p><strong>📅 Date:</strong> ${event.date}</p>
                <p><strong>📍 Lieu:</strong> ${event.location}</p>
                <p><strong>🏷️ Catégorie:</strong> ${event.category}</p>
                <span class="period">${this.getPeriodLabel(event.period)}</span>
                <button id="details-btn-${event.id}" class="details-btn">
                    📖 En savoir plus
                </button>
            </div>
        `;
    }

    /**
     * Get human-readable period label
     * @param {string} period - Period code
     * @returns {string} - Period label
     */
    getPeriodLabel(period) {
        const labels = {
            'antiquite': 'Antiquité',
            'moyen-age': 'Moyen Âge',
            'renaissance': 'Renaissance',
            'ancien-regime': 'Ancien Régime',
            'revolution': 'Révolution',
            'empire': 'Empire',
            '19e-siecle': '19ème siècle',
            '20e-siecle': '20ème siècle',
            'contemporain': 'Contemporain'
        };
        return labels[period] || period;
    }

    /**
     * Show detailed event information
     * @param {Object} event - Historical event
     */
    showEventDetails(event) {
        const detailsPanel = document.getElementById('event-details');
        const titleElement = document.getElementById('event-title');
        const contentElement = document.getElementById('event-content');

        titleElement.textContent = event.title;
        
        let sourcesHtml = '<div class="sources"><h4>🔗 Sources :</h4>';
        event.sources.forEach(source => {
            sourcesHtml += `<a href="${source.url}" target="_blank">${source.name}</a>`;
        });
        sourcesHtml += '</div>';

        contentElement.innerHTML = `
            <div class="metadata">
                <p><strong>📅 Date :</strong> ${event.date}</p>
                <p><strong>📍 Lieu :</strong> ${event.location}</p>
                <p><strong>🏷️ Catégorie :</strong> ${event.category}</p>
                <p><strong>⏳ Période :</strong> ${this.getPeriodLabel(event.period)}</p>
            </div>
            <p>${event.description}</p>
            ${sourcesHtml}
        `;

        detailsPanel.classList.remove('hidden');
    }

    /**
     * Clear all markers from map
     */
    clearMarkers() {
        this.markers.forEach(marker => {
            this.map.removeLayer(marker);
        });
        this.markers = [];
    }

    /**
     * Setup event listeners for UI controls
     */
    setupEventListeners() {
        // Period filter
        const periodSelect = document.getElementById('period-select');
        periodSelect.addEventListener('change', (e) => {
            this.currentPeriod = e.target.value;
            this.loadEvents();
        });

        // Refresh button
        const refreshBtn = document.getElementById('refresh-btn');
        refreshBtn.addEventListener('click', () => {
            this.loadEvents();
            this.showNotification('Données actualisées');
        });

        // Info button
        const infoBtn = document.getElementById('info-btn');
        infoBtn.addEventListener('click', () => {
            this.showInfoModal();
        });

        // Close details button
        const closeDetailsBtn = document.getElementById('close-details');
        closeDetailsBtn.addEventListener('click', () => {
            document.getElementById('event-details').classList.add('hidden');
        });

        // Close modal on background click
        const infoModal = document.getElementById('info-modal');
        infoModal.addEventListener('click', (e) => {
            if (e.target === infoModal) {
                this.closeInfoModal();
            }
        });
    }

    /**
     * Show info modal
     */
    showInfoModal() {
        document.getElementById('info-modal').classList.remove('hidden');
    }

    /**
     * Show notification message
     * @param {string} message - Notification message
     */
    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary-gradient);
            color: white;
            padding: 1rem 2rem;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-xl);
            z-index: 3000;
            animation: slideInNotification 0.3s ease;
            font-weight: 600;
            font-family: 'Poppins', sans-serif;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutNotification 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    /**
     * Enrich events with Wikipedia/Wikidata data
     * This is an optional enhancement feature
     */
    async enrichEventsData() {
        const loading = document.getElementById('loading');
        loading.classList.remove('hidden');

        try {
            const enrichedEvents = await this.wikiAPI.enrichEvents(
                historicalEvents,
                (progress) => {
                    console.log(`Enrichissement: ${progress.toFixed(0)}%`);
                }
            );
            
            // Update events with enriched data
            historicalEvents.length = 0;
            historicalEvents.push(...enrichedEvents);
            
            this.loadEvents();
            this.showNotification('Données enrichies avec succès');
        } catch (error) {
            console.error('Erreur lors de l\'enrichissement:', error);
            this.showNotification('Erreur lors de l\'enrichissement des données');
        } finally {
            loading.classList.add('hidden');
        }
    }
}

// Close info modal function (global for onclick in HTML)
function closeInfoModal() {
    document.getElementById('info-modal').classList.add('hidden');
}

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new CarteHistoireFrance();
    
    // Make app accessible globally for debugging
    window.carteApp = app;
    
    console.log('🗺️ Carte Histoire France initialisée');
    console.log(`📍 ${historicalEvents.length} événements historiques chargés`);
});
