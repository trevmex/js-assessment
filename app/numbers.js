if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      return (num >> (bit - 1) & 1);
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      var str = num.toString(2);

      return str.length < 8 ? "0"+str : str;
    },

    multiply: function(a, b) {
      return parseFloat(parseFloat(parseFloat(a) * parseFloat(b)).toPrecision(4));
    }
  };
});

