# dove-events
 
Map DOM events to DOM elements. For use with [Browserify](http://browserify.org/).
 
## Install
 
```
npm install dove-events --save
```
 
## Usage
 
```js
var events = require('dove-events');

var obj = {
  method: function (e) {
    e.preventDefault();
    console.log('in this method');    
  }
};

var eventsOptions = {
  bind: obj, // optional
  parent: '.parent', // optional (can use a DOM object as well)
  delegate: true // optional
};

events({
  'click .some-css-selector': obj.method
}, eventsOptions);
```
 
If you bind the events to a context/object, you can provide a string ans the event listener method instead of a reference to the method.
 
Note: **dove-events** uses `querySelectorAll` under the hood.

## Options

* `bind` - the context in which to bind the event handler method to
* `parent` - the parent DOM element for all css selections. Defaults to `document`.
* `delegate` - delegate all events to the parent
 
## Browser support

* Chrome - all
* Firefox - all
* Safari - all
* IE - 9+