describe('Provider: $dateParser', function(){
    var sut;
    var date = new Date('January 1, 2000');

    beforeEach(function(){
        var fakeModule = angular.module('fake', function () {});
        fakeModule.config( function ($dateParserProvider) {
            sut = $dateParserProvider;
        });

        // Initialize test.app injector
        module('angular-squared', 'fake');

        // Kickstart the injectors previously registered
        // with calls to angular.mock.module
        inject(function () {});
    });

    it('should be able to override parsing logic', function(){
        var called = false;
        sut.parsingFunction = function(input) {
            called = true;
            return new Date(input);
        };

        var result = sut.$get().parse(date);

        expect(called).toBeTruthy();
        expect(result).toEqual(date);
    });

    it('should be able to use default parsing logic', function() {
        var result = sut.$get().parse('January 1, 2000');

        expect(result).toEqual(date);
    });
});
