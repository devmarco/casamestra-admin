(function controller() {
	'use strict';

	function ctrl(estate) {
		var vm = this;
		console.log(estate);
		vm.estate = estate;
	}

	ctrl.$inject = ['estate'];

	angular
		.module('cm.estates')
		.controller('EstatesEdit', ctrl);
}());