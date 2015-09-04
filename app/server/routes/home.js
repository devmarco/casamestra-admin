/* ------------------------------------ *\
	[HOME]
\* ------------------------------------ */

var Path = require('path');
var pc = require('paperclip');
var fs = require('fs');
var homeview;
var headerPath;
var header;

headerPath = Path.join(__dirname, '../../client/app/templates', 'header.pc');

header = pc.template(fs.readFileSync(headerPath, 'utf8'), {
	compile: require('paperclip/compile/default'),
});

homeView = {
	method: 'GET',
	path: '/',
	handler: function handler(req, reply) {
		var view = header.view({
			title: 'Marco',
		});

		reply.view('index', {
			header: view.render(),
		});
	},
};

module.exports = homeView;
