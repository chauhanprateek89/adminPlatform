var app = angular.module('cognitionApp', [
	"oc.lazyLoad",
	"angularjs-dropdown-multiselect",
	"ngRoute",
	"app.core",
	"toastr"
]);

app.config(function ($routeProvider, $httpProvider,
	$locationProvider, toastrConfig, $ocLazyLoadProvider) {
	angular.extend(toastrConfig, {
		autoDismiss: false,
		containerId: 'toast-container',
		maxOpened: 1,
		newestOnTop: true,
		positionClass: 'toast-top-right',
		iconClasses: {
			error: 'toast-error',
			info: 'toast-info',
			success: 'toast-success',
			warning: 'toast-warning'
		},
		preventDuplicates: false,
		preventOpenDuplicates: false,
		target: 'body',
		timeOut: 100000,
		extendedTimeOut: 100000,
	});

	$ocLazyLoadProvider.config({
		debug: true
	});

});

app.config(function ($routeProvider, $locationProvider) {
	var baseUrl = "";
	/*var barChartUrl = baseUrl + "/App/Views/barchart.html";
	var pieChartUrl = baseUrl + "/App/Views/piechart.html";
	var drillDownUrl = baseUrl + "/App/Views/drilldown.html";
	var misreportUrl = baseUrl + "/App/Views/misreport.html";
	var barPieChartUrl = baseUrl + "/App/Views/pieBarChart.html";*/

	$routeProvider

		.when("/", {
			templateUrl: baseUrl + "/App/Views/home.html",
			controller: "homeCtrl",
			cache: false,
			resolve: {
				lazy: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad
							.load([{
								name: 'cognitionApp',
								serie: true,
								files: ['App/Controllers/Common/home.js']
							}]);
					}]
			}
		})

		.when("/home", {
			templateUrl: baseUrl + "/App/Views/home.html",
			controller: "homeCtrl",
			cache: false,
			resolve: {
				lazy: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad
							.load([{
								name: 'cognitionApp',
								serie: true,
								files: ['App/Controllers/Common/home.js']
							}]);
					}]
			}
		})

		.when("/helloworld", {
			templateUrl: baseUrl + "/App/Views/demo.html",
			controller: "demoCtrl",
			cache: false,
			resolve: {
				lazy: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad
							.load([{
								name: 'cognitionApp',
								serie: true,
								files: ['App/Controllers/Common/demo.js']
							}]);
					}]
			}
		})

		.when("/dashboard", {
			templateUrl: baseUrl + "/App/Views/dashboard.html",
			controller: "dashboardCtrl",
			cache: false,
			resolve: {
				lazy: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad
							.load([{
								name: 'cognitionApp',
								serie: true,
								files: ['App/Controllers/dashboardCtrl.js']
							}]);
					}]
			}
		})

		.when("/complianceReport", {
			templateUrl: baseUrl + "/App/Views/complianceReport.html",
			controller: "ComplianceCtrl",
			cache: false,
			resolve: {
				lazy: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad
							.load([{
								name: 'cognitionApp',
								serie: true,
								files: ['App/Controllers/Common/complianceReport.js']
							}]);
					}]
			}
		})

		.otherwise("/", {
			templateUrl: baseUrl + "/App/Views/home.html",
			controller: "homeCtrl",
			cache: false,
			resolve: {
				lazy: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad
							.load([{
								name: 'cognitionApp',
								serie: true,
								files: ['App/Controllers/Common/home.js']
							}]);
					}]
			}
		})
});


