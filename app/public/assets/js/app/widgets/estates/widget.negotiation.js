(function count() {
	'use strict';

	function cmEstatesNegotiation() {

		function link() {

		}

		return {
			restrict: 'EA',
			templateUrl: '/public/assets/js/app/widgets/estates/widget.negotiation.html',
			scope: true,
			link: link,
			transclude: true,
		};
	}

	angular
		.module('cm.widgets')
		.directive('cmEstatesNegotiation', cmEstatesNegotiation);

}());
