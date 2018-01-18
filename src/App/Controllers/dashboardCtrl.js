

(function () {

	'use strict';

	angular.module('cognitionApp').controller('dashboardCtrl',
		function ($scope, toastr, spinner) {
			
			$scope.activeTab = 'tab1';
			$scope.activePill = 'pill1';
			$scope.test = function(text) {
				alert(text);
			  } 
			 
		
			this.product = alerts_data;

			$scope.series_name = 'Total Electricity Consumption';
			$scope.legend_Data = [ 'Alert1', 'Alert2', 'Alert3', 'Alert4', 'Alert5' ];
			$scope.pie_Data = [ {
				value : 335,
				name : 'Alert1'
			}, {
				value : 310,
				name : 'Alert2'
			}, {
				value : 234,
				name : 'Alert3'
			}, {
				value : 135,
				name : 'Alert4'
			}, {
				value : 1548,
				name : 'Alert5'
			} ];

			GeneratePieChart($scope, 'div_piechart3');
		
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

