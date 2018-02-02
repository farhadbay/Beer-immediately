app.service('customAjax', function ($http) {
        
    this.post = function (url, data, done, errorevent) {
        data.key = "5ddc49416fdf9d3a0e76cdc6d2f35f38";
        url = "http://api.brewerydb.com/v2/" + url;
        $http.post(url).then(function (rdata) {
            if (typeof done === "function") {
                done(rdata);
            }
        }, function (error) {
            if (typeof errorevent === "function") {
                errorevent(error);
            }
        })
    }
    
    this.get = function (url, data, done, errorevent) {
        
        data.key = "5ddc49416fdf9d3a0e76cdc6d2f35f38";
        url = "http://api.brewerydb.com/v2/" + url;
        $http.get(url, { params: data, origin: "*", }).then(function (rdata) {
        
            if(typeof done==="function")
            {
                done(rdata);
            }
        }, function (error) {
            if (typeof errorevent === "function") {
                errorevent(error);
            }
        })
    }
    
});