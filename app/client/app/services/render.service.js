Box.Application.addService('render.service', function(application) {
	'use strict';

	var pc = application.getGlobal('paperclip');
	var estatesTemplate;

	estatesTemplate = '<repeat each="{{ estates }}" as="e">' +
	'<div easeIn="{{ fadeIn }}" class="estate-block small-3 columns">' +
		'<a href="/estates/edit/{{ e.ecmid }}" class="estate">' +
			'<div class="estate__image" style="background-image: url({{ e.images.cover }})"></div>' +
			'<div class="estate__info">' +
				'<span class="neighborhood">{{ e.keyDetails.neighborhood }}</span>' +
				'<span class="address">{{ e.address }}</span>' +
				'<ul>' +
					'<li>' +
						'<span>Venda:</span>' +
						'<span>{{ e.price }}</span>' +
					'</li>' +
					'<li>' +
						'<span class="icon">' +
							'<img src="/public/assets/imgs/sprites/svg/square.svg" alt="" />' +
						'</span>' +
						'<span>{{ e.keyDetails.area }} m²</span>' +
					'</li>' +
					'<li>' +
						'<span class="icon">' +
							'<img src="/public/assets/imgs/sprites/svg/bed.svg" alt="" />' +
						'</span>' +
						'<span>{{ e.bedrooms }}</span>' +
					'</li>' +
					'<li>' +
						'<span class="icon">' +
							'<img src="/public/assets/imgs/sprites/svg/bath.svg" alt="" />' +
						'</span>' +
						'<span>{{ e.bathrooms }}</span>' +
					'</li>' +
					'<li>' +
						'<span class="icon">' +
							'<img src="/public/assets/imgs/sprites/svg/park.svg" alt="" />' +
						'</span>' +
						'<span>{{ e.garages }}</span>' +
					'</li>' +
				'</ul>' +
			'</div>' +
		'</a>' +
	'</div>' +
	'</repeat>';


	return {
		update: function(data) {
			console.log(data);
			this.view.set('estates', data);
		},
		render: function rndr(data) {
			var template = pc.template(estatesTemplate);

			this.view = template.view({
				estates: data,
				fadeIn: function (node) {
					$(node).fadeIn(1000);
				},
				fadeOut: function (node, complete) {
					$(node).fadeOut(1000);
				}
			});

			document.getElementById('estates').appendChild(this.view.render());
		},
	};
});
