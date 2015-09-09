Box.Application.addBehavior('select', function(context) {
	'use strict';

	var $ = context.getGlobal('jQuery');

	return {
		init: function init(e) {
			// var select = $(context.element).find('.select');
			//
			// if (select) {
			// 	select.find('select').selectize({
			// 		create: false,
			// 		sortField: 'text',
			// 		hideSelected: false,
			// 	});
			// }
		},
	};
});
