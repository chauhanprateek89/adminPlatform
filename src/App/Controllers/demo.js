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

			var hoursBack = 1;
			var ts = new Date().getTime();
			var tsYesterday = (ts - (hoursBack * 3600) * 1000);
			var d = new Date(tsYesterday);
			var yesterdayDateString = d.getFullYear() + '-'
			+ ('0' + (d.getMonth()+1)).slice(-2) + '-'
			+ ('0' + d.getDate()).slice(-2) + 'T'
			+ ('0' + (d.getHours()+1)).slice(-2) + ':'
			+ ('0' + (d.getMinutes()+1)).slice(-2) + ':'
			+ ('0' + (d.getSeconds()+1)).slice(-2) + ':'
			//+ ('0' + (d.getMinutes()+1)).slice(-2) + ':'
			//+ ('0' + (d.getSeconds()+1)).slice(-2);
			console.log(yesterdayDateString,"zzzzzzzzzzzzzzzz");


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
						// console.log("success", response);
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


			$scope.CallApiGenerateBarGraph = function () {

				// var apiurl = "https://ci9gxqpoge.execute-api.eu-west-1.amazonaws.com/dev/breBak/temperature/4883c7df300513e8";
				var apiurl = "https://ci9gxqpoge.execute-api.eu-west-1.amazonaws.com/dev/breBak/temperature/4883c7df300513e8";
				$http({
					method: "GET",
					url: apiurl
				})
					.then(function mySuccess(response) {
						var responseData = response;
						console.log("success", responseData);						

						// $scope.timestamp = [];
						// $scope.temperature = [];
						// $scope.deveui = [];
						
						$scope.xAxis_Data = [];
						$scope.bar_Data = [];

						for (var k = 0; k < responseData.data.length; k++) {
							// $scope.timestamp.push(responseData.data[k].timestamp);
							// $scope.temperature.push(responseData.data[k].temperature);
							// $scope.deveui.push(responseData.data[k].deveui);

							$scope.xAxis_Data.push(responseData.data[k].timestamp);
							$scope.bar_Data.push(responseData.data[k].temperature);

							// console.log("xAxis_Data:", responseData.data[k].timestamp);						
							// console.log("bar_Data:", responseData.data[k].temperature);						
							// console.log("deveui:", responseData.data[k].deveui);						

						}
						
						GenerateBarChart($scope, 'div_demo_timeline');

						var time=setInterval(function(){
							//your code
						GenerateBarChart($scope, 'div_demo_timeline');

						console.log(responseData.data);
							
						},10000);
					
					}, function myError(response) {
						$scope.myResponse = response;
						console.log("failure", response);
					});				
			}

			$scope.CallApiGenerateLineGraph = function () {

				// var apiurl = "https://ci9gxqpoge.execute-api.eu-west-1.amazonaws.com/dev/breBak/temperature/4883c7df300513e8";
				var apiurl = "https://ci9gxqpoge.execute-api.eu-west-1.amazonaws.com/dev/breBak/temperature/4883c7df300513e8";
				$http({
					method: "GET",
					url: apiurl
				})
					.then(function mySuccess(response) {
						var responseData = response;
						console.log("success", responseData);						

						// $scope.timestamp = [];
						// $scope.temperature = [];
						// $scope.deveui = [];
						
						$scope.xAxis_Data = [];
						$scope.bar_Data = [];

						for (var k = 0; k < responseData.data.length; k++) {
							// $scope.timestamp.push(responseData.data[k].timestamp);
							// $scope.temperature.push(responseData.data[k].temperature);
							// $scope.deveui.push(responseData.data[k].deveui);

							$scope.xAxis_Data.push(responseData.data[k].timestamp);
							$scope.bar_Data.push(responseData.data[k].temperature);

							// console.log("xAxis_Data:", responseData.data[k].timestamp);						
							// console.log("bar_Data:", responseData.data[k].temperature);						
							// console.log("deveui:", responseData.data[k].deveui);						

						}
						
						GenerateBarChart($scope, 'div_demo_timeline');

						var time=setInterval(function(){
							//your code
						GenerateBarChart($scope, 'div_demo_timeline');

						console.log(responseData.data);
							
						},10000*6*15);
					
					}, function myError(response) {
						$scope.myResponse = response;
						console.log("failure", response);
					});				
			}

			// $scope.CallApiGenerateLineGraph = function () {
			// 	var xhr = new XMLHttpRequest();
			// 	xhr.open('GET', 'https://bngfv3vyf5.execute-api.eu-west-1.amazonaws.com/dev/breBak/all');
			// 	xhr.onreadystatechange = function (event) {
			// 		console.log(event.target.response);

			// 		var responseDataLine = event.target.response;

			// 		$scope.xAxis_Data = [];
			// 		$scope.bar_Data = [];
			// 		for (var k = 0; k < responseDataLine.length; k++) {
			// 			$scope.xAxis_Data.push(responseDataLine[k].amphrs);
			// 			$scope.bar_Data.push(responseDataLine[k].deveui);
			// 			// $scope.timestamp.push(responseDataLine[k].timestamp);
			// 		}
			// 		GenerateLineChart($scope, 'div_demo_timeline');

			// 	}
			// 	xhr.setRequestHeader('Content-Type', 'application/json');
			// 	// POST - 
			// 	//xhr.send(JSON.stringify({age: 26, height: 71, income: 2100})); 
			// 	// DELETE - GET
			// 	xhr.send();
			// }

			// $scope.CallApiGenerateBarGraph();
			$scope.CallApiGenerateLineGraph();	


		});
})();

