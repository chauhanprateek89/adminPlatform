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
			$scope.CallApiGenerateBarGraph = function () {
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
						console.log("success", response.data);						

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

			$scope.CallApiGenerateLineGraph = function () {
				var xhr = new XMLHttpRequest();
				xhr.open('GET', 'https://bngfv3vyf5.execute-api.eu-west-1.amazonaws.com/dev/breBak/all');
				xhr.onreadystatechange = function (event) {
					console.log(event.target.response);

					var responseDataLine = event.target.response;

					$scope.xAxis_Data = [];
					$scope.bar_Data = [];
					for (var k = 0; k < responseDataLine.length; k++) {
						$scope.xAxis_Data.push(responseDataLine[k].amphrs);
						$scope.bar_Data.push(responseDataLine[k].deveui);
						// $scope.timestamp.push(responseDataLine[k].timestamp);
					}
					GenerateLineChart($scope, 'div_demo_timeline');

				}
				xhr.setRequestHeader('Content-Type', 'application/json');
				// POST - 
				//xhr.send(JSON.stringify({age: 26, height: 71, income: 2100})); 
				// DELETE - GET
				xhr.send();
			}

			$scope.CallApiGenerateBarGraph();
			$scope.CallApiGenerateLineGraph();


		});
})();

