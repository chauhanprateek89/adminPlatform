(function () {

	'use strict';

	angular.module('cognitionApp').controller('homeCtrl',
		function ($scope, toastr, spinner, $http) {
			// debugger

			//Data needed for piechart
			$scope.series_name = 'Total Electricity Consumption';
			$scope.legend_Data = [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY' ];
			$scope.pie_Data = [ {
				value : 335,
				name : 'JAN'
			}, {
				value : 310,
				name : 'FEB'
			}, {
				value : 234,
				name : 'MAR'
			}, {			
				value : 135,
				name : 'APR'
			}, {
				value : 1548,
				name : 'MAY'
			} ];
			GeneratePieChart($scope, 'div_piechart');
 
			//data needed for bar chaart
			$scope.xAxis_Data = ["1517173009","1517173009","1516993904","1516993904"	];
			$scope.bar_Data = [10, 15, 25, 20, 15];

			GenerateBarChart($scope, 'div_barchart');
			// GenerateLineChart($scope, 'div_linechart');
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
						
						$scope.xAxis_Data = [];
						$scope.bar_Data = [];

						for (var k = 0; k < responseData.data.length; k++) {
							$scope.xAxis_Data.push(responseData.data[k].timestamp);
							$scope.bar_Data.push(responseData.data[k].temperature);
						}
						
						GenerateBarChart($scope, 'div_linechart');

						var time=setInterval(function(){
							//your code
						GenerateBarChart($scope, 'div_linechart');

						console.log(responseData.data);
							
						},10000*6*15);
					
					}, function myError(response) {
						$scope.myResponse = response;
						console.log("failure", response);
					});				
			}

			$scope.value = 70;
			GenerateGaugeChart($scope, 'div_gauge');
			$scope.CallApiGenerateLineGraph();
		});		
})();
