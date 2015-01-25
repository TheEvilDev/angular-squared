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

@example
<doc:example module="app">
    <doc:source>
        <script>
            var app = angular.module('app',['angular-squared']);

            app.config(function($urlRewriteProvider) {
                $urlRewriteProvider.urlPrefix = '/foo';
            });
        </script>
        <div>Original Url: {{ '/bar' }}</div>
        <div>Formatted Url: {{ '/bar' | url }}</div>
        <div>Absolute Url: {{ 'http://angular-squared.com' | url }}</div>
    </doc:source>
</doc:example>
*/
angular.module('angular-squared')
    .filter('url', ['$urlRewrite', function($urlRewrite){
        return function(url){
            return $urlRewrite.rewrite(url);
        };
    }]);
