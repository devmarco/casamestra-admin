(function count() {
	'use strict';

	function cmPanel() {

		function link() {

		}

		return {
			restrict: 'EA',
			templateUrl: '/public/assets/js/app/widgets/widget.panel.html',
			scope: {
				title: '@',
				total: '@',
			},
			link: link,
		};
	}

	angular
		.module('cm.widgets')
		.directive('cmPanel', cmPanel);

}());
