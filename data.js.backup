// Historical Events Database
// Each event contains: title, description, coordinates, period, date, sources

const historicalEvents = [
    {
        id: 1,
        title: "Bataille d'Alésia",
        description: "Siège décisif de la guerre des Gaules opposant Jules César et Vercingétorix. Cette bataille marque la fin de l'indépendance gauloise et l'intégration de la Gaule dans l'Empire romain.",
        coordinates: [47.5397, 4.4997],
        period: "antiquite",
        date: "-52",
        year: -52,
        location: "Alise-Sainte-Reine, Bourgogne",
        category: "Bataille",
        sources: [
            {
                name: "Wikipedia - Siège d'Alésia",
                url: "https://fr.wikipedia.org/wiki/Si%C3%A8ge_d%27Al%C3%A9sia"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q48314"
            }
        ]
    },
    {
        id: 2,
        title: "Sacre de Clovis",
        description: "Baptême de Clovis Ier, roi des Francs, par Saint Rémi à Reims. Cet événement marque la conversion du royaume franc au christianisme et établit une alliance durable entre l'Église et la monarchie française.",
        coordinates: [49.2583, 4.0317],
        period: "moyen-age",
        date: "496 ou 499",
        year: 496,
        location: "Reims, Champagne-Ardenne",
        category: "Religieux",
        sources: [
            {
                name: "Wikipedia - Baptême de Clovis",
                url: "https://fr.wikipedia.org/wiki/Bapt%C3%AAme_de_Clovis"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q595107"
            }
        ]
    },
    {
        id: 3,
        title: "Bataille de Poitiers",
        description: "Charles Martel arrête l'expansion musulmane en Europe. Cette victoire des Francs sur l'émirat de Cordoue est considérée comme un tournant majeur dans l'histoire européenne.",
        coordinates: [46.5802, 0.3404],
        period: "moyen-age",
        date: "732",
        year: 732,
        location: "Poitiers, Nouvelle-Aquitaine",
        category: "Bataille",
        sources: [
            {
                name: "Wikipedia - Bataille de Poitiers (732)",
                url: "https://fr.wikipedia.org/wiki/Bataille_de_Poitiers_(732)"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q48314"
            }
        ]
    },
    {
        id: 4,
        title: "Sacre de Charlemagne",
        description: "Couronnement de Charlemagne comme empereur d'Occident par le pape Léon III. Bien que le sacre ait eu lieu à Rome, cet événement marque l'apogée du pouvoir franc et l'origine du Saint-Empire.",
        coordinates: [48.8566, 2.3522],
        period: "moyen-age",
        date: "800",
        year: 800,
        location: "Paris (référence symbolique)",
        category: "Politique",
        sources: [
            {
                name: "Wikipedia - Couronnement de Charlemagne",
                url: "https://fr.wikipedia.org/wiki/Couronnement_de_Charlemagne"
            }
        ]
    },
    {
        id: 5,
        title: "Sacre de Jeanne d'Arc à Reims",
        description: "Jeanne d'Arc conduit Charles VII à Reims pour son sacre, légitimant son autorité royale pendant la guerre de Cent Ans. Cet événement redonne espoir au royaume de France.",
        coordinates: [49.2583, 4.0317],
        period: "moyen-age",
        date: "1429",
        year: 1429,
        location: "Reims, Champagne-Ardenne",
        category: "Politique",
        sources: [
            {
                name: "Wikipedia - Jeanne d'Arc",
                url: "https://fr.wikipedia.org/wiki/Jeanne_d%27Arc"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q7226"
            }
        ]
    },
    {
        id: 6,
        title: "Édit de Nantes",
        description: "Henri IV promulgue l'édit de Nantes, accordant la liberté de culte aux protestants et mettant fin aux guerres de religion. C'est une étape majeure vers la tolérance religieuse en France.",
        coordinates: [47.2184, -1.5536],
        period: "ancien-regime",
        date: "1598",
        year: 1598,
        location: "Nantes, Pays de la Loire",
        category: "Politique",
        sources: [
            {
                name: "Wikipedia - Édit de Nantes",
                url: "https://fr.wikipedia.org/wiki/%C3%89dit_de_Nantes"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q214353"
            }
        ]
    },
    {
        id: 7,
        title: "Construction du Château de Versailles",
        description: "Louis XIV transforme le pavillon de chasse de son père en un palais somptueux, symbole de l'absolutisme royal. Versailles devient le centre du pouvoir politique français.",
        coordinates: [48.8049, 2.1204],
        period: "ancien-regime",
        date: "1661-1715",
        year: 1661,
        location: "Versailles, Île-de-France",
        category: "Architecture",
        sources: [
            {
                name: "Wikipedia - Château de Versailles",
                url: "https://fr.wikipedia.org/wiki/Ch%C3%A2teau_de_Versailles"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q161626"
            }
        ]
    },
    {
        id: 8,
        title: "Prise de la Bastille",
        description: "Le peuple parisien prend d'assaut la forteresse de la Bastille, symbole de l'arbitraire royal. Cet événement marque le début de la Révolution française et est aujourd'hui la fête nationale.",
        coordinates: [48.8530, 2.3693],
        period: "revolution",
        date: "14 juillet 1789",
        year: 1789,
        location: "Paris, Île-de-France",
        category: "Révolution",
        sources: [
            {
                name: "Wikipedia - Prise de la Bastille",
                url: "https://fr.wikipedia.org/wiki/Prise_de_la_Bastille"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q179832"
            }
        ]
    },
    {
        id: 9,
        title: "Déclaration des Droits de l'Homme",
        description: "L'Assemblée nationale constituante adopte la Déclaration des droits de l'homme et du citoyen, texte fondamental établissant les principes de liberté, d'égalité et de fraternité.",
        coordinates: [48.8606, 2.3376],
        period: "revolution",
        date: "26 août 1789",
        year: 1789,
        location: "Paris, Assemblée nationale",
        category: "Politique",
        sources: [
            {
                name: "Wikipedia - Déclaration des droits de l'homme et du citoyen",
                url: "https://fr.wikipedia.org/wiki/D%C3%A9claration_des_droits_de_l%27homme_et_du_citoyen_de_1789"
            }
        ]
    },
    {
        id: 10,
        title: "Couronnement de Napoléon",
        description: "Napoléon Bonaparte se couronne empereur des Français à Notre-Dame de Paris en présence du pape Pie VII. Cet événement marque l'établissement du Premier Empire.",
        coordinates: [48.8530, 2.3499],
        period: "empire",
        date: "2 décembre 1804",
        year: 1804,
        location: "Paris, Notre-Dame",
        category: "Politique",
        sources: [
            {
                name: "Wikipedia - Sacre de Napoléon",
                url: "https://fr.wikipedia.org/wiki/Sacre_de_Napol%C3%A9on_Ier"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q214337"
            }
        ]
    },
    {
        id: 11,
        title: "Bataille d'Austerlitz",
        description: "Victoire décisive de Napoléon contre les armées austro-russes. Bien que la bataille ait eu lieu en Moravie, elle représente l'apogée du génie militaire napoléonien.",
        coordinates: [48.8566, 2.3522],
        period: "empire",
        date: "2 décembre 1805",
        year: 1805,
        location: "Paris (commémoration)",
        category: "Bataille",
        sources: [
            {
                name: "Wikipedia - Bataille d'Austerlitz",
                url: "https://fr.wikipedia.org/wiki/Bataille_d%27Austerlitz"
            }
        ]
    },
    {
        id: 12,
        title: "Construction de la Tour Eiffel",
        description: "Gustave Eiffel construit la tour pour l'Exposition universelle de 1889. Initialement critiquée, elle devient le symbole emblématique de Paris et de la France.",
        coordinates: [48.8584, 2.2945],
        period: "19e-siecle",
        date: "1887-1889",
        year: 1889,
        location: "Paris, Champ-de-Mars",
        category: "Architecture",
        sources: [
            {
                name: "Wikipedia - Tour Eiffel",
                url: "https://fr.wikipedia.org/wiki/Tour_Eiffel"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q243"
            }
        ]
    },
    {
        id: 13,
        title: "Affaire Dreyfus",
        description: "Alfred Dreyfus, officier français d'origine juive, est injustement condamné pour trahison. Cette affaire divise profondément la société française et aboutit à la séparation de l'Église et de l'État.",
        coordinates: [48.8566, 2.3522],
        period: "19e-siecle",
        date: "1894-1906",
        year: 1894,
        location: "Paris, Île-de-France",
        category: "Politique",
        sources: [
            {
                name: "Wikipedia - Affaire Dreyfus",
                url: "https://fr.wikipedia.org/wiki/Affaire_Dreyfus"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q171377"
            }
        ]
    },
    {
        id: 14,
        title: "Bataille de Verdun",
        description: "L'une des batailles les plus meurtrières de la Première Guerre mondiale. Le sacrifice des soldats français à Verdun devient un symbole de la résistance nationale.",
        coordinates: [49.1593, 5.3874],
        period: "20e-siecle",
        date: "1916",
        year: 1916,
        location: "Verdun, Grand Est",
        category: "Bataille",
        sources: [
            {
                name: "Wikipedia - Bataille de Verdun",
                url: "https://fr.wikipedia.org/wiki/Bataille_de_Verdun"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q48258"
            }
        ]
    },
    {
        id: 15,
        title: "Appel du 18 juin 1940",
        description: "Le général de Gaulle lance depuis Londres un appel à la résistance après la défaite française. Cet appel marque le début de la France Libre et de la Résistance.",
        coordinates: [48.8566, 2.3522],
        period: "20e-siecle",
        date: "18 juin 1940",
        year: 1940,
        location: "Paris (commémoration)",
        category: "Politique",
        sources: [
            {
                name: "Wikipedia - Appel du 18 juin",
                url: "https://fr.wikipedia.org/wiki/Appel_du_18_juin"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q747361"
            }
        ]
    },
    {
        id: 16,
        title: "Débarquement en Normandie",
        description: "Le jour J : débarquement allié sur les plages normandes, opération décisive pour la libération de la France et de l'Europe occidentale du nazisme.",
        coordinates: [49.3475, -0.8834],
        period: "20e-siecle",
        date: "6 juin 1944",
        year: 1944,
        location: "Normandie, Calvados",
        category: "Bataille",
        sources: [
            {
                name: "Wikipedia - Débarquement de Normandie",
                url: "https://fr.wikipedia.org/wiki/D%C3%A9barquement_de_Normandie"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q2391"
            }
        ]
    },
    {
        id: 17,
        title: "Mai 68",
        description: "Mouvement de contestation sociale et culturelle majeur combinant grève générale et révolte étudiante. Mai 68 transforme profondément la société française.",
        coordinates: [48.8566, 2.3522],
        period: "20e-siecle",
        date: "Mai 1968",
        year: 1968,
        location: "Paris, Quartier Latin",
        category: "Sociale",
        sources: [
            {
                name: "Wikipedia - Mai 68",
                url: "https://fr.wikipedia.org/wiki/Mai_68"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q138796"
            }
        ]
    },
    {
        id: 18,
        title: "Ouverture du Tunnel sous la Manche",
        description: "Inauguration du tunnel ferroviaire reliant la France et le Royaume-Uni. Cette prouesse technique symbolise la coopération européenne moderne.",
        coordinates: [50.9233, 1.8079],
        period: "contemporain",
        date: "6 mai 1994",
        year: 1994,
        location: "Calais, Hauts-de-France",
        category: "Infrastructure",
        sources: [
            {
                name: "Wikipedia - Tunnel sous la Manche",
                url: "https://fr.wikipedia.org/wiki/Tunnel_sous_la_Manche"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q4103"
            }
        ]
    }
];

// Period mapping for filtering
const periodRanges = {
    'antiquite': { start: -600, end: 476 },
    'moyen-age': { start: 476, end: 1492 },
    'renaissance': { start: 1492, end: 1610 },
    'ancien-regime': { start: 1610, end: 1789 },
    'revolution': { start: 1789, end: 1799 },
    'empire': { start: 1799, end: 1815 },
    '19e-siecle': { start: 1815, end: 1914 },
    '20e-siecle': { start: 1914, end: 2000 },
    'contemporain': { start: 2000, end: 2100 }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { historicalEvents, periodRanges };
}
