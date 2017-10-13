exports.checkType = {

    getType: function(a) {
        if (typeof a === "object") {
            if (Array.isArray(a)) {
                return 'array';
            } else {
                return 'object';
            }
        } else {
            return typeof a;
        }
    }
};
