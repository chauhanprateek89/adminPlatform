(function () {

	'use strict';

	angular.module('cognitionApp').controller('testCtrl',
		function ($scope, $location) {
			$scope.tabname = 'tab1';
			/*$scope.tabs = [
				{ link : '#/jobs', label : 'Jobs' },
				{ link : '#/invoices', label : 'Invoices' },
				{ link : '#/payments', label : 'Payments' }
			  ]; 
			  
			$scope.selectedTab = $scope.tabs[0];    
			$scope.setSelectedTab = function(tab) {
			  $scope.selectedTab = tab;
			}
			
			$scope.tabClass = function(tab) {
			  if ($scope.selectedTab == tab) {
				return "active";
			  } else {
				return "";
			  }
			}*/
            
		});

		function JobsCtrl($scope) {
  
		}
		
		function InvoicesCtrl($scope) {
		  
		}
		
		function PaymentsCtrl($scope) {
		  
		}
})();
