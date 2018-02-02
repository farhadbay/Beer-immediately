app.directive('siteLoader', [

    "$rootScope",

    function($rootScope){

        return {
            restrict: 'A',
            link: function(scope, element, attrs) {

                
                $rootScope.$on("$routeChangeStart", function (event, next, current) {
                    
                    element
                        .text("loading")
                        .removeAttr("class")
                        .show();
                });

                $rootScope.$on("$routeChangeSuccess", function (event, current, previous) {
                    
                    element
                        .removeAttr("class")
                        .hide();
                });

                $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
                    
                    element
                        .text("loading error")
                        .addClass("error");
                });
            }
        }
    }
]);