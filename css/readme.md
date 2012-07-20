$css - Setting/Getting the Style of an Element Just got Easier
===============================

$css is a cross browser method of setting or getting the style of an element. 

Setting the style of an element just got easier. You can set multiple style properties of an element in just one function.

Getting the style of an element just fot better. If the style property you are looking for in an element does not exist in the element's style property, then it will get it's computed value either from the document or from the CSS StyleSheet.

You can even use hyphens in the style properties, just like CSS!

Syntax:
```javascript
$css(element, properties, value); 
```

Element: The element you wish to modify.

Properties: Either a single CSS property or an object of properties.

Direct: If you wish to set multiple properties at once, leave this blank. Otherwise, if you wish to set a single property, put the value of what you wish to set the property.

Examples:
Getting the Style of an Element:
```javascript
$css(document.getElementById('foo'), 'font-size'); //Returns the computed font-size from the element that has the ID of 'foo'
```

Setting a Single Style Property of an Element:
```javascript
$css(document.getElementById('foo'), 'font-size', '12px'); //Sets the font-size of the ID 'foo' to 12px
```

Selecting Multiple Style Properties of an Element:
```javascript
$css(document.getElementById('foo'), {
'font-size':'12px',
'background-color':'#000000',
'color':'#FFFFFF'
}); //Sets the font size to 12px, background color to black, and font color to white
```

