/*
* $attr written by Dominick A
* https://github.com/DominickA/Miscellaneous/tree/master/$attr
*/
(function () {
    var $attr = function (elem, attr, value) {
            if (typeof attr === "string" && value !== undefined) elem.setAttribute(attr, value);
            else if (typeof attr === "object" && value == undefined) {
                for (var name in attr) {
                    elem.setAttribute('' + name + '', attr[name]);
                }
            } else if (typeof attr === "string" && value == undefined) {
                return elem.getAttribute(attr);
            }
        }
    window.$attr = attr;
})();