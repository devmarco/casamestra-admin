// (function controller() {
// 	'use strict';
//
// 	function EstatesService($http, $q) {
// 		return {
// 			get: function get() {
// 				var defer = $q.defer();
//
// 				$http.get('http://0.0.0.0:8081/estates')
// 					.then(function success(result) {
// 						defer.resolve(result.data);
// 					}, function error(err) {
// 						defer.reject(err);
// 					});
//
// 				return defer.promise;
// 			},
// 			one: function get(id) {
// 				var defer = $q.defer();
//
// 				$http.get('http://0.0.0.0:8081/estates/' + id)
// 					.then(function success(result) {
// 						defer.resolve(result.data);
// 					}, function error(err) {
// 						defer.reject(err);
// 					});
//
// 				return defer.promise;
// 			},
// 		};
// 	}
//
// 	EstatesService.$inject = ['$http', '$q'];
//
// 	angular
// 		.module('cm.estates')
// 		.service('EstatesService', EstatesService);
// }());
