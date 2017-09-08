function initMap() {
	var store = {
		lat: 55.530613,
		lng: 37.574737
	};

	var iconStore = '../img/marker-icon-store.svg';

	var mapStore = new google.maps.Map(document.getElementById('store-map'), {
		center: store,
		zoom: 16
	});

	var markerStore = new google.maps.Marker({
    position: store,
    map: mapStore,
    title: 'Склад',
		icon: iconStore
  });
}
google.maps.event.addDomListener(window, 'load', initMap);