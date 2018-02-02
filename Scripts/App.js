


app = angular.module('mainApp', ['ngRoute', 'ngMessages']);



app.config(['$routeProvider', '$controllerProvider', function ($routeProvider, $controllerProvider) {
    

        var injector = angular.injector(['ng']),
        http = injector.get('$http'),
        q = injector.get('$q');

        app.registerCtrl = $controllerProvider.register;

        function loadScript(path) {
            
            var result = $.Deferred(),
            script = document.createElement("script");
            script.async = "async";
            script.type = "text/javascript";
            script.src = path+"?"+Date.now();
            script.onload = script.onreadystatechange = function (_, isAbort) {
                if (!script.readyState || /loaded|complete/.test(script.readyState)) {
                    if (isAbort)
                        result.reject();
                    else
                        result.resolve();
                }
            };
            script.onerror = function () { result.reject(); };
            document.querySelector("head").appendChild(script);
            return result.promise();
        }

        function loader(arrayName) {
            
            return {
                load: function ($q) {
                    var deferred = $q.defer(),
                    map = arrayName.map(function (name) {
                        return loadScript( name );
                    });

                    $q.all(map).then(function (r) {
                        deferred.resolve();
                    });

                    return deferred.promise;
                }
            };
        }

        $routeProvider
            .when("/", {
                resolve: loader(["Modules/Home/Controllers/Home.js"]),
                controller: "HomeCtrl",
                templateUrl: "Modules/Home/Views/Home.html" + "?" + Date.now(),

            })
            
            

    ;

    }]);

