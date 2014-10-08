# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working.


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function`
-a function that does at least one of the following: 1) takes one or more functions as an input 2) outputs a function. 
-functions that operate on other functions, either by taking them as arguments or by returning the functions

Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:

* `max`
-returns the maximum element

beforeEach(function () {
myArr = [66,22,67, 34];
});

var findMax=function () {
    it('should return the maximum in an array', function () {
    expect(Iterators.max(myArr)).to.equal(67);
});

* `min`
-returns the minimum element

beforeEach(function () {
myArr = [66,22,67, 34];
});

var findMin=function () {
it('should return the minimum in an array', function () {
expect(Iterators.min(myArr)).to.equal(67);
});


* `each`
-forEach is the functional programming replacement for your standard for loop. You can take the body from your for loop, wrap it in a function, and pass that argument to forEach.

var friends = ["Markus", "Tim", "Ilias", "Elie"];
friends.forEach(function (buddy) {
console.log("Hello, " + buddy + "!");
});

* `map`
-loop over an array and build a new array in the process.

var names = ["tim", "ilias", "elie", "markus"];
var cased = names.map(function (person) {
return person.toUpperCase();
});
console.log(cased);


* `filter`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
-Filter is an iterator that loops through your array and filters it down to a subset of the original array

var names = ["tim", "ilias", "elie", "markus"];

var isEven = function (name) {
return name.length % 2 === 0;
};
var isOdd = function (name) {
return name.length % 2 !== 0;
};

var evenLengthNames = names.filter(isEven);
var oddLengthNames = names.filter(isOdd);

console.log(evenLengthNames);
console.log(oddLengthNames);

* `reduce`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
-Reduce iterates over an array and turns it into one, accumulated value.

var nums = [1,2,3,4];
var add = function (a, b) {
return a + b;
};

var sum = nums.reduce(add);
console.log(sum);

// Should output:
// > 10
// which is, 1 + 2 + 3 + 4

* `reject`: [note](http://underscorejs.org/#reject)
-Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter.

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=> [1, 3, 5]

Use the notes provided to help guide you explanation.


### Phase-2

* Write a test in the `spec` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration.

* Re-implement the `each` function, but write the spec for it first. Continue this exercise with `map` and `filter` and write tests first!


### Phase-3

Implement the remaining iterator methods in the namespace and add tests for each one of them. Make sure that they return the correct data as well as datatype, and implement tests for edge cases (empty arrays, negative numbers).

