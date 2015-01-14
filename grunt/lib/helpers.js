module.exports = function (grunt) {

    grunt.helpers = {
        /**
         * Test if obj is empty.
         *
         * @param {Object} obj
         * @returns {boolean}
         */
        isEmpty :function (obj) {
            if (obj == null) return true;
            for (var p in obj) {
                if (obj.hasOwnProperty(p)) return false;
            }
            return true;
        }
    };

};