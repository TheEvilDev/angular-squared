/**
* @ngdoc service
* @name angular-squared.$urlRewrite
* @kind provider
*
* @description
* Provides a central url provider that can be used to configure the prefix
* to be used on urls. Can be used in a filter to provide inline url formatting,
* or injected into other components to rewrite urls where needed.
*
* This service is very useful when you need to alter the base path everywhere the site is
* refered to. i.e '/product/customer' needs to be rewritten as "/en-US/product/customer"
*
*/
angular.module('angular-squared')
    .provider('$urlRewrite', function(){
        this.urlPrefix = '';

        this.$get = function(){
            var that = this;

            return {
                /**
                 * @ngdoc function
                 * @kind function
                 * @name rewrite
                 * @methodOf angular-squared.$urlRewrite
                 *
                 * @param {string} url url to be rewritten.
                 *
                 * @description
                 * The rewrite method should be called whenever you actually want a relative
                 * url to be rewritten.
                 *
                 * @returns {string} Rewritten url if relative, or the original url
                 */
                rewrite: function(url){
                    // if url is not relative, do not set prefix
                    if(url.indexOf('/') !== 0){
                        return url;
                    }
                    return that.urlPrefix + url;
                }
            };
        };
    });
