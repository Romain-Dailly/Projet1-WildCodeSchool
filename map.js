
// On initialise la latitude et la longitude de Nantes (centre de la carte)
			var lat = 47.218371;
			var lon = -1.553621;
			var macarte = null;
// Nous initialisons une liste de marqueurs
            var tripDay = {
                "<a href='day_gallery.html#bretagne'>Tour de Bretagne<br\>Le nid</a>": { "lat": 47.218, "lon": -1.5589400000000069 },
                "<a href='day_gallery.html#bretagne'>Marché de Talensac</a>": { "lat": 47.2215, "lon": -1.557230000000004 },
                "<a href='day_gallery.html#graslin_day'>Place Graslin": { "lat": 47.2128, "lon": -1.5624400000000378 },
                "<a href='day_gallery.html#graslin_day'>Place Royale": { "lat": 47.2147, "lon": -1.5587000000000444 },
                "<a href='day_gallery.html#graslin_day'>Passage Pommeraye": { "lat": 47.2136, "lon": -1.5600100000000339 },
                "<a href='day_gallery.html#bouffay_day'>Place Bouffay": { "lat": 47.215, "lon": -1.553229999999985 },
                "<a href='day_gallery.html#castel_day'>Château des Ducs de Bretagne": { "lat": 47.2183752, "lon": -1.5501803 },
                "<a href='day_gallery.html#idn'>Carrousel<br\>Machines de l'île": { "lat": 47.206, "lon": -1.563949999999977 },
                "<a href='day_gallery.html#idn'>La Cantine": { "lat": 47.2071224, "lon": -1.5588664 },
                "<a href='day_gallery.html#idn'>Transfert": { "lat": 47.1949, "lon": -1.5687199999999848 },
                "<a href='day_gallery.html#trente'>Trentemoult": { "lat": 47.1952, "lon": -1.581199999999967 }
            };
            var tripNight = {
                "<a href='night_gallery.html#bouffay_night'>Quartier Bouffay": { "lat": 47.2149, "lon": -1.5529599999999846 },
                "<a href='night_gallery.html#bouffay_night'>Château<br\>Miroir d'eau": { "lat": 47.2165, "lon": -1.5506000000000313 },
                "<a href='night_gallery.html#hab'>Hangar à bananes<br\>le Ferailleur<br\>Rondpoint": { "lat": 47.2034, "lon": -1.5718699999999899 },
                "<a href='night_gallery.html#hab'>Bar le Rondpoint": { "lat": 47.2034, "lon": -1.5718699999999899 },
                "<a href='night_gallery.html#graslin_night'>Cinéma le Katorza": { "lat": 47.2136, "lon": -1.562530000000038 },
                "<a href='night_gallery.html#graslin_night'>Rue Scribe": { "lat": 47.214, "lon": -1.561869999999999 },
                "<a href='night_gallery.html#feydeau'>Bar Au chat noir": { "lat":47.2173, "lon": -1.5534 },
                "<a href='night_gallery.html#feydeau'>Bar le Berthom": { "lat": 47.1936, "lon": -1.5300399999999854 },
                "<a href='night_gallery.html#feydeau'>Bar le Tiki": { "lat": 47.2125, "lon": -1.55628999999999 }
            };
// Fonction d'initialisation de la carte
			function initMap() {
                var markers = []; // Nous initialisons la liste des marqueurs
// Nous définissons le dossier qui contiendra les marqueurs
                var iconeDay = 'https://i.postimg.cc/JzSfGLgZ/marker-day-64px.png';
                var iconeNight = 'https://i.postimg.cc/QdBL8t6j/marker-night-64px.png';
// Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
                macarte = L.map('map').setView([lat, lon], 11);
// Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
                L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
// Il est toujours bien de laisser le lien vers la source des données
                    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                    minZoom: 1,
                    maxZoom: 20
                }).addTo(macarte);
// Nous parcourons la liste des villes
            for (ville in tripDay) {
        var myIconDay = L.icon({
			iconUrl: iconeDay,
			iconSize: [40, 50],
			iconAnchor: [25, 50],
			popupAnchor: [-3, -50],
		});
        var marker = L.marker([tripDay[ville].lat, tripDay[ville].lon], { icon: myIconDay }).addTo(macarte);
            marker.bindPopup(ville); // Nous ajoutons la popup. A noter que son contenu (ici la variable ville) peut être du HTML
            markers.push(marker); // Nous ajoutons le marqueur à la liste des marqueurs
            }   
            
            for (ville in tripNight) {
		var myIconNight = L.icon({ // Nous définissons l'icône à utiliser pour le marqueur, sa taille affichée (iconSize), sa position (iconAnchor) et le décalage de son ancrage (popupAnchor)
			iconUrl: iconeNight,
			iconSize: [40, 50],
			iconAnchor: [25, 50],
			popupAnchor: [-3, -50],
		});
		    var marker = L.marker([tripNight[ville].lat, tripNight[ville].lon], { icon: myIconNight }).addTo(macarte);
            marker.bindPopup(ville);    
            markers.push(marker); // Nous ajoutons le marqueur tripNight à la liste des marqueurs
            }  
                // Nous ajoutons un marqueur
                
                var group = new L.featureGroup(markers); // Nous créons le groupe des marqueurs pour adapter le zoom
	            macarte.fitBounds(group.getBounds().pad(0.5)); // Nous demandons à ce que tous les marqueurs soient visibles, et ajoutons un padding (pad(0.5)) pour que les marqueurs ne soient pas coupés
            }
			window.onload = function() {
				// Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
				initMap(); 
			};

