Box.Application.addModule('estates.content', function(context) {
	'use strict';

	var _estates = context.getService('estates.service');
	var _render = context.getService('render.service');

	return {
		init: function init() {
			_estates.get().then(function(data) {
				_render.render(data);
			});
		},
	};
});
