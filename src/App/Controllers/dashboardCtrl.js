

(function () {

	'use strict';

	angular.module('cognitionApp').controller('dashboardCtrl',
		function ($scope, toastr, spinner) {
			$scope.activeTab = 'tab1';
			$scope.activePill = 'pill1';
		
			this.product = alerts_data;
		
		});

		var alerts_data = {

			name: 'ALert 1',
			time: 10.35,
			description: "Some issue needs your attention"

		}


})();

