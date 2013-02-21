if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      var i, len = arr.length, result = null;

      for (i = 0; i < len && result === null; i += 1) {
        if (arr[i] === item) {
          result = i;
        }
      }

      return result === null ? -1 : result;
    },

    sum : function(arr) {
      var i, sum = 0;

      for (i in arr) {
        if (arr.hasOwnProperty(i)) {
          sum += arr[i];
        }
      }

      return sum;
    },

    remove : function(arr, item) {
      var i, result = [];

      for (i in arr) {
        if (arr.hasOwnProperty(i)) {
          if (arr[i] !== item) {
            result.push(arr[i]);
          }
        }
      }

      return result;
    },

    removeWithoutCopy : function(arr, item) {
      var i, len = arr.length;

      for (i = 0; i < len; i += 1) {
        while (arr[i] === item) {
          arr.splice(i, 1);
        }
      }

      return arr;
    },

    append : function(arr, item) {
      arr.push(item);

      return arr;
    },

    truncate : function(arr) {
      arr.pop();

      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);

      return arr;
    },

    count : function(arr, item) {
      var i, len = arr.length, result = 0;

      for (i = 0; i < len; i += 1) {
        if (arr[i] === item) {
          result += 1;
        }
      }

      return result;
    },

    duplicates : function(arr) {
      var i,
          prev = null,
          prevprev = null,
          len = arr.length,
          result = [],
          sortedArr = arr.sort();

      for (i = 0; i < len; i += 1) {
        if (sortedArr[i] === prev && prev !== prevprev) {
          result.push(sortedArr[i]);
        }
        prevprev = prev;
        prev = arr[i];
      }

      return result;
    },

    square : function(arr) {
      var i, len = arr.length;

      for (i = 0; i < len; i += 1) {
        arr.splice(i, 1, arr[i] * arr[i]);
      }

      return arr;
    },

    findAllOccurrences : function(arr, target) {
      var i, len = arr.length, result = [];

      for (i = 0; i < len; i += 1) {
        if (arr[i] === target) {
          result.push(i);
        }
      }

      return result;
    }
  };
});
