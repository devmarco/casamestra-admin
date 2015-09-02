(function count() {
	'use strict';

	function cmAddress($window) {

		function link($scope, element, attrs) {
			var map,
				marker,
				mapElement = $window.$('#address-map'),
				geocoder;

			map = new google.maps.Map(mapElement[0], {
				center: {lat: -34.397, lng: 150.644},
				zoom: 15,
				disableDefaultUI: true,
			});

			geocoder = new google.maps.Geocoder();

			$scope.location = {
				lat: '',
				lng: '',
			};

			function setCoords(lat, lng) {
				$scope.location = {
					lat: lat,
					lng: lng,
				};

				$scope.$apply();
			}

			$scope.setAddress = function set() {
				var marker;

				google.maps.event.trigger(map, 'resize');

				geocoder.geocode( { 'address': $scope.estates.address }, function address(results, status) {
					if (status === google.maps.GeocoderStatus.OK) {
						map.setCenter(results[0].geometry.location);
						marker = new google.maps.Marker({
							map: map,
							draggable: true,
							animation: google.maps.Animation.DROP,
							position: results[0].geometry.location,
						});
						marker.addListener('drag', function addListener(e) {
							setCoords(e.latLng.G, e.latLng.K);
						});
					} else {
						// Message
					}
				});
			};
		}

		return {
			restrict: 'A',
			link: link,
		};
	}

	cmAddress.$inject = ['$window'];

	angular
		.module('cm.widgets')
		.directive('cmAddress', cmAddress);

}());
