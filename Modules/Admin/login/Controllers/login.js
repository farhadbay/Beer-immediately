app.registerCtrl("LoginCtrl", ['$scope', '$http', 'customAjax', function ($scope, $http, customAjax) {
    $scope.firstname = "farhad";
    debugger;
    $scope.rdata = "";


    //$http.get(window.location.origin + "/api/values").then(function (rdata) {
    //    debugger;
    //    $scope.rdata = rdata;
    //});

    //customAjax.get("values", null, function (rdata) {
    //    $scope.rdata = rdata;
    //});

}]);