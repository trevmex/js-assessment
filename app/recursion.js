if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      function extractFiles(files, i, result) {
        if (i >= files.length) {
         return result;
        }

        var file = files[i];

        if (typeof(file) === 'object' && typeof(file['dir']) !== 'undefined') {
          return extractFiles(files, i+1, extractFiles(file['files'], 0, result));
        } else {
          result.push(file);
          return extractFiles(files, i+1, result);
        }
      }

      function gotoDir(files, i) {
        if (i >= files.length) {
          return null;
        }

        var file = files[i];

        if (typeof(file) === 'object' && typeof(file['dir']) !== 'undefined') {
          if (file.dir === dirName) {
            return file.files;
          }
        } else {
          return gotoDir(files, i+1);
        }
      }

      if (typeof(dirName) === 'undefined') {
        return extractFiles(data['files'], 0, []);
      } else {
        return extractFiles(gotoDir(data['files'], 0), 0, []);
      }
    },

    permute: function(arr) {

    }
  };
});
