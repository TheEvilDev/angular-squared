describe('Provider: $urlRewrite', function(){
    var prefix = '/hello';

    beforeEach(module('angular-squared'));

    beforeEach(inject(function($urlRewrite){
        $urlRewrite.setPrefix(prefix);
    }));

    it('should have a way to set the url prefix', inject(function($urlRewrite){
        var result = $urlRewrite.rewrite('/world');

        expect(result).toEqual('/hello/world');
    }));

    it('should not rewrite absolute urls', inject(function($urlRewrite){
        var url = 'http://angular-squared.com';

        var result = $urlRewrite.rewrite(url);

        expect(result).toBe(url);
    }));
});
