(function () {

	'use strict';

	angular.module('cognitionApp').controller('demoCtrl',
		function ($scope, $http) {
			$scope.createReport = function () {
				alert("Test");
			}
			// $scope.ninjas.age = "";	
			// $scope.myTest = null;

			$scope.gender = "1";
			$scope.submitToApi = function () {
				var requestdata = {
					startdate: $scope.startdate,
					enddate: $scope.enddate,
				}

				var apiurl = "https://r3mfpyh9fj.execute-api.eu-west-1.amazonaws.com/dev/compare-yourself/all"; //Your API url here
				$http({
					method: "GET",
					url: apiurl
				})
				.then(function mySuccess(response) {
					//Your response handling code here
					$scope.myResponse = response;
					console.log("success", response);

					$scope.myTest = response.data;
					console.log("test", test);


				}, function myError(response) {
					//Your error handling code here
					$scope.myResponse = response;
					console.log("failure", response);
				});

				$scope.responseMsg = requestdata;
			}
		});
})();

