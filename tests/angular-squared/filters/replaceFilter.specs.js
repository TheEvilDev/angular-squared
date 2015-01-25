describe('Filter: replaceFilter', function(){
    beforeEach(module('angular-squared'));

    it('should replace search string with replacement', inject(function(replaceFilter) {
        var result = replaceFilter('foo','o','i');

        expect(result).toEqual('fii');
    }));
});
