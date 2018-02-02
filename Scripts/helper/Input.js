
app.directive('formInput', [function (ngMessages) {
    
    return {

        restrict: 'AE',
        compile: function (element, attrs) {
            
            var type = attrs.type || 'text';
            var pattern = attrs.pattern;
            var requiremsg = attrs.msg;
            var patternmsg = attrs.patternmsg;
            var required = attrs.hasOwnProperty('required') ? "required='required'" : "";
            var htmlText = '<div class="form-group">' +
                '<label class="control-label">' + attrs.label + '</label>' +
                '<input type="' + type + '" class="form-control" id="' + attrs.ngModel + '" name="' + attrs.ngModel + '"' + ' ' + 'data-ng-model="' + attrs.ngModel + '" ' + required + ' ' + (typeof pattern != 'undefined' ? 'data-ng-pattern="/' + pattern + '/g"' : '') + '>' +

                '<div ng-messages=\"' + attrs.formId + '.' + attrs.ngModel + '.$error\" role=\"alert\">' +
                    (typeof requiremsg!= 'undefined' ?'<div ng-message=\"required\">' + requiremsg + '</div>':'')+
                    (typeof patternmsg != 'undefined'?'<div ng-message=\"pattern\">' + patternmsg + '</div>' :'')+
                '</div>' +

                '</div>';
            element.replaceWith(htmlText);
        }
    }
}]);