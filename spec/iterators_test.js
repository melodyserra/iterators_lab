var expect = require('chai').expect;
var Iterators = require('../iterators');

describe('Iterators', function () {
  describe('#max', function () {

    // cleaner to declare the variable outside of the beforeEach function
    var myArr;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myArr = [66,22,67, 34];
    });

    it('should return the maximum in an array', function () {
      expect(Iterators.max(myArr)).to.equal(67);
    });
    it('should return -Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    });
  });

  describe('#min', function () {
    var myArr;

    beforeEach(function () {
      myArr = [66,22,67, 34];
    });

    it('should return the minimum in an array', function () {
      expect(Iterators.min(myArr)).to.equal(22);
    });
   it('should return Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.min(myArr)).to.equal(Infinity);
    });
  });

  describe('#each', function () {
    var myArr;

    beforeEach(function () {
      myArr = [67, 68, 69];
    });

    it('should return the following when one is added to each number', function () {
        var sum = function(array){
          return  1+array
        }
        expect(Iterators.each(myArr, sum)).to.eql([68, 69, 70])
    });
  });

  describe("#map", function () {
    var myArr;

    beforeEach(function () {
      myArr = [1,2,3];
    });
      it ("should add 1 to each value of my original array", function() {
       var newArr = Iterators.map(myArr, function(num) {
          return num + 1;
        });
      expect(newArr).to.eql([2,3,4]);
    });
  });

 

  describe("#filter", function () {
    var myArr;
    var isEven=function (num) {
        return num % 2 ===0;
      };
      var isOdd=function (num) {
        return num % 2 !==0;
      };
    beforeEach(function () {
      myArr=[3,4,5];
    });

    it ("should return the even numbers in the first case and odd numbers in the second case", function() {
      expect(Iterators.filter([3,4,5], isEven)).to.eql([4]);
      expect(Iterators.filter([3,4,5], isOdd)).to.eql([3,5]);
    });
  }); // end of filter

}); // end of iterator


    

