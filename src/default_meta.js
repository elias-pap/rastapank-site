export function get_default_meta({
                                     title = 'Ρασταπανκ FM 96.7',
                                     description = 'Ο σταθμός του Πανεπιστημίου Κρήτης στο Ηράκλειο',
                                     image = window.location.protocol + '//rastapank.radio.uoc.gr/static/media/rastapank-logo-967_64.png',
                                     type = 'music.radio_station',
                                     url = document.location.href,
                                     keywords = 'Ρασταπανκ,rastapank,radio,radio station,heraklion,uoc,ηράκλειο,φοιτητικός σταθμός,Πανεπιστημίου Κρήτης'
                                 } = {}
) {
    return {
        title: title,
        description: description,
        meta: {
            property: {
                'og:title': title,
                'og:description': description,
                'og:image': image,
                'og:type': type,
                'og:url': url
            },
            charset: 'utf-8',
            name: {
                keywords: keywords
            }
        }
    }
}

get_default_meta()