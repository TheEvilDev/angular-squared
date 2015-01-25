/**
* @ngdoc filter
* @name default
*
* @description
* Provide a default string when value is null or empty
*/
angular.module('angular-squared')
    .filter('default', function(){
        return function(input, value){
            if(input === null || input === undefined){
                return value;
            }
            else {
                return input;
            }
        };
    });
