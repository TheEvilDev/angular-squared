/**
* @ngdoc service
* @name angular-squared.$dateMapper
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
    .provider('$dateMapper', function(){
        this._dateTransform = function(input) { return new Date(input); };

        this.$get = function(){
            var that = this;
            
            return {
                /**
                * @ngdoc function
                * @kind function
                * @name mapUsing
                * @methodOf angular-squared.$dateMapper
                *
                * @param {function} function accepting an expected input format,
                * that returns a javascript Date().
                *
                * @description
                * Use this method when bootstrapping your module, to setup the
                * logic for converting your server side serialized date format
                * into a javascript date. By default will use date.parse().
                */
                mapUsing: function(mapper) {
                    that._dateTransform = mapper;
                },

                /**
                * @ngdoc function
                * @kind function
                * @name map
                * @methodOf angular-squared.$dateMapper
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
                map: function(dateInput) {
                    return that._dateTransform(dateInput);
                }
            };
        };
    });
