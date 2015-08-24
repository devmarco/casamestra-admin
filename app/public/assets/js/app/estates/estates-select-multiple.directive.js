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
					item: function item(item, escape) {
						return '<div>' +
							(item.name ? '<span class="name">' + escape(item.name) + '</span>' : '') +
							(item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
						'</div>';
					},
					option: function option(item, escape) {
						var label = item.name || item.email;
						var caption = item.name ? item.email : null;
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
