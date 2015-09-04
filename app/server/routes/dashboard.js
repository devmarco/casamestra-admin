/* ------------------------------------ *\
	[HOME]
\* ------------------------------------ */

var Path = require('path');
var pc = require('paperclip');
var fs = require('fs');
var homeview;

homeView = {
	method: 'GET',
	path: '/dashboard',
	handler: function handler(req, reply) {
		var headerPath = Path.join(__dirname, '../views/templates', 'header.pc');

		var header = pc.template(fs.readFileSync(headerPath, 'utf8'), {
			compile: require('paperclip/compile/default'),
		});

		var view = header.view({
			title: 'Marco',
		});

		reply.view('index', {
			header: view.render(),
		});
	},
};

module.exports = homeView;
