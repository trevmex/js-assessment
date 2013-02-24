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
      var i, len = arr.length, work, prev = arr, result = [arr];

      function next(a) {
        var i, j, k = -1, l = -1, len = a.length, tmp, end = false;

        for (i = len - 2, j = len - 1; i >= 0; i -= 1, j -= 1) {
          if (a[i] < a[j] && i > k) {
            k = i;
          }
        }
        if (k === -1) {
          end = true;
        } else {
          for (i = 0; i < len; i += 1) {
            if (a[k] < a[i] && i > l) {
              l = i;
            }
          }
          if (l === -1) {
            end = true;
          } else {
            tmp = a[k];
            a[k] = a[l];
            a[l] = tmp;
            for (i = k + 1, j = len - 1; i <= j; i += 1, j -= 1) {
              tmp = a[i];
              a[i] = a[j];
              a[j] = tmp;
            }
          }
        }

        return end ? false : a;
      }

      do {
        work = new Array(4);

        for (i = 0; i < len; i += 1) {
          work[i] = prev[i];
        }

        result.push(work);
        work = next(work);
        prev = work;
      } while (work);

      result.pop();
      return result;
    }
  };
});
