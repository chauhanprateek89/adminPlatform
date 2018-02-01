

(function () {

	'use strict';

	angular.module('cognitionApp').controller('dashboardCtrl',
		function ($scope, toastr, spinner, $http) {

			$scope.activeTab = 'tab1';
			$scope.activePill = 'pill1';
			// $scope.activePill = 'pill-1';
			$scope.test = function (text) {
				alert(text);
			}

			$('.carousel').carousel({
				interval: 99999
			})
			var count = 0;
			var number = 0;

			//   Get data from local sample file
			// Replace with API req from server
			var apiurl = "sample.txt"; //Your API url here
			$http({
				method: "GET",
				url: apiurl
			})
				.then(function mySuccess(response) {
					// console.log(response.data);
					var users = response.data;
					$scope.Myusers = users;
					$scope.count = users.length;
					$scope.value = 0;

					// console.log("users age are", response.data[0].age);

					// $scope.number = users.number;
					// console.log("users are",users.age);	
					var testArray = [];
					var k = 0;
					for (k; k < users.length; k++) {
						// $scope.xAxis_Data.push('Age ' + responseData.data[k].age);
						// $scope.bar_Data.push(responseData.data[k].income);
						$scope.value =  response.data[k].age;
						console.log(k, "test", response.data[k].age);
						GenerateGaugeChart($scope, 'div_gauge' + k);
						// testArray[k] = 	response.data[k].age;
					}
					// console.log("users age are", testArray);					
					// $scope.k = k;


				}, function myError(response) {
					$scope.myResponse = response;
					console.log("failure", response);
				});

			$scope.restoreCanvas = function (e) {

				// var canvas = document.getElementsByTagName("canvas");
				// for (var js_i in canvas) {
				// 	if (canvas[js_i].style != undefined) {
				// 	canvas[js_i].style.width = '100%';
				// 	canvas[js_i].parentElement.style.width = '100%'	;
				// 	}
				// }
			};

			//   echarts.init(document.getElementById('main')).setOption({
			// 	series: {
			// 		type: 'pie',
			// 		data: [
			// 			{name: 'A', value: 1212},
			// 			{name: 'B', value: 2323},
			// 			{name: 'C', value: 1919}
			// 		]
			// 	}
			// });



			$scope.areas = ['Area1', 'Area2', 'Area3'];
			$scope.selectedArea = "Area1";

			this.product = alerts_data;

			$scope.series_name = 'Total Electricity Consumption';
			$scope.legend_Data = ['Alert1', 'Alert2', 'Alert3', 'Alert4', 'Alert5'];
			$scope.pie_Data = [{
				value: 335,
				name: 'Alert1'
			}, {
				value: 310,
				name: 'Alert2'
			}, {
				value: 234,
				name: 'Alert3'
			}, {
				value: 135,
				name: 'Alert4'
			}, {
				value: 1548,
				name: 'Alert5'
			}];

			GeneratePieChart($scope, 'div_piechart3');
			// GenerateGaugeChart($scope, 'one');
			// GenerateLineChart($scope, 'div_barchart3');
			// GenerateGaugeChart($scope, 'div_barchart3');
			//value for gauge chart
			// GenerateGaugeChart($scope, 'div_gauge');
			// GenerateGaugeChart($scope, 'div_gauge1');
			// GenerateGaugeChart($scope, 'div_gauge2');
			// GenerateGaugeChart($scope, 'div_gauge3');





		});

	var alerts_data = [
		{
			name: 'Alert 1',
			time: 10.35,
			description: "Some issue needs your attention"
		},
		{
			name: 'Alert 2',
			time: 10.55,
			description: "Some issue needs your attention"
		},
		{
			name: 'Alert 3',
			time: 10.55,
			description: "Some issue needs your attention"
		},
		{
			name: 'Alert 4',
			time: 10.55,
			description: "Some issue needs your attention"
		},
		{
			name: 'Alert 5',
			time: 10.55,
			description: "Some issue needs your attention"
		}];


})();

