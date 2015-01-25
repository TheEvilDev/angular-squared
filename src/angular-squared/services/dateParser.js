/**
* @ngdoc service
* @name angular-squared.$dateParser
* @kind provider
*
* @description
* In many cases, when interacting with different server side backends, each
* has their own unique way of formatting dates when serializing to JSON, due
* to JSON not natively supporting date objects.
*
* This can lead to some rather ugly hacks both client and server side to translate
* between them. This service allows you to configure a mapping function when you
* setup your app, and will automatically be utilized within the framework for
* interpreting server side dates as javascript Date() objects.
*
*/
angular.module('angular-squared')
    .provider('$dateParser', function(){
        this.parsingFunction = function(input) { return new Date(input); };

        this.$get = function(){
            var that = this;

            return {
                /**
                * @ngdoc function
                * @kind function
                * @name parse
                * @methodOf angular-squared.$dateParser
                *
                * @param {string|number|date} dateInput input in the format the mapUsing
                * function expects.
                *
                * @description
                * The map function will execute any mapper setup with mapUsing
                * or try date.parse to convert the dateInput parameter to a javascript
                * date
                *
                * @returns {Date} The converted input represented as a Date.
                */
                parse: function(dateInput) {
                    return that.parsingFunction(dateInput);
                }
            };
        };
    });
