(function () {

	'use strict';

	angular.module('cognitionApp').controller('demoCtrl',
		function ($scope, $http) {
			$scope.createReport = function () {
				alert("Test");
			}
			$scope.gender = "1";
			$scope.submitToApi = function () {
				var requestdata = {
					startdate: $scope.startdate,
					enddate: $scope.enddate,
				}

				var apiurl = "https://live.danalto.com/api/v1/devices/4883c7df300513e7/data/?start_timestamp=1516696034&end_timestamp=1516796034"; //Your API url here
				$http({
					method : "GET",
					url : "https://live.danalto.com/api/v1/devices/4883c7df300513e7/data/?start_timestamp=1516696034&end_timestamp=1516796034",
					header: {
						"Accept" : "application/json",
						"X-CSRFToken"	: "BDaYjkf31rZFZSpAi7Ky8XNZXReGYXT19Z8jsbtm4RJ2skz9snzzn3yONRwJU1CJ"}
					// "Authorization": "eAQ2Vd3m2vvZ0uZ6IRfg979JdvzYGm2PxaMNGh5NyELcond4P8FmBi3ppZntMlWD",
					// "allow": "GET, HEAD, OPTIONS",
					// "connection": "keep-alive",
					// "content-encoding": "gzip",
					// "content-type": "application/json",
					// "date": "Wed, 24 Jan 2018 11:59:38 GMT",
					// "server": "nginx/1.13.5",
					// "transfer-encoding": "chunked",
					// "vary": "Accept, Cookie",
					// "x-frame-options": "SAMEORIGIN",
					// "strict-transport-security": "max-age=60; includeSubDomains",
					// "x-content-type-options": "nosniff",
					// "x-xss-protection": "1; mode=block"

				}).then(function mySuccess(response) {
					//Your response handling code here
					$scope.myResponse = response; 
				}, function myError(response) {
					//Your error handling code here
					$scope.myResponse = response; 
					
				});

				$scope.responseMsg = requestdata;
			}
		});
})();

