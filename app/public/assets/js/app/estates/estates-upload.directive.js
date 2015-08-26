(function count() {
	'use strict';

	function cmUpload($window, $http, $timeout) {

		function link($scope, element, attrs) {
			var inputFile = angular.element(document.querySelector('#photos')),
				buttonBx = $(element).find('.gallery__button'),
				loadingBx = buttonBx.find('.loader > span'),
				galleryBx = $('.gallery__thumbs'),
				galleryList = galleryBx.find('ul'),
				fileData,
				thumbs = [];

			// Hide thumbnails
			$scope.inUpload = false;
			$scope.loading = false;

			inputFile.bind('change', function change() {
				var fileReader,
					images = inputFile[0].files,
					i = 0;

				$scope.loading = true;

				fileData = new FormData();

				function create(file) {
					return function create(e) {
						thumbs.push({
							url: e.target.result,
						});
					};
				}

				for (i; i < images.length; i++) {
					if (images[i]) {
						fileReader = new FileReader();
						if (/(\.|\/)(gif|jpe?g|png)$/i.test(images[i].type)) {
							fileReader.onload = create(images[i]);
							fileReader.readAsDataURL(images[i]);
							fileData.append('file', images[i]);
						}
					}
				}

				$scope.$apply();

				$timeout(function() {
					$scope.inUpload = true;
					$scope.loading = false;
					$scope.select = true;
					$scope.thumbnails = thumbs;
				}, 1000);


				// Select cover photos
				$scope.setCover = function set(e) {
					var thumb = $('.js-thumb');
					thumb.removeClass('active');
					$(e.target).parent().addClass('active');
				};
			});

			// $http.patch('http://0.0.0.0:8081/estates/0007cede-e243-4a18-a629-6ad913c5a372/upload', fileData, {
			// 	withCredentials: false,
			// 	headers: {
			// 		'Content-Type': undefined,
			// 	},
			// 	transformRequest: angular.identity,
			// })
			// .success(function success(data) {
			// 	console.log('Success', data);
			// })
			// .error(function erros(data) {
			// 	console.log('Error', data);
			// });
		}

		return {
			restrict: 'A',
			scope: true,
			link: link,
		};
	}

	cmUpload.$inject = ['$window', '$http', '$timeout'];

	angular
		.module('cm.widgets')
		.directive('cmUpload', cmUpload);

}());
