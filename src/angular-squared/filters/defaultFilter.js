/**
* @ngdoc filter
* @name angular-squared.default
* @kind filter
*
* @param {string} expression Expression to be evaluated
* @param {string} default Value that will be displayed if the input is null or undefined
*
* @description
* Provide a default string when value is null or empty
*
* @returns {string} default value if expression evaluates to null or undefined
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
