(function () {

	'use strict';

	angular.module('cognitionApp').controller('complianceCtrl',
		function ($scope, $http) {
			$scope.createReport = function () {
				alert("Test");
			}
			$scope.gender = "1";
			$scope.submitToApi = function () {
				var requestdata = {
					name: $scope.name,
					birthdate: $scope.birthdate,
					gender: $scope.gender,
				}

				var apiurl = "https://www.google.co.in/"; //Your API url here
				$http({
					method : "GET",
					url : apiurl,
					data: requestdata
				}).then(function mySuccess(response) {
					//Your response handling code here
				}, function myError(response) {
					//Your error handling code here
				});

				$scope.responseMsg = requestdata;
			}
		});
})();
