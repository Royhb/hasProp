    var hasProp = {
        hasProp: function (obj) {
            var self = this;
            var args = Array.prototype.slice.call(arguments, 1);
            for (var i = 0; i < args.length; i++) {
                if (!self.checkProp(obj, args[i])) {
                    return false;
                }
            }
            return true;
        },

        checkProp: function (obj, prop) {
            var name;
            var arrNames = prop.split('.');

            while (name = arrNames.shift()) {
                if (!obj.hasOwnProperty(name)) return false;
                obj = obj[name];
            }

            return true;
        }
    };

module.exports = {hasProp: hasProp};

