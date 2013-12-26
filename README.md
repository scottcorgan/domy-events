# domy-events
 
Map DOM events to DOM elements. For use with [Browserify](http://browserify.org/).

Part of the [Domy module collection](https://github.com/scottcorgan/domy).

[![browser support](https://ci.testling.com/scottcorgan/domy-events.png)](https://ci.testling.com/scottcorgan/domy-events)
 
## Install
 
```
npm install domy-events --save
```
 
## Usage
 
```js
var events = require('domy-events');

var handlers = {
  method1: function (e) {
    e.preventDefault();
    console.log('in this method');    
  },
  
  method2: function (e) {
  
  },
  
  formHandler: function (e) {
    e.preventDefault();
  }
};

var eventsOptions = {
  bind: handlers, // optional
  parent: '.parent', // optional (can use a DOM object as well)
  delegate: true // optional
};

// Now, handle events
events({
  'click .some-css-selector': handlers.method1
  'click. #someId': 'method2',
  'submit form': handlers.formHandler
}, eventsOptions);
```
 
Note: **domy-events** uses `querySelectorAll` under the hood.

## Options

* `bind` - the context in which to bind the event handler method to
* `parent` - the parent DOM element for all css selections. Defaults to `document`.
* `delegate` - delegate all events to the parent
 
## Browser support

* Chrome - all
* Firefox - all
* Safari - all
* IE - 9+

## Run Tests

Requires [Phantomjs](phantomjs.org/download.html) is installed

```
npm install
npm test
```