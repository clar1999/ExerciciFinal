var config = {
    style: 'mapbox://styles/mikelclar99/clfnufpa000s501mx0qw0q4f4',
    accessToken: 'pk.eyJ1IjoibWlrZWxjbGFyOTkiLCJhIjoiY2xjejFuZnB4MjhpcTNvcDExb2QzZTg4dSJ9.P3zW-pHSnSqxJD-aQndBOw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'Futures Seus Olímpiques',
    subtitle: 'Aquestes són les ciutats que acolliran les futures edicions d un dels esdeveniments més grans del món: els Jocs Olímpics!',
    byline: 'Mikel Clar Belaustegui (SIG 2023)',
    footer: 'Font: JJOO Oficial website',
    chapters: [
        {
            id: 'city1',
            alignment: 'left',
            hidden: false,
            title: '2024 - Paris, Francia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/2024_Summer_Olympics_text_logo.svg',
            description: 'Los Juegos Olímpicos de París 2024, oficialmente conocidos como los Juegos de la XXXIII Olimpiada, está previsto que sean un evento multideportivo internacional que se llevará a cabo entre el 26 de julio y el 11 de agosto de 2024 en la ciudad de París, Francia. La capital francesa presentó oficialmente su candidatura el 23 de junio de 2015. ',
            location: {
                center: [2.34534, 48.86383],
                zoom: 11.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
        },{
            id: 'city2',
            alignment: 'right',
            hidden: false,
            title: '2028 - Los Angeles, USA',
            image: 'https://www.univision.com/proxy/api/cached/picture?href=https%3A%2F%2Fst1.uvnimg.com%2F8b%2F81%2F4d20636e4ad881ceabef33313d5c%2Fla-2028-olympics.jpg&width=1141&height=760&ratio_width=1240&ratio_height=698&format=webp',
            description: 'Els Jocs Olímpics de Los Angeles 2028, oficialment coneguts com els Jocs de la XXXIV Olimpíada, seran un esdeveniment internacional multiesportiu que es durà a terme el 2028 a la ciutat de Los Angeles, Estats Units. Inicialment, Los Angeles va presentar la seva candidatura als Jocs Olímpics de 2024. Encara que shavia plantejat que la seu daquests Jocs fos seleccionada el 13 de setembre de 2017, durant la 130a Sessió del Comitè Olímpic Internacional a Lima, el 31 de juliol de 2017, Los Angeles va arribar a un acord amb el COI per retirar la seva candidatura i acceptar organitzar els Jocs de 2028, permetent que París acollís lesdeveniment en 2024.',
            location: {
                center: [-118.18673, 34.02695],
                zoom: 9.5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'city3',
            alignment: 'left',
            hidden: false,
            title: '2032 - Brisbane, Australia',
            image: 'https://brisbanedevelopment.com/wp-content/uploads/2021/07/Feature-Image.jpg',
            description: 'Els Jocs Olímpics de Brisbane 2032, oficialment coneguts com els Jocs de la XXXV Olimpíada, seran un esdeveniment internacional multiesportiu que es durà a terme entre el 23 de juliol i el 8 dagost de 2032 a la ciutat de Brisbane, Austràlia. La candidatura guanyadora fou escollida i anunciada pel Comitè Olímpic Internacional el 21 de juliol de 2021 just abans de linici dels Jocs Olímpics dEstiu de 2020. Brisbane esdevingué la primera ciutat en aconseguir ser seu duns jocs sota la nova normativa de presentació de candidatures. Aquests Jocs seran els tercers que tindran lloc a Austràlia, després dels Jocs Olímpics dEstiu de 1956 de Melbourne i els Jocs Olímpics dEstiu del 2000 de Sydney. També seran els segons Jocs destiu que se celebraran a lhemisferi sud durant lhivern, després dels Jocs Olímpics dEstiu de 2016 de Rio de Janeiro. ',
            location: {
                center: [153.04961, -27.43769],
                zoom: 10.44,
                pitch: 38.5,
                bearing: -117.60,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};