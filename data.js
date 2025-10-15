// Historical Events Database
// Each event contains: title, description, coordinates, period, date, sources

const historicalEvents = [
    {
        title: "Fondation de Massalia (Marseille)",
        description: "Fondation de la colonie grecque de Massalia par des colons phocéens. Cette cité devient un important centre commercial méditerranéen et marque le début de l'influence grecque en Gaule.",
        coordinates: [
            43.2965,
            5.3698
        ],
        period: "antiquite",
        date: "-600",
        year: -600,
        location: "Marseille, Provence-Alpes-Côte d'Azur",
        category: "Politique",
        sources: [
            {
                name: "Wikipedia - Marseille antique",
                url: "https://fr.wikipedia.org/wiki/Marseille_antique"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q22690"
            }
        ],
        id: 19
    },
    {
        id: 1,
        title: "Bataille d'Alésia",
        description: "Siège décisif de la guerre des Gaules opposant Jules César et Vercingétorix. Cette bataille marque la fin de l'indépendance gauloise et l'intégration de la Gaule dans l'Empire romain.",
        coordinates: [
            47.5397,
            4.4997
        ],
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
        title: "Bataille de Gergovie",
        description: "Victoire décisive de Vercingétorix sur Jules César. Cette bataille représente le plus grand succès militaire des Gaulois pendant la guerre des Gaules avant la défaite finale à Alésia.",
        coordinates: [
            45.7236,
            3.1306
        ],
        period: "antiquite",
        date: "-52",
        year: -52,
        location: "Gergovie, Auvergne-Rhône-Alpes",
        category: "Bataille",
        sources: [
            {
                name: "Wikipedia - Bataille de Gergovie",
                url: "https://fr.wikipedia.org/wiki/Bataille_de_Gergovie"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q379861"
            }
        ],
        id: 20
    },
    {
        title: "Fondation de Lutèce (Paris)",
        description: "Établissement de la cité gallo-romaine de Lutèce sur l'île de la Cité. Cette fondation marque le début de l'histoire de Paris, qui deviendra la capitale de la France.",
        coordinates: [
            48.8534,
            2.3488
        ],
        period: "antiquite",
        date: "-52",
        year: -52,
        location: "Paris, Île-de-France",
        category: "Politique",
        sources: [
            {
                name: "Wikipedia - Lutèce",
                url: "https://fr.wikipedia.org/wiki/Lut%C3%A8ce"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q1373402"
            }
        ],
        id: 21
    },
    {
        id: 2,
        title: "Sacre de Clovis",
        description: "Baptême de Clovis Ier, roi des Francs, par Saint Rémi à Reims. Cet événement marque la conversion du royaume franc au christianisme et établit une alliance durable entre l'Église et la monarchie française.",
        coordinates: [
            49.2583,
            4.0317
        ],
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
        coordinates: [
            46.5802,
            0.3404
        ],
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
        coordinates: [
            48.8566,
            2.3522
        ],
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
        title: "Traité de Verdun",
        description: "Partage de l'Empire carolingien entre les trois petits-fils de Charlemagne. Ce traité établit les bases territoriales de la France, de l'Allemagne et de l'Italie modernes.",
        coordinates: [
            49.16,
            5.38
        ],
        period: "moyen-age",
        date: "843",
        year: 843,
        location: "Verdun, Grand Est",
        category: "Politique",
        sources: [
            {
                name: "Wikipedia - Traité de Verdun",
                url: "https://fr.wikipedia.org/wiki/Trait%C3%A9_de_Verdun"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q154115"
            }
        ],
        id: 22
    },
    {
        title: "Construction de Notre-Dame de Paris",
        description: "Début de la construction de la cathédrale Notre-Dame de Paris, chef-d'œuvre de l'architecture gothique. Édifice emblématique qui domine l'île de la Cité depuis près de 900 ans.",
        coordinates: [
            48.853,
            2.3499
        ],
        period: "moyen-age",
        date: "1163",
        year: 1163,
        location: "Paris, Île-de-France",
        category: "Architecture",
        sources: [
            {
                name: "Wikipedia - Notre-Dame de Paris",
                url: "https://fr.wikipedia.org/wiki/Cath%C3%A9drale_Notre-Dame_de_Paris"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q2981"
            }
        ],
        id: 24
    },
    {
        title: "Bataille de Bouvines",
        description: "Victoire décisive du roi Philippe Auguste contre une coalition européenne. Cette bataille affirme la puissance du royaume de France et marque l'émergence de la monarchie capétienne.",
        coordinates: [
            50.5833,
            3.1833
        ],
        period: "moyen-age",
        date: "27 juillet 1214",
        year: 1214,
        location: "Bouvines, Hauts-de-France",
        category: "Bataille",
        sources: [
            {
                name: "Wikipedia - Bataille de Bouvines",
                url: "https://fr.wikipedia.org/wiki/Bataille_de_Bouvines"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q154521"
            }
        ],
        id: 23
    },
    {
        title: "Bataille d'Azincourt",
        description: "Défaite française majeure face aux Anglais pendant la guerre de Cent Ans. Cette bataille symbolise la vulnérabilité de la chevalerie française face aux archers anglais.",
        coordinates: [
            50.4667,
            2.1333
        ],
        period: "moyen-age",
        date: "25 octobre 1415",
        year: 1415,
        location: "Azincourt, Hauts-de-France",
        category: "Bataille",
        sources: [
            {
                name: "Wikipedia - Bataille d'Azincourt",
                url: "https://fr.wikipedia.org/wiki/Bataille_d%27Azincourt"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q48314"
            }
        ],
        id: 25
    },
    {
        id: 5,
        title: "Sacre de Jeanne d'Arc à Reims",
        description: "Jeanne d'Arc conduit Charles VII à Reims pour son sacre, légitimant son autorité royale pendant la guerre de Cent Ans. Cet événement redonne espoir au royaume de France.",
        coordinates: [
            49.2583,
            4.0317
        ],
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
        title: "Construction du Château de Chambord",
        description: "François Ier fait construire le château de Chambord, chef-d'œuvre de la Renaissance française. Ce château symbolise le faste de la monarchie française à son apogée.",
        coordinates: [
            47.6162,
            1.5172
        ],
        period: "renaissance",
        date: "1519",
        year: 1519,
        location: "Chambord, Centre-Val de Loire",
        category: "Architecture",
        sources: [
            {
                name: "Wikipedia - Château de Chambord",
                url: "https://fr.wikipedia.org/wiki/Ch%C3%A2teau_de_Chambord"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q201428"
            }
        ],
        id: 26
    },
    {
        title: "Massacre de la Saint-Barthélemy",
        description: "Massacre de protestants à Paris et dans plusieurs villes de France lors des guerres de Religion. Cet événement tragique marque un sommet de violence religieuse en France.",
        coordinates: [
            48.8566,
            2.3522
        ],
        period: "renaissance",
        date: "24 août 1572",
        year: 1572,
        location: "Paris, Île-de-France",
        category: "Religieux",
        sources: [
            {
                name: "Wikipedia - Massacre de la Saint-Barthélemy",
                url: "https://fr.wikipedia.org/wiki/Massacre_de_la_Saint-Barth%C3%A9lemy"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q12567"
            }
        ],
        id: 27
    },
    {
        id: 6,
        title: "Édit de Nantes",
        description: "Henri IV promulgue l'édit de Nantes, accordant la liberté de culte aux protestants et mettant fin aux guerres de religion. C'est une étape majeure vers la tolérance religieuse en France.",
        coordinates: [
            47.2184,
            -1.5536
        ],
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
        coordinates: [
            48.8049,
            2.1204
        ],
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
        title: "Révocation de l'Édit de Nantes",
        description: "Louis XIV révoque l'édit de Nantes, supprimant la tolérance religieuse accordée aux protestants. Cette décision entraîne l'exil de centaines de milliers de huguenots.",
        coordinates: [
            48.8049,
            2.1204
        ],
        period: "ancien-regime",
        date: "18 octobre 1685",
        year: 1685,
        location: "Versailles, Île-de-France",
        category: "Politique",
        sources: [
            {
                name: "Wikipedia - Révocation de l'édit de Nantes",
                url: "https://fr.wikipedia.org/wiki/R%C3%A9vocation_de_l%27%C3%A9dit_de_Nantes"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q552745"
            }
        ],
        id: 28
    },
    {
        id: 8,
        title: "Prise de la Bastille",
        description: "Le peuple parisien prend d'assaut la forteresse de la Bastille, symbole de l'arbitraire royal. Cet événement marque le début de la Révolution française et est aujourd'hui la fête nationale.",
        coordinates: [
            48.853,
            2.3693
        ],
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
        coordinates: [
            48.8606,
            2.3376
        ],
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
        title: "Bataille de Valmy",
        description: "Première victoire militaire importante de la Révolution française contre les forces prussiennes. Cette bataille sauve la République naissante et devient un symbole national.",
        coordinates: [
            49.0744,
            4.705
        ],
        period: "revolution",
        date: "20 septembre 1792",
        year: 1792,
        location: "Valmy, Grand Est",
        category: "Bataille",
        sources: [
            {
                name: "Wikipedia - Bataille de Valmy",
                url: "https://fr.wikipedia.org/wiki/Bataille_de_Valmy"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q153825"
            }
        ],
        id: 29
    },
    {
        title: "Exécution de Louis XVI",
        description: "Louis XVI est guillotiné place de la Révolution (actuelle place de la Concorde). L'exécution du roi marque la fin de plus de mille ans de monarchie française.",
        coordinates: [
            48.8656,
            2.3212
        ],
        period: "revolution",
        date: "21 janvier 1793",
        year: 1793,
        location: "Paris, Place de la Concorde",
        category: "Politique",
        sources: [
            {
                name: "Wikipedia - Exécution de Louis XVI",
                url: "https://fr.wikipedia.org/wiki/Ex%C3%A9cution_de_Louis_XVI"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q385011"
            }
        ],
        id: 30
    },
    {
        id: 10,
        title: "Couronnement de Napoléon",
        description: "Napoléon Bonaparte se couronne empereur des Français à Notre-Dame de Paris en présence du pape Pie VII. Cet événement marque l'établissement du Premier Empire.",
        coordinates: [
            48.853,
            2.3499
        ],
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
        coordinates: [
            48.8566,
            2.3522
        ],
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
        title: "Bataille de Waterloo",
        description: "Défaite définitive de Napoléon face aux armées britanniques et prussiennes. Cette bataille marque la fin du Premier Empire et l'exil de Napoléon à Sainte-Hélène.",
        coordinates: [
            48.8566,
            2.3522
        ],
        period: "empire",
        date: "18 juin 1815",
        year: 1815,
        location: "Waterloo (référence à Paris)",
        category: "Bataille",
        sources: [
            {
                name: "Wikipedia - Bataille de Waterloo",
                url: "https://fr.wikipedia.org/wiki/Bataille_de_Waterloo"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q48314"
            }
        ],
        id: 31
    },
    {
        title: "Révolution de 1848",
        description: "Soulèvement populaire à Paris conduisant à l'abdication de Louis-Philippe et à la proclamation de la Deuxième République. Cette révolution inspire d'autres mouvements en Europe.",
        coordinates: [
            48.8566,
            2.3522
        ],
        period: "19e-siecle",
        date: "22-24 février 1848",
        year: 1848,
        location: "Paris, Île-de-France",
        category: "Révolution",
        sources: [
            {
                name: "Wikipedia - Révolution française de 1848",
                url: "https://fr.wikipedia.org/wiki/R%C3%A9volution_fran%C3%A7aise_de_1848"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q58296"
            }
        ],
        id: 32
    },
    {
        title: "Commune de Paris",
        description: "Gouvernement révolutionnaire et socialiste qui contrôle Paris pendant deux mois. La répression sanglante de la Commune marque profondément l'histoire sociale française.",
        coordinates: [
            48.8566,
            2.3522
        ],
        period: "19e-siecle",
        date: "18 mars - 28 mai 1871",
        year: 1871,
        location: "Paris, Île-de-France",
        category: "Révolution",
        sources: [
            {
                name: "Wikipedia - Commune de Paris (1871)",
                url: "https://fr.wikipedia.org/wiki/Commune_de_Paris_(1871)"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q133132"
            }
        ],
        id: 33
    },
    {
        id: 12,
        title: "Construction de la Tour Eiffel",
        description: "Gustave Eiffel construit la tour pour l'Exposition universelle de 1889. Initialement critiquée, elle devient le symbole emblématique de Paris et de la France.",
        coordinates: [
            48.8584,
            2.2945
        ],
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
        coordinates: [
            48.8566,
            2.3522
        ],
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
        title: "Loi de séparation des Églises et de l'État",
        description: "Adoption de la loi instaurant la laïcité en France. Cette loi fondamentale établit la séparation de l'Église et de l'État et garantit la liberté de conscience.",
        coordinates: [
            48.8606,
            2.3376
        ],
        period: "19e-siecle",
        date: "9 décembre 1905",
        year: 1905,
        location: "Paris, Assemblée nationale",
        category: "Politique",
        sources: [
            {
                name: "Wikipedia - Loi de séparation des Églises et de l'État",
                url: "https://fr.wikipedia.org/wiki/Loi_de_s%C3%A9paration_des_%C3%89glises_et_de_l%27%C3%89tat"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q852697"
            }
        ],
        id: 34
    },
    {
        title: "Bataille de la Marne",
        description: "Première grande victoire alliée de la Première Guerre mondiale. Cette bataille arrête l'avancée allemande et sauve Paris d'une occupation.",
        coordinates: [
            48.9667,
            3.6
        ],
        period: "20e-siecle",
        date: "5-12 septembre 1914",
        year: 1914,
        location: "Marne, Grand Est",
        category: "Bataille",
        sources: [
            {
                name: "Wikipedia - Première bataille de la Marne",
                url: "https://fr.wikipedia.org/wiki/Premi%C3%A8re_bataille_de_la_Marne"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q152109"
            }
        ],
        id: 35
    },
    {
        id: 14,
        title: "Bataille de Verdun",
        description: "L'une des batailles les plus meurtrières de la Première Guerre mondiale. Le sacrifice des soldats français à Verdun devient un symbole de la résistance nationale.",
        coordinates: [
            49.1593,
            5.3874
        ],
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
        title: "Armistice de 1918",
        description: "Signature de l'armistice entre les Alliés et l'Allemagne dans un wagon à Rethondes, mettant fin à la Première Guerre mondiale. Cette date devient le symbole de la paix retrouvée.",
        coordinates: [
            49.4267,
            2.9069
        ],
        period: "20e-siecle",
        date: "11 novembre 1918",
        year: 1918,
        location: "Rethondes, Hauts-de-France",
        category: "Politique",
        sources: [
            {
                name: "Wikipedia - Armistice de 1918",
                url: "https://fr.wikipedia.org/wiki/Armistice_de_1918"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q133139"
            }
        ],
        id: 36
    },
    {
        title: "Front populaire",
        description: "Coalition de gauche remportant les élections législatives. Le gouvernement de Léon Blum instaure les congés payés et la semaine de 40 heures, transformant la société française.",
        coordinates: [
            48.8566,
            2.3522
        ],
        period: "20e-siecle",
        date: "1936",
        year: 1936,
        location: "Paris, Île-de-France",
        category: "Sociale",
        sources: [
            {
                name: "Wikipedia - Front populaire (France)",
                url: "https://fr.wikipedia.org/wiki/Front_populaire_(France)"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q170197"
            }
        ],
        id: 37
    },
    {
        id: 15,
        title: "Appel du 18 juin 1940",
        description: "Le général de Gaulle lance depuis Londres un appel à la résistance après la défaite française. Cet appel marque le début de la France Libre et de la Résistance.",
        coordinates: [
            48.8566,
            2.3522
        ],
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
        coordinates: [
            49.3475,
            -0.8834
        ],
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
        title: "Libération de Paris",
        description: "Libération de Paris par les Forces françaises de l'intérieur et les Alliés après quatre ans d'occupation allemande. La libération de la capitale symbolise la renaissance de la France.",
        coordinates: [
            48.8566,
            2.3522
        ],
        period: "20e-siecle",
        date: "19-25 août 1944",
        year: 1944,
        location: "Paris, Île-de-France",
        category: "Bataille",
        sources: [
            {
                name: "Wikipedia - Libération de Paris",
                url: "https://fr.wikipedia.org/wiki/Lib%C3%A9ration_de_Paris"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q152499"
            }
        ],
        id: 38
    },
    {
        title: "Traité de Rome",
        description: "Signature du traité instituant la Communauté économique européenne (CEE). La France, avec cinq autres pays, pose les fondations de l'Union européenne actuelle.",
        coordinates: [
            48.8566,
            2.3522
        ],
        period: "20e-siecle",
        date: "25 mars 1957",
        year: 1957,
        location: "Paris (siège français)",
        category: "Politique",
        sources: [
            {
                name: "Wikipedia - Traité de Rome",
                url: "https://fr.wikipedia.org/wiki/Trait%C3%A9_de_Rome"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q8868"
            }
        ],
        id: 39
    },
    {
        title: "Accords d'Évian",
        description: "Signature des accords mettant fin à la guerre d'Algérie et reconnaissant l'indépendance de l'Algérie. Cet événement marque la fin de l'empire colonial français.",
        coordinates: [
            46.4,
            6.59
        ],
        period: "20e-siecle",
        date: "18 mars 1962",
        year: 1962,
        location: "Évian-les-Bains, Auvergne-Rhône-Alpes",
        category: "Politique",
        sources: [
            {
                name: "Wikipedia - Accords d'Évian",
                url: "https://fr.wikipedia.org/wiki/Accords_d%27%C3%89vian"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q365783"
            }
        ],
        id: 40
    },
    {
        id: 17,
        title: "Mai 68",
        description: "Mouvement de contestation sociale et culturelle majeur combinant grève générale et révolte étudiante. Mai 68 transforme profondément la société française.",
        coordinates: [
            48.8566,
            2.3522
        ],
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
        title: "Inauguration du TGV Paris-Lyon",
        description: "Mise en service de la première ligne à grande vitesse en France. Le TGV devient le symbole de l'excellence technologique française et révolutionne le transport ferroviaire.",
        coordinates: [
            48.8566,
            2.3522
        ],
        period: "20e-siecle",
        date: "27 septembre 1981",
        year: 1981,
        location: "Paris, Île-de-France",
        category: "Infrastructure",
        sources: [
            {
                name: "Wikipedia - LGV Sud-Est",
                url: "https://fr.wikipedia.org/wiki/LGV_Sud-Est"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q948490"
            }
        ],
        id: 41
    },
    {
        title: "Abolition de la peine de mort",
        description: "Adoption de la loi abolissant la peine de mort en France sous l'impulsion de Robert Badinter. La France devient l'un des premiers pays européens à abolir la peine capitale.",
        coordinates: [
            48.8606,
            2.3376
        ],
        period: "20e-siecle",
        date: "9 octobre 1981",
        year: 1981,
        location: "Paris, Assemblée nationale",
        category: "Politique",
        sources: [
            {
                name: "Wikipedia - Abolition de la peine de mort en France",
                url: "https://fr.wikipedia.org/wiki/Abolition_de_la_peine_de_mort_en_France"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q2820489"
            }
        ],
        id: 42
    },
    {
        title: "Ouverture du Musée du Louvre Pyramide",
        description: "Inauguration de la pyramide du Louvre conçue par l'architecte I.M. Pei. Cette structure moderne au cœur de Paris devient l'un des symboles architecturaux du pays.",
        coordinates: [
            48.8606,
            2.3376
        ],
        period: "20e-siecle",
        date: "29 mars 1989",
        year: 1989,
        location: "Paris, Musée du Louvre",
        category: "Architecture",
        sources: [
            {
                name: "Wikipedia - Pyramide du Louvre",
                url: "https://fr.wikipedia.org/wiki/Pyramide_du_Louvre"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q1122087"
            }
        ],
        id: 43
    },
    {
        id: 18,
        title: "Ouverture du Tunnel sous la Manche",
        description: "Inauguration du tunnel ferroviaire reliant la France et le Royaume-Uni. Cette prouesse technique symbolise la coopération européenne moderne.",
        coordinates: [
            50.9233,
            1.8079
        ],
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
    },
    {
        title: "Victoire de la France en Coupe du Monde 1998",
        description: "La France remporte la Coupe du Monde de football à domicile, au Stade de France. Cette victoire devient un symbole d'unité nationale et de fierté collective.",
        coordinates: [
            48.9244,
            2.3601
        ],
        period: "20e-siecle",
        date: "12 juillet 1998",
        year: 1998,
        location: "Saint-Denis, Île-de-France",
        category: "Sociale",
        sources: [
            {
                name: "Wikipedia - Coupe du monde de football 1998",
                url: "https://fr.wikipedia.org/wiki/Coupe_du_monde_de_football_1998"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q101730"
            }
        ],
        id: 44
    },
    {
        title: "Passage à l'Euro",
        description: "La France adopte l'euro comme monnaie officielle, abandonnant le franc français. Cette transition marque une étape majeure dans l'intégration européenne.",
        coordinates: [
            48.8566,
            2.3522
        ],
        period: "contemporain",
        date: "1er janvier 2002",
        year: 2002,
        location: "France entière",
        category: "Politique",
        sources: [
            {
                name: "Wikipedia - Passage à l'euro en France",
                url: "https://fr.wikipedia.org/wiki/Euro#France"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q4916"
            }
        ],
        id: 45
    },
    {
        title: "Attentats du 13 novembre 2015",
        description: "Série d'attentats terroristes à Paris et Saint-Denis faisant 130 morts. Cet événement tragique marque profondément la société française et renforce la lutte contre le terrorisme.",
        coordinates: [
            48.8566,
            2.3522
        ],
        period: "contemporain",
        date: "13 novembre 2015",
        year: 2015,
        location: "Paris, Île-de-France",
        category: "Sociale",
        sources: [
            {
                name: "Wikipedia - Attentats du 13 novembre 2015 en France",
                url: "https://fr.wikipedia.org/wiki/Attentats_du_13_novembre_2015_en_France"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q21572322"
            }
        ],
        id: 46
    },
    {
        title: "Incendie de Notre-Dame de Paris",
        description: "Un incendie majeur ravage la cathédrale Notre-Dame de Paris, détruisant sa flèche et sa charpente. Cet événement suscite une émotion internationale et lance un vaste projet de restauration.",
        coordinates: [
            48.853,
            2.3499
        ],
        period: "contemporain",
        date: "15 avril 2019",
        year: 2019,
        location: "Paris, Île-de-France",
        category: "Architecture",
        sources: [
            {
                name: "Wikipedia - Incendie de Notre-Dame de Paris",
                url: "https://fr.wikipedia.org/wiki/Incendie_de_Notre-Dame_de_Paris"
            },
            {
                name: "Wikidata",
                url: "https://www.wikidata.org/wiki/Q61285149"
            }
        ],
        id: 47
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
