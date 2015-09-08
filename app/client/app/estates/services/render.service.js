Box.Application.addService('render', function(application) {
	'use strict';

	var template = '<div class="small-3 columns" ng-repeat="estate in vm.estates | filter:searchEstate track by $index">' +
		'<a href="/estates/edit/{{ estate.ecmid }}" class="estate">' +
			'<div class="estate__image" style="background-image: url({{ estate.images.cover }})"></div>' +
			'<div class="estate__info">' +
				'<span class="neighborhood">{{ estate.keyDetails.neighborhood }}</span>' +
				'<span class="address">{{ estate.address }}</span>' +
				'<ul>' +
					'<li>' +
						'<span>Venda:</span>' +
						'<span>{{ estate.price | currency }}</span>' +
					'</li>' +
					'<li>' +
						'<span class="icon">' +
							'<img src="/public/assets/imgs/sprites/svg/square.svg" alt="" />' +
						'</span>' +
						'<span>{{ estate.keyDetails.area }} m²</span>' +
					'</li>' +
					'<li>' +
						'<span class="icon">' +
							'<img src="/public/assets/imgs/sprites/svg/bed.svg" alt="" />' +
						'</span>' +
						'<span>{{ estate.bedrooms }}</span>' +
					'</li>' +
					'<li>' +
						'<span class="icon">' +
							'<img src="/public/assets/imgs/sprites/svg/bath.svg" alt="" />' +
						'</span>' +
						'<span>{{ estate.bathrooms }}</span>' +
					'</li>' +
					'<li>' +
						'<span class="icon">' +
							'<img src="/public/assets/imgs/sprites/svg/park.svg" alt="" />' +
						'</span>' +
						'<span>{{ estate.garages }}</span>' +
					'</li>' +
				'</ul>' +
			'</div>' +
		'</a>' +
	'</div>';


	return {
		render: function render() {

		},
	};
});
