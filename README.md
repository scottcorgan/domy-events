# ear
 
Map DOM events to DOM elements. For use with [Browserify](http://browserify.org/);
 
## Install
 
```
npm install ear --save
```
 
## Usage
 
```js
var ear = require('ear');

var obj = {
  method: function (e) {
    e.preventDefault();
    console.log('in this method');    
  }
};

ear({
  'click .some-css-selector': obj.method
}, {
  bind: obj, // optional
  parent: '.parent' // optional
});
```
 
Note: **ear** uses querySelectorAll under the hood.

## Options

* `bind` - the context in which to bind the event handler method to
* `parent` - the parent DOM element for all css selections. Defaults to `document`
 
## Browser support

* Chrome - all
* Firefox - all
* Safari - all
* IE - 9+