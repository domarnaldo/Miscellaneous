/*
 *getByClassName - Written by DominickA
 *https://github.com/DominickA/Miscellaneous/blob/master/getByClassName/
 */ 
 (function () {
    var getByClassName = function (cname, tag, direct) {
            if (document.getElementsByClassName) { //Check to see if the browser supports document.getElementsByClassName
                if (tag != undefined) {
                    var tag_name = document.getElementsByTagName(tag),
                        ele_array = [];
                    for (i = 0; i < tag_name.length; i++) {
                        if (direct == true) {
                            var search = new RegExp("(^|\\s)" + cname + "(\\s|$)");
                            if (search.test(tag_name[i].className)) ele_array.push(tag_name[i]);
                        } else return tag_name[i].getElementsByClassName(cname); //Perform another loop to find the tag names
                    }
                    return ele_array;
                } else return document.getElementsByClassName(cname); //If there's no tag defined, return the default browser's function
            } else { //All older browsers
                if (tag != undefined) var elements = document.getElementsByTagName(tag);
                else {
                    if (document.getElementsByTagName('*')) var elements = document.getElementsByTagName('*'); //Check to see if getElementsByTagName('*') is a valid tag name
                    else if (document.all) var elements = document.all; //Very old browsers like IE 5.5
                }
                var ele_array = []; //The empty array that will hold our elements
                for (i = 0; i < elements.length; i++) {
                    var search = new RegExp("(^|\\s)" + cname + "(\\s|$)"); //RegExp to split multiple class names for testing
                    if (tag != undefined) {
                        if (direct == true) {
                            if (search.test(elements.className)) ele_array.push(elements[i]);
                        } else {
                            var tag_parent = elements[i].childNodes;
                            for (x = 0; x < tag_parent.length; x++) { //Another for loop to test all of the element's child nodes
                                if (search.test(tag_parent[x].className)) ele_array.push(tag_parent[x]); //Test if the class name equals the class name to look for and put those elements into the empty array
                            }
                        }
                    } else {
                        if (search.test(elements[i].className)) ele_array.push(elements[i]); //If no tag name is defined, return the elements that have the class name
                    }
                };
                return ele_array; //Return the array of elements
            }
        };
    window.$class = window.getByClassName = getByClassName; //Define how to call getByClassName for easier use
})();