(function count() {
	'use strict';

	function cmSelectMultiple($window) {

		function link($scope, element, attrs) {
			$(element[0]).selectize({
				persist: false,
				maxItems: null,
				valueField: 'email',
				labelField: 'name',
				searchField: ['name', 'email'],
				options: [
					{email: 'brian@thirdroute.com', name: 'Brian Reavis'},
					{email: 'nikola@tesla.com', name: 'Nikola Tesla'},
					{email: 'someone@gmail.com'},
				],
				render: {
					item: function render(option, escape) {
						return '<div>' +
							(option.name ? '<span class="name">' + escape(option.name) + '</span>' : '') +
							(option.email ? '<span class="email">' + escape(option.email) + '</span>' : '') +
						'</div>';
					},
					option: function select(option, escape) {
						var label = option.name || option.email;
						var caption = option.name ? option.email : null;
						return '<div>' +
							'<span class="label">' + escape(label) + '</span>' +
							(caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
						'</div>';
					},
				},
			});
		}

		return {
			restrict: 'A',
			scope: true,
			link: link,
		};
	}

	cmSelectMultiple.$inject = ['$window'];

	angular
		.module('cm.widgets')
		.directive('cmSelectMultiple', cmSelectMultiple);

}());
