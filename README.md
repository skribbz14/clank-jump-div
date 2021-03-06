Clank Jump Div is an AngularJS 1.x module to create an element called &lt;clank-jump-div&gt;. The jump div binds to an element and will swap positions with the element, in the DOM, when the defined breakpoint is triggered.

## How to use

#### Placement
Place the jump div element and the jumping element in the DOM where you would like them to be when in mobile mode. 

#### The Jump Div element
The jump div must have a unique ID.
```html
<clank-jump-div id="jump_test">
```
Next you will need to define the breakpoint at which the jump div will be triggered. This is done with the "jump-width" and "jump-height" attributes. Whenever the screen height and width is larger than the given values the jump div and element will swap positions in the DOM.
```html
<clank-jump-div id="jump_test" jump-width="768" jump-height="600">
```
In the above example the jump will happen when the screen width is larger than 768 AND the screen height is larger than 600.

#### Bind the jumping element
Finally you will need to bind an element to the &lt;clank-jump-div&gt; by applying the "jump-to-div" attribute to the element.
```html
<button jump-to-div="jump_test">TEST</button> 
```




