Box.Application.addBehavior('select-multiple', function(context) {
	'use strict';

	var $ = context.getGlobal('jQuery');

	return {
		init: function init(e) {
			var select = $(context.element).find('.select--multiple');

			if (select) {
				select.find('select').selectize({
					plugins: ['remove_button'],
					maxItems: null,
				});
			}
		},
	};
});
