(function count() {
	'use strict';

	function cmUpload($window, $http) {

		function link($scope, element, attrs) {
			var buttonBx = $(element).find('.gallery__button'),
				loadingBx = buttonBx.find('.loader > span'),
				galleryBx = $('.gallery__thumbs'),
				galleryList = galleryBx.find('ul'),
				fileData;

			$scope.upload = function upload(images) {
				var fRead,
					thumb,
					i = 0;

				fileData = new FormData();

				fileData.append('cover', 1);

				function create(file) {
					return function create(e) {
						thumb = '<li><span style="background-image: url(' + e.target.result + ')"></span></li>';
						galleryList.append(thumb);
					};
				}

				for (i in images) {
					if (images[i]) {
						fRead = new FileReader();
						if (/(\.|\/)(gif|jpe?g|png)$/i.test(images[i].type)) {
							fileData.append('file', images[i]);
							fRead.onload = create(images[i]);
							fRead.readAsDataURL(images[i]);
						}
					}
				}

				$http.patch('http://0.0.0.0:8081/estates/0007cede-e243-4a18-a629-6ad913c5a372/upload', fileData, {
					withCredentials: false,
					headers: {
						'Content-Type': undefined,
					},
					transformRequest: angular.identity,
				})
				.success(function success(data) {
					console.log('Success', data);
				})
				.error(function erros(data) {
					console.log('Error', data);
				});
			};

			// function activeLoading() {
			// 	buttonBx.addClass('active');
			// 	galleryBx.show();
			// }
			//
			// function showGallery() {
			// 	buttonBx.hide();
			// }
			//
			// $(element[0]).transloadit({
			// 	wait: true,
			// 	modal: false,
			// 	fields: true,
			// 	autoSubmit: false,
			// 	triggerUploadOnFileSelection: true,
			// 	params: {
			// 		auth: { key: '39575f7020f211e59ce6414129454e12'},
			// 		template_id: 'bac9b260241211e5ab88e55411778119',
			// 	},
			// 	onStart: function() {
			// 		activeLoading();
			// 	},
			// 	onProgress: function progress(bytesReceived, bytesExpected) {
			// 		loadingBx.css('width', ((bytesReceived / bytesExpected * 100).toFixed(2) + '%'));
			// 	},
			// 	onResult: function result(step, result) {
			// 		var thumb;
			//
			// 		if (step !== 'thumb') return false;
			//
			// 		thumb = '<li><span style="background-image: url(' + result.url + ')"></span></li>';
			//
			// 		galleryList.append(thumb);
			// 	},
			// 	onSuccess: function(result) {
			// 		showGallery();
			// 	},
			// 	onError: function error(assembly) {
			// 		alert(assembly.error + ': ' + Assembly.message);
			// 	},
			// });
		}

		return {
			restrict: 'A',
			scope: true,
			link: link,
		};
	}

	cmUpload.$inject = ['$window', '$http'];

	angular
		.module('cm.widgets')
		.directive('cmUpload', cmUpload);

}());
