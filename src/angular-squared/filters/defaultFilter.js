/**
@ngdoc filter
@name angular-squared.default
@kind filter

@param {string} expression Expression to be evaluated
@param {string} default Value that will be displayed if the input is null or undefined

@description
Provide a default string when value is null or empty

@returns {string} default value if expression evaluates to null or undefined

@example
<doc:example module="app">
    <doc:source>
        <script>
            var app = angular.module('app',['angular-squared']);

            app.controller('defaultController', function($scope){
                $scope.someProperty = null;
            });
        </script>
        <div ng-controller="defaultController">
            <div>Value of <strong>someProperty</strong>: {{ someProperty }}</div>
            <div>Change Text: <input type="text" ng-model="someProperty"></input></div>
            <div>Result of filter: {{ someProperty | default:'n/a' }}</div>
        </div>
    </doc:source>
</doc:scenario>
</doc:example>

*/
angular.module('angular-squared')
    .filter('default', function(){
        return function(input, value){
            if(input === null || input === undefined || input === ''){
                return value;
            }
            else {
                return input;
            }
        };
    });
