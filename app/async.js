if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      return new $.Deferred().resolve(value);
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
