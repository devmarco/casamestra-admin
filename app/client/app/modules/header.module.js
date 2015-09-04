Box.Application.addModule('header', function(context) {
	'use strict';
	// Globals
	var paperclip = context.getGlobal('paperclip');

	return {
		init: function init() {
			var template = paperclip.template(t);
			var view;

			console.log('init');

			view = template.view({
				title: 'Marco',
			});

			view.render();
		},
	};
});
