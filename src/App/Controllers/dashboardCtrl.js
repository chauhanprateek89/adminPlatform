

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
		}]

})();

