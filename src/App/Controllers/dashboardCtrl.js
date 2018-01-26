

(function () {

	'use strict';

	angular.module('cognitionApp').controller('dashboardCtrl',
		function ($scope, toastr, spinner) {
			
			$scope.activeTab = 'tab1';
			$scope.activePill = 'pill1';
			// $scope.activePill = 'pill-1';
			$scope.test = function(text) {
				alert(text);
			  } 
			  
			  $scope.restoreCanvas = function (e) {

				// var canvas = document.getElementsByTagName("canvas");
				// for (var js_i in canvas) {
				// 	if (canvas[js_i].style != undefined) {
				// 	canvas[js_i].style.width = '100%';
				// 	canvas[js_i].parentElement.style.width = '100%'	;
				// 	}
				// }
			  };

			  $scope.areas = ['Area1','Area2','Area3'];
			  $scope.selectedArea = "Area1";
		
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
			// GenerateGaugeChart($scope, 'one');
			GenerateLineChart($scope, 'div_barchart3');


			
		
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

