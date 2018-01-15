(function () {

	'use strict';

	angular.module('cognitionApp').controller('demoCtrl',
		function ($scope) {	
			$scope.xAxis_Data = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
			$scope.bar_Data = [10, 15, 25, 20, 15];
			GenerateBarChart($scope, 'div_barchart3');
		});
})();
