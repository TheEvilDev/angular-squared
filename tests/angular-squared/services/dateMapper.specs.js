describe('Provider: $dateMapper', function(){
    var date = new Date('January 1, 2000');

    beforeEach(module('angular-squared'));

    it('should use the mapping function to create a date', inject(function($dateMapper) {
        $dateMapper.mapUsing(function(input){
            return date;
        });

        var result = $dateMapper.map('This could be anything the mapping function can handle');

        expect(result).toEqual(date);
    }));

    it('should fallback to date constructor if no mapping function is provided', inject(function($dateMapper){

        var result = $dateMapper.map('January 1, 2000');

        expect(result).toEqual(date);
    }));
});
