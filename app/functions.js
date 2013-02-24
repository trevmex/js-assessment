if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return (fn.apply(this, arr));
    },

    speak : function(fn, obj) {
      return fn.apply(obj);
    },

    functionFunction : function(str) {
      return (function (str2) {
        return str + ', ' + str2;
      });
    },

    makeClosures : function(arr, fn) {
      var i, len = arr.length, result = [];

      for (i = 0; i < len; i += 1) {
        result.push(function (j) {
          return (function () {
              return fn(arr[j]);
          });
        }(i));
      }

      return result;
    },

    partial : function(fn, str1, str2) {
      return (function (str3) {
        return fn(str1, str2, str3);
      });
    },

    useArguments : function() {
      var i, len = arguments.length, result = 0;

      for (i = 0; i < len; i += 1) {
        result += arguments[i];
      }

      return result;
    },

    callIt : function(fn) {
      return Array.prototype.shift.call(arguments).apply(this, arguments);
    },

    partialUsingArguments : function(fn) {
      var func = Array.prototype.shift.call(arguments),
          i, len = arguments.length, args = [];

      for (i = 0; i < len; i += 1) {
        args.push(arguments[i]);
      }

      return (function () {
        var i, len = arguments.length;

        for (i = 0; i < len; i += 1) {
          args.push(arguments[i]);
        }

        return func.apply(this, args);
      });
    },

    curryIt : function(fn) {
      var args = [];

      return (function (n) {
        var result = arguments.callee;

        args.push(n);

        if (args.length === fn.length) {
          result = fn.apply(this, args);
        }

        return result;
      });
    }
  };
});
