var iterators = {
    max: function (numList) {
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] > max) {
          max = numList[i];
        }
      }
      return max;
    },
    min: function (numList) {
      var min = Infinity;
      for (var i=0; i < numList.length; i++) {
        if (numList[i]<min) {
          min=numList[i];
        }
      }
      return min;
    },
    each: function (array, callback) {
      for (var i=0; i<array.length; i++){
        array[i] = callback(array[i]);
      };
      return array;
    },
    map: function (array, callback) {
      var array2=[];
      for (var i=0; i<array.length; i++) {
        array2.push(callback(array[i]));
      }
      return array2;
    },
    filter: function (array, callback) {
      var subsetarray=[];
      for (var i=0; i<array.length; i++) {
        if(callback(array[i])){
          subsetarray.push(array[i]);  
        }
      }
      return subsetarray;
    }
  };


module.exports = iterators;
