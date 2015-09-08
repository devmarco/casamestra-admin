Box.Application.addModule('header', function(context) {
	'use strict';
	// Globals
	var paperclip = context.getGlobal('paperclip');

	return {
		init: function init() {
			var t = '<h1>{{ title }}</h1>';
			var template = paperclip.template(t);
			var view;

			view = template.view({
				title: 'Marco',
			});

			view.render();

			setTimeout(function() {
				view.set('title', 'Marco99999');
			}, 3000);
		},
	};
});
