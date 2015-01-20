module.exports = function (grunt) {

    var util = require('util');

    grunt.helpers = {
        /**
         * Test if obj is empty.
         *
         * @param {Object} obj
         * @returns {boolean}
         */
        isEmpty: function (obj) {
            if (obj == null) return true;
            for (var p in obj) {
                if (obj.hasOwnProperty(p)) return false;
            }
            return true;
        },

        /**
         * Check if given path exists.
         *
         * @param {String} path - Path to check.
         * @param {String} [message]  - Error message for non-exist.
         * @param {Boolean} [exit=false] - Whether exist when path is non-exist.
         */
        checkPath: function (path, message, exit) {
            message = message || util.format('Path: %s does NOT exist', path);
            !grunt.file.exists(path) && (function () {
                exit ? grunt.fail.warn(message) : grunt.log.writeln(message);
            }());
        }
    };

};