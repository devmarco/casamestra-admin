(function count() {
	'use strict';

	function weCompare($window) {

		function link(scope, element, attrs) {
			var chart;
			var data;
			var ctx;

			ctx = element[0].querySelector('.compare-chart').getContext('2d');

			data = [
				{
					value: 300,
					color: '#00CAD2',
					highlight: '#219CA0',
					label: 'Vendas',
				},
				{
					value: 50,
					color: '#2A3038',
					highlight: '#3C434C',
					label: 'Alugueis',
				},
			];

			chart = new $window.Chart(ctx).Doughnut(data, {
				segmentShowStroke: true,
				segmentStrokeColor: '#fff',
				segmentStrokeWidth: 2,
				percentageInnerCutout: 50, // This is 0 for Pie charts
				animationSteps: 100,
				animationEasing: 'easeOutBounce',
				animateRotate: true,
				animateScale: false,
				legendTemplate: '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<segments.length; i++){%><li><span style=\'background-color:<%=segments[i].fillColor%>\'></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',

			});
		}

		return {
			templateUrl: '/public/assets/js/app/widgets/templates/compare.html',
			restrict: 'EA',
			scope: true,
			link: link,
		};
	}

	weCompare.$inject = ['$window'];

	angular
		.module('cm.widgets')
		.directive('weCompare', weCompare);

}());
