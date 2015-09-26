        function hasProp (obj) {
            var args = Array.prototype.slice.call(arguments, 1);
            for (var i = 0; i < args.length; i++) {
                if (args[i].hasOwnProperty) {

                }
                if (!checkProp(obj, args[i])) {
                    return false;
                }
            }
            return true;
        }

        function checkProp (obj, prop) {
            var name;
            var arrNames = prop.split('.');

            while (name = arrNames.shift()) {
                if (!obj.hasOwnProperty(name)) return false;
                obj = obj[name];
            }

            return true;
        }


module.exports = {hasProp: hasProp};

