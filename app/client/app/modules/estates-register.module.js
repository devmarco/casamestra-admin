Box.Application.addModule('estates.register', function(context) {
	'use strict';

	var step = 1;

	return {
		behaviors: ['select-multiple'],
		init: function init() {
		},
		onclick: function(e, element, elementType) {
			function changeStep(n) {
				$('[data-step]').hide();
				$('[data-step=' + n + ']').show();
			}

			function next() {
				if (step !== 3 ) changeStep(++step);
			}

			function prev() {
				if (step !== 0 ) changeStep(--step);
			}

			if (elementType === 'next') next();
			if (elementType === 'prev') prev();
		},
	};
});
