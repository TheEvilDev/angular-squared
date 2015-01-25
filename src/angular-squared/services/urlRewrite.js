/**
* @ngdoc service
* @name angular-squared.$urlRewrite
* @kind factory
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
    .provider('$urlRewrite', function(){
        this._prefix = '';

        this.$get = function(){
            var that = this;

            return {
               /**
                * @name setPrefix
                * @methodOf angular-squared.$urlRewrite
                *
                * @param {string} prefix string to pre-pend to urls
                *
                * @description
                * Use the setPrefix method during your module configuration step
                * so all url's will be rewritten with the specified prefix
                */
                setPrefix: function(prefix){
                    that._prefix = prefix;
                },

                /**
                 * @name rewrite
                 * @methodOf angular-squared.$urlRewrite
                 *
                 * @param {string} url url to be rewritten.
                 *
                 * @description
                 * The rewrite method should be called whenever you actually want a relative
                 * url to be rewritten.
                 */
                rewrite: function(url){
                    // if url is not relative, do not set prefix
                    if(url.indexOf('/') !== 0){
                        return url;
                    }
                    return that._prefix + url;
                }
            };
        };
    });
