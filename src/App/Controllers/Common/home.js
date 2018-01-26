(function () {

	'use strict';

	angular.module('cognitionApp').controller('homeCtrl',
		function ($scope, toastr, spinner) {
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
			$scope.xAxis_Data = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
			$scope.bar_Data = [10, 15, 25, 20, 15];

			GenerateBarChart($scope, 'div_barchart');
			// GenerateBarChart($scope, 'div_barchart3');
			GenerateLineChart($scope, 'div_linechart');
		});

		
})();
