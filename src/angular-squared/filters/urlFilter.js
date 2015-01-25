/**
* @ngdoc filter
* @name angular-squared.url
* @kind filter
* @requires angular-squared.$urlRewrite
*
* @param {string} url url to be transformed
*
* @description
* Provides a simple filter to apply any url rewrites that have been configured.
* intended to be used wherever you have a url in your html. Recommended even if
* you are currently not doing any modifications to the url, as it will allow you
* to make this change in the future with minimal effort.
*
* @returns {string} transformed url
*/
angular.module('angular-squared')
    .filter('url', ['$urlRewrite', function($urlRewrite){
        return function(url){
            return $urlRewrite.rewrite(url);
        };
    }]);
