/**
* @ngdoc filter
* @name angular-squared.replace
* @kind filter
*
* @param {string} expression Input string to perform replacements on
* @param {string} searchString Substring that will be replaced
* @param {string} replaceString Replacement value
*
* @description
* Provides an easy filter to perform string replacements inline in an angular template.
*
* @returns {string} Processed result after substitutions

@example
<doc:example module="angular-squared">
    <doc:source>
        Replace 'o' in 'foo' with 'i': <span>{{ 'foo' | replace:'o':'i' }}</span>
    </doc:source>
</doc:example>

*/
angular.module('angular-squared')
.filter('replace', function(){
    return function(input, search, replace){
        return input.replace(new RegExp(search, 'gi'), replace);
    };
});
