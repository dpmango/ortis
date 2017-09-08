function initMap() {
	var office = {
		lat: 55.635469,
		lng: 37.438384
	};

	var iconOffice = '../img/marker-icon-office.svg';

	var mapOffice = new google.maps.Map(document.getElementById('contacts-map'), {
		center: office,
		zoom: 16
	});
	
	var markerOffice = new google.maps.Marker({
    position: office,
    map: mapOffice,
    title: 'Офис',
		iconOffice: iconOffice
  });
	//	var markers = locations.map(function (location, i) {
	//		return new google.maps.Marker({
	//			position: location,
	//			map: mapContacts,
	//			icon: myicon
	//		});
	//	});
	//	var markerCluster = new MarkerClusterer(mapContacts, markers, {
	//		imagePath: '../img/cluster'
	//	});
	//	// Смена города
	//	$('.contacts__select').on('change', function () {
	//		var city = $(this).val()
	//		var geocoder = new google.maps.Geocoder();
	//		geocoder.geocode({
	//			'address': city
	//		}, function (results, status) {
	//			if (status == google.maps.GeocoderStatus.OK) {
	//				mapContacts.setCenter(results[0].geometry.location);
	//			} else {
	//				// something is wrong
	//			}
	//		});
	//	});
}
google.maps.event.addDomListener(window, 'load', initMap);
var locations = [
	{
		lat: 48.924104,
		lng: 24.711977
	},
	{
		lat: 48.926740,
		lng: 24.712009
		},
	{
		lat: 48.927988,
		lng: 24.715421
		},
	{
		lat: 50.452228,
		lng: 30.522073
	},
	{
		lat: 50.451921,
		lng: 30.524433
	}
	];