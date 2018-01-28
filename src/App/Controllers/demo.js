(function () {

	'use strict';

	angular.module('cognitionApp').controller('demoCtrl',
		function ($scope, $http) {
			$scope.submitToApi = function () {
				// var apiurl = "https://r3mfpyh9fj.execute-api.eu-west-1.amazonaws.com/dev/compare-yourself/all"; //Your API url here
				// // var apiurl = "https://r3mfpyh9fj.execute-api.eu-west-1.amazonaws.com/dev/compare-yourself/all"; //Your API url here
				// $http({
				// 	method: "GET",
				// 	url: apiurl
				// })
				// 	.then(function mySuccess(response) {
				// 		console.log("success", response);
				// 		// console.log("test", test);
				// 		$scope.myResponse = response;
				// 	}, function myError(response) {
				// 		$scope.myResponse = response;
				// 		console.log("failure", response);
				// 	});
			}

			//Function created by Karan
			$scope.CallApiGenerateGraph = function () {
				//1) Do API Calling
				//2) You will get following data in response:

				var apiurl = "https://r3mfpyh9fj.execute-api.eu-west-1.amazonaws.com/dev/compare-yourself/all"; //Your API url here
				// var apiurl = "https://r3mfpyh9fj.execute-api.eu-west-1.amazonaws.com/dev/compare-yourself/all"; //Your API url here
				$http({
					method: "GET",
					url: apiurl
				})
					.then(function mySuccess(response) {
						console.log("success", response);
						// console.log("test", test);
						
						// $scope.myResponse = response;

						var responseData = response;

						$scope.xAxis_Data = []; 
						$scope.bar_Data = [];
						for (var k = 0; k < responseData.data.length; k++) {
							$scope.xAxis_Data.push('Age ' + responseData.data[k].age);
							$scope.bar_Data.push(responseData.data[k].income);
						}
						GenerateBarChart($scope, 'div_barchart');


					}, function myError(response) {
						$scope.myResponse = response;
						console.log("failure", response);
					});

				// var responseData = {
				// 	data: [{ age: 26, height: 71, income: 2100 },
				// 	{ age: 27, height: 71, income: 3500 },
				// 	{ age: 28, height: 71, income: 4000 },
				// 	{ age: 29, height: 71, income: 2000 },
				// 	{ age: 30, height: 71, income: 1500 },
				// 	{ age: 31, height: 71, income: 1800 },
				// 	{ age: 32, height: 71, income: 2500 },
				// 	{ age: 33, height: 71, income: 2300 }]
				// }

				// $scope.xAxis_Data = []; 
				// $scope.bar_Data = [];
				// for (var k = 0; k < responseData.data.length; k++) {
				// 	$scope.xAxis_Data.push('Age ' + responseData.data[k].age);
				// 	$scope.bar_Data.push(responseData.data[k].income);
				// }
				// GenerateBarChart($scope, 'div_barchart');
			}

			$scope.CallApiGenerateGraph();
		});
})();

