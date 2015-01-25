describe('Filter: default', function(){
    beforeEach(module('angular-squared'));

    it('should return default when input is null', inject(function(defaultFilter){
        var input = null;
        var def = 'n/a';

        var result = defaultFilter(input, def);

        expect(result).toEqual(def);
    }));

    it('should return default when input is undefined', inject(function(defaultFilter){
        var input = {};
        var def = 'n/a';

        var result = defaultFilter(input.fakeProp, def);

        expect(result).toEqual(def);
    }));

    it('should return input when input is not null', inject(function(defaultFilter){
        var input = 'hello world';
        var def = 'n/a';

        var result = defaultFilter(input, def);

        expect(result).toEqual(input);
    }));
});
