angular.module('cognitionApp').controller('dashboardCtrl', function ($scope, $http) {
	
    $scope.abc = "d";
    $scope.dropDownValues = [{ name: "name1", value: 1 }, { name: "name1", value: 2 }, { name: "name1", value: 3 }, 
    { name: "name1", value: 4 }];
    $scope.xyz = 2;
    $scope.executeMyFunction = function (formObj) {
        console.log(formObj);
    }

    $scope.visibleMe = false;
    var url = 'http://13.126.38.222:81/web/api/Patient/GetAllPatients?TokenID=b87e2de3-137a-4242-b1bb-d73d7a3a9781';
    $http.get(url)
    .then(function (response) {
        $scope.tableArray = response.data.data;
    });
});

