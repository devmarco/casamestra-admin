Box.Application.addModule('estates.filter', function(context) {
	'use strict';

	var _estates = context.getService('estates.service');
	var _render = context.getService('render.service');
	var _filter = context.getService('filter.service');
	var estates;
	var filteredEstates;

	return {
		behaviors: ['select'],
		init: function() {
			_estates.get().then(function(data) {
				estates = data;
			});
		},
		onkeyup: function key(e, element, elementType) {
			var value = element.value.toLowerCase();
			var estateObj;

			if (value === '') {
				_render.update(estates);
			} else {
				$(element).addClass('active');

				filteredEstates = _filter.address(estates, value);

				_render.update(filteredEstates);
			}
		},
		onchange: function change(e, element, elementType) {
			if (elementType === 'filter-buildingType') _render.update(_filter.buildingType(filteredEstates || estates, element.value));
			if (elementType === 'filter-status') _render.update(_filter.status(filteredEstates || estates, element.value));
			if (elementType === 'filter-action') _render.update(_filter.action(filteredEstates || estates, element.value));
		}
	};
});
