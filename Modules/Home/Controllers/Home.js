app.registerCtrl("HomeCtrl", ['$scope', '$http', 'customAjax', function ($scope, $http, customAjax) {
    $scope.firstname = "farhad";
    debugger;
    $scope.rdata="";
    
    var inputdata = {
        name: "beer",
    };
    $scope.beer_list = [];

    //$http.get(window.location.origin + "/api/values").then(function (rdata) {
    //    debugger;
    //    $scope.rdata = rdata;
    //});

    customAjax.get("beers", inputdata, function (rdata) {
        debugger;
        $scope.rdata = rdata;
        $scope.beer_list = rdata.data.data;

    });

    

}]);