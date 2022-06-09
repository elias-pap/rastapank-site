export const articles = [
    {
        src: require('data/articles/nevada.md'),
        title: 'Υπάρχει καλύτερη "Νεβάδα" και τη θέλουμε',
        created_at: 'Mon, 23 May 2022 20:00:00 GMT',
        tags: [ 
            { id: 0, name: 'πανεπιστήμιο'},
            { id: 1, name: 'ερημοποίηση'},
            { id: 2, name: 'επανοικειοποίηση'}
            ],
        short_description: 'Ένα κείµενο για την ερηµοποίηση του πανεπιστηµιακού χώρου και την ανάγκη επανοικειοποίησης του',
        cover: require('data/articles/covers/nevada-cover.jpg'),
        og_cover: require('data/articles/covers/nevada-cover-og.jpg'),
        attachment: require('data/articles/attachments/nevada.pdf'),
        id: 6,
    },
    {
        src: require('data/articles/elas_aei.md'),
        title: 'Λίγο ΕΛ.ΑΣ., λίγο βούρδουλας και το πείραμα θα τρέξει',
        created_at: 'Sun, 13 Dec 2020 20:00:00 GMT',
        tags: [ 
            { id: 0, name: 'ΕΛ.ΑΣ.'},
            { id: 1, name: 'πανεπιστήμιο'},
            { id: 2, name: 'φύλαξη'}
            ],
        short_description: 'Το κείμενο μας με αφορμή τις εξαγγελίες για παρείσφρηση της ΕΛ.ΑΣ. στα πανεπιστήμια',
        id: 5,
    },
    {
        src: require('data/articles/gravanis.md'),
        title: 'Γραβάνη τα φαρμάκια σου, μ’ αφήσανε φιντάνι',
        created_at: 'Mon, 19 Oct 2020 12:00:00 GMT',
        tags: [ 
            { id: 0, name: 'υγεία'},
            { id: 1, name: 'πολιτική'}
            ],
        short_description: 'Κείμενο σχολιασμού για τις δημόσιες τοποθετήσεις του Α. Γραβάνη για Covid19 κ.α.',
        id: 4,
    },
    {
        src: require('data/articles/fyla3h.md'),
        title: 'Φύλαξη πανεπιστημίου (προς Σύγκλητο)',
        created_at: 'Mon, 10 Feb 2020 12:00:00 GMT',
        tags: [ 
            { id: 0, name: 'πανεπιστήμιο'},
            { id: 1, name: 'φύλαξη'}
            ],
        short_description: 'Κείμενο παρεμβασης στη Σύγκλητο για τη φύλαξη του ΠΚ, με αφορμή τα γεγονότα του Δεκέμβρη',
        id: 3
    },
    {
        src: require('data/articles/redpul.md'),
        title: 'Red πουλ.',
        created_at: 'Fri, 29 Mar 2019 12:00:00 GMT',
        tags: [ 
            { id: 0, name: 'ΦΚ'},
            { id: 1, name: 'εταιρία'}
            ],
        short_description: 'Παρέμβαση για τη διενέργεια διαφημιστικής καμπάνιας απο ιδιωτική εταιρία στο ΦΚ.',
        id: 2
    },
    {
        src: require('data/articles/makro19.md'),
        title: 'Μακροβούτες 2019',
        created_at: 'Mon, 11 Mar 2019 12:00:00 GMT',
        tags: [ 
            { id: 0, name: 'μακροβουτες'},
            { id: 1, name: 'κάλεσμα'}
            ],
        short_description: 'Κάλεσμα για τις μακροβούτες του 2019',
        id: 1
    },
    {
        src: require('data/articles/enisa.md'),
        title: 'Φοιτητικές εστίες, ENISA και ευρωπαϊκό σχολείο. Μια σειρά από λάθος προτεραιότητες.',
        created_at: 'Fri, 30 Nov 2018 12:00:00 GMT',
        tags: [ 
            { id: 0, name: 'πανεπιστήμιο'},
            { id: 1, name: 'εστίες'},
            { id: 2, name: 'enisa'}
            ],
        short_description: 'Κείμενο παρεμβασης για τις κτιριακές προτεραιότητες στο ΠΚ',
        id: 0
    }
]