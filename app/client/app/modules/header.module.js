Box.Application.addModule('header', function(context) {
	'use strict';

	var $ = context.getGlobal('jQuery');

	return {
		init: function init() {
			$(document).on('click', function click(e) {
				if (!$(e.target).closest('.nav-header__dropdown').length) {
					$('.nav-header__dropdown').removeClass('active');
				}
		    });

			$('.nav-header__dropdown__area').find('ul').on('click', function(e) {
				e.stopPropagation();
			});
		},
		onclick: function (e, element, elementType) {
			$(element).parent().addClass('active');

			return false;
		},
	};
});
