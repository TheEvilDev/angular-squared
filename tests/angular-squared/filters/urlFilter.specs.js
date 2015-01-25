describe('Filter: url', function() {

    beforeEach(module('angular-squared'));

    beforeEach(module(function($provide){
        $provide.provider('$urlRewrite', function(){
            this.$get = function(){
                return {
                    rewrite: function(url){
                        return '/foo' + url;
                    }
                };
            };
        });
    }));

    it('should rewrite the url', inject(function(urlFilter){
        var result = urlFilter('/bar');

        expect(result).toEqual('/foo/bar');
    }));
});
