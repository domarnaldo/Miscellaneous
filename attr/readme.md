$attr - Setting/Getting the Attribute of an Element Just got Easier
===============================

$attr is a cross browser method of setting or getting the attribute of an element. 

Setting the attribute of an element just got easier. You can set multiple attribute of an element in just one function.

You can even use hyphens in the style properties, just like CSS!

Syntax:
```javascript
$attr(element, attribute, value); 
```

Element: The element you wish to modify.

Attribute: Either a single attribute or an object of attributes.

Value: If you wish to set multiple attributes at once, leave this blank. Otherwise, if you wish to set a single attribute, put the value of what you wish to set the attribute.

Examples:
Getting the Style of an Element:
```javascript
$attr(document.getElementById('foo'), 'title'); //Returns the title of the ID 'foo'
```

Setting a Single Style Property of an Element:
```javascript
$attr(document.getElementById('foo'), 'title', 'Test Title'); //Sets the title of the ID 'foo' to 'Test Title'
```

Selecting Multiple Style Properties of an Element:
```javascript
$attr(document.getElementById('foo'), {
title: 'Test Title',
class: 'clearfix',
alt: 'Test Alt'
}); //Sets the title to 'Test Title', class to 'clearfix', and alt to 'Test Alt'
```

