Clank Jump Div is an AngularJS 1.x module to create an element called &lt;clank-jump-div&gt;. The jump div binds to an element and will swap positions with the element, in the DOM, when the defined breakpoint is triggered.

Accepted Attributes for the &lt;clank-jump-div&gt; element:
id: Used as the way for elements to hook onto the jump-div.
jump-width: The width at which desktop mode will kick in.
jump-height: The height at which desktop mode will kick in.

To bind an element to the <clank-jump-div> apply the jump-to-div="ID" attribute to the element and replace the ID with the <clank-jump-div id="jump_1"> id attribute.
```html
<button jump-to-div="jump_1">TEST</button> 
```

