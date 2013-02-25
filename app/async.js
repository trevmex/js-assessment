if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var deferred = new $.Deferred();

      setTimeout(function () {
        deferred.resolve(value);
      }, 500);

      return deferred;
    },

    manipulateRemoteData : function(url) {
      return $.get(url).pipe(function (data) {
        var i, len = data.people.length, result = [];

        for (i = 0; i < len; i += 1) {
          result.push(data.people[i].name);
        }

        return result.sort();
      });
    }
  };
});
