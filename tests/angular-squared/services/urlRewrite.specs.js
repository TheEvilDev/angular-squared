describe('Provider: $urlRewrite', function(){

    var sut;

    beforeEach(function(){
        var fakeModule = angular.module('fake', function () {});
        fakeModule.config( function ($urlRewriteProvider) {
            sut = $urlRewriteProvider;
        });

        // Initialize test.app injector
        module('angular-squared', 'fake');

        // Kickstart the injectors previously registered
        // with calls to angular.mock.module
        inject(function () {});
    });

    it('should have a way to set the url prefix', function(){
        expect(sut).not.toBeUndefined();

        sut.urlPrefix = '/hello';

        var result = sut.$get().rewrite('/world');

        expect(result).toEqual('/hello/world');
    });

    it('should not rewrite absolute urls', function() {
        var url = 'http://angular-squared.com';

        var result = sut.$get().rewrite(url);

        expect(result).toBe(url);
    });
});
