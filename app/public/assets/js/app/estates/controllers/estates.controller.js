(function controller() {
	'use strict';

	function ctrl(EstatesService) {
		var vm = this;

		EstatesService.get().then(function fetch(estates) {
			vm.estates = estates;
		});
	}

	ctrl.$inject = ['EstatesService'];

	angular
		.module('cm.estates')
		.controller('Estates', ctrl);
}());
