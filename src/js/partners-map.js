function initMap() {
	var centerMap = {
		lat: 54.214718,
		lng: 46.440835
	};

	var clusterRed = '../img/clusterRed.svg';
	var clusterBlue = '../img/clusterBlue.svg';

	var locations = [
		{
			pos: {
				lat: 55.530613,
				lng: 37.574737
			},
			marker: clusterRed
		},
		{
			pos: {
				lat: 51.710951,
				lng: 39.225445
			},
			marker: clusterBlue
			},
		{
			pos: {
				lat: 51.692139,
				lng: 39.151593
			},
			marker: clusterBlue
			},
		{
			pos: {
				lat: 55.827435,
				lng: 49.112308
			},
			marker: clusterBlue
		},
		{
			pos: {
				lat: 55.819253,
				lng: 49.100104
			},
			marker: clusterRed
		}
	];

	var mapPartners = new google.maps.Map(document.getElementById('partners-map'), {
		center: centerMap,
		zoom: 6,
		styles: [
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#e9e9e9"
            },
					{
						"lightness": 17
            }
        ]
    	},
			{
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#f5f5f5"
            },
					{
						"lightness": 20
            }
        ]
    	},
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
            },
					{
						"lightness": 17
            }
        ]
    	},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#ffffff"
            },
					{
						"lightness": 29
            },
					{
						"weight": 0.2
            }
        ]
    	},
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
            },
					{
						"lightness": 18
            }
        ]
    	},
			{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
            },
					{
						"lightness": 16
            }
        ]
    	},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#f5f5f5"
            },
					{
						"lightness": 21
            }
        ]
    	},
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#dedede"
            },
					{
						"lightness": 21
            }
        ]
    	},
			{
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"visibility": "on"
            },
					{
						"color": "#ffffff"
            },
					{
						"lightness": 16
            }
        ]
    	},
			{
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"saturation": 36
            },
					{
						"color": "#333333"
            },
					{
						"lightness": 40
            }
        ]
    	},
			{
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
            }
        ]
    	},
			{
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#f2f2f2"
            },
					{
						"lightness": 19
            }
        ]
    	},
			{
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#fefefe"
            },
					{
						"lightness": 20
            }
        ]
    	},
			{
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#fefefe"
            },
					{
						"lightness": 17
            },
					{
						"weight": 1.2
            }
        ]
    	}
		]
	});

	var markers = locations.map(function (location, i) {
		console.log(location)
		return new google.maps.Marker({
			position: location.pos,
			map: mapPartners,
			icon: location.marker
		});
	});

	var styles = [[{
		url: '../img/clusterBlue1.png',
		height: 24,
		width: 24,
		textColor: "#ffffff",
		textSize: 12
	}, {
		url: '../images/people45.png',
		height: 45,
		width: 45,
		anchor: [24, 0],
		textColor: '#ff0000',
		textSize: 12
	}]];

	var markerCluster = new MarkerClusterer(mapPartners, markers, {
		imagePath: '../img/clusterBlue',
		styles: styles[0],
		zoomOnClick: true
	});
	//		// Смена города
	//		$('.contacts__select').on('change', function () {
	//			var city = $(this).val()
	//			var geocoder = new google.maps.Geocoder();
	//			geocoder.geocode({
	//				'address': city
	//			}, function (results, status) {
	//				if (status == google.maps.GeocoderStatus.OK) {
	//					mapContacts.setCenter(results[0].geometry.location);
	//				} else {
	//					// something is wrong
	//				}
	//			});
	//		});

	$('.partners__item').on('click', function(){
		var mapItem = $(this).data('map') - 1;

		mapPartners.setCenter(locations[mapItem].pos);
		mapPartners.setZoom(15);
	})

}
google.maps.event.addDomListener(window, 'load', initMap);
