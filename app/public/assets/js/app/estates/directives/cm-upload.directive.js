(function count() {
	'use strict';

	function cmUpload($window, $http, $timeout) {

		function link($scope, element, attrs) {
			var inputFile = angular.element(document.querySelector('#photos')),
				fileData;

			inputFile.bind('change', function change() {
				var fileReader,
					images = inputFile[0].files,
					thumbs = [],
					i = 0;

				$scope.config.loading = true;

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
					$scope.config.galleryloading = false;
					$scope.config.thumbnails = thumbs;
				}, 1000);


				// Select cover photos
				$scope.setCover = function set(e, cover) {
					var thumb = $('.js-thumb');
					thumb.removeClass('active');
					$(e.target).parent().addClass('active');
					$scope.estates.cover = cover;
					$scope.config.coverPreview = $scope.config.thumbnails[cover];
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
			link: link,
		};
	}

	cmUpload.$inject = ['$window', '$http', '$timeout'];

	angular
		.module('cm.widgets')
		.directive('cmUpload', cmUpload);

}());
