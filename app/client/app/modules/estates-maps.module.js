Box.Application.addModule('estates.maps', function(context) {
	'use strict';

	var $ = context.getGlobal('jQuery');
	var google = context.getGlobal('google');
	var step = 1;

	return {
		init: function init() {
			var mapElement = $('#address-map');

			this.map = new google.maps.Map(mapElement[0], {
				center: {lat: -34.397, lng: 150.644},
				zoom: 15,
				disableDefaultUI: true,
			});

			this.geocoder = new google.maps.Geocoder();

			// $scope.location = {
			// 	lat: '',
			// 	lng: '',
			// };

			function setCoords(lat, lng) {
				// $scope.location = {
				// 	lat: lat,
				// 	lng: lng,
				// };
				//
				// $scope.$apply();
			}

		},
		onclick: function click(e, element, elementType) {
			var _this = this;

			function search() {
				var marker;

				google.maps.event.trigger(_this.map, 'resize');

				_this.geocoder.geocode( { 'address': _this.address }, function address(results, status) {
					if (status === google.maps.GeocoderStatus.OK) {
						_this.map.setCenter(results[0].geometry.location);
						marker = new google.maps.Marker({
							map: _this.map,
							draggable: true,
							animation: google.maps.Animation.DROP,
							position: results[0].geometry.location,
						});
						marker.addListener('drag', function addListener(e) {
							//setCoords(e.latLng.G, e.latLng.K);
						});
					} else {
						// Message
					}
				});
			}

			if (elementType === 'search') search();

		},
		onkeyup: function keyup(e, element, elementType) {
			var _this = this;

			function setAddress() {
				_this.address = element.value;
			}

			if (elementType === 'address') setAddress();
		},
	};
});
