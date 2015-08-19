(function count() {
	'use strict';

	function cmEstatesVisited() {

		function link() {

		}

		return {
			restrict: 'EA',
			templateUrl: '/public/assets/js/app/widgets/estates/widget.visited.html',
			scope: true,
			link: link,
			transclude: true,
		};
	}

	angular
		.module('cm.widgets')
		.directive('cmEstatesVisited', cmEstatesVisited);

}());
