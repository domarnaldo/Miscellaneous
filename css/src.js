/*
* $css written by Dominick A
* https://github.com/DominickA/Miscellaneous/tree/master/$css
*/
(function () {
    String.prototype.toCamel = function () {
        return this.replace(/\-(\w)/g, function (strMatch, p1) {
            return p1.toUpperCase();
        });
    };
    var $css = function (elem, prop, value) {
            if (typeof prop === "string" && value !== undefined) elem.style[prop.toCamel()] = value;
            else if (typeof prop === "object" && value == undefined) {
                for (var name in prop) {
                    elem.style['' + name.toCamel() + ''] = prop[name];
                }
            } else if (typeof prop === "string" && value === undefined) {
                var prop_val = "";
                if (document.defaultView && document.defaultView.getComputedStyle) {
                    prop_val = document.defaultView.getComputedStyle(elem, "").getPropertyValue(prop);
                } else if (elem.currentStyle) {
                    prop = prop.replace(/\-(\w)/g, function (strMatch, p1) {
                        return p1.toUpperCase();
                    });
                    prop_val = elem.currentStyle[prop];
                }
                return prop_val;
            }
        }
    window.$css = $css;
})();