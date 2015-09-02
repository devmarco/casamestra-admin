(function controller() {
	'use strict';

	function ctrl(estates) {
		var vm = this;
		vm.estates = estates;
	}

	ctrl.$inject = ['estates'];

	angular
		.module('cm.estates')
		.controller('Estates', ctrl);
}());
