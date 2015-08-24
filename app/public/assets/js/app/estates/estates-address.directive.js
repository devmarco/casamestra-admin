(function count() {
	'use strict';

	function cmAddress($window) {

		function link($scope, element, attrs) {
			var map,
				marker,
				mapElement = document.getElementById('address-map'),
				addressBtn = document.querySelector('.js-address-btn'),
				latBtn = document.querySelector('.js-lat'),
				lngBtn = document.querySelector('.js-lng');

			map = new google.maps.Map(mapElement, {
				center: {lat: -34.397, lng: 150.644},
				zoom: 8,
			});

			marker = new google.maps.Marker({
				map: map,
				draggable: true,
				animation: google.maps.Animation.DROP,
				position: {lat: 59.327, lng: 18.067},
			});

			marker.addListener('drag', function addListener(e) {
				latBtn.value = e.latLng.G;
				lngBtn.value = e.latLng.K;
			});

			$scope.setAddress = function set() {
				console.log('Change');
			};
		}

		return {
			restrict: 'A',
			scope: true,
			link: link,
		};
	}

	cmAddress.$inject = ['$window'];

	angular
		.module('cm.widgets')
		.directive('cmAddress', cmAddress);

}());
