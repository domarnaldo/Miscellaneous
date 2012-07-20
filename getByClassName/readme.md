getByClassName - The Cross Browser Solution
===============================

getByClassName was designed for those who simply wish to select elements whose class name is equivalent to what you're looking for. Weighing in at about 0.6KB minified, this will save your site some space from frameworks, libraries, and etc. only if you wish to select classes. 

getByClassName is cross browser up until IE 5.5. 

getByClassName also supports modern browsers by testing whether or not the browser is compatible with the built in function of getElementsByClassName.

Syntax:
```javascript
$class(class, tag, direct); //Returns all div tags who have the class name of 'classname'
```

Class: The class name enclosed with quotation marks of the elements you wish to select.

Tag: The tag name enclosed with quotation marks that is a parent node of the element with the class name you wish to select. Syntax in CSS would be: div classname

Direct: Either leave this blank, or put true without quotation marks. If this is true, then you will select all tag names with the class you are looking for. Syntax in CSS would be: div.classname

Examples:
Selecting a simple class name:
```javascript
$class('classname'); //Returns all elements with the class name of "classname"
```

Selecting classes whose a child node of a defined tag name:
```javascript
$class('classname', 'div'); //Returns all elements who have the class name of "classname", but are a child of a div element.
```

Selecting classes who are a defined tag name, or selecting tags that have the class:
```javascript
$class('classname', 'div', true); //Returns all div tags who have the class name of 'classname'
```

