var events = require('../');
var evt = require('synthetic-dom-events');
var test = require('tape');
var domify = require('domify');

test('triggers event handler', function (t) {
  var tester = domify('<div class="tester"></div>');
  var ev = evt('click', { button: 2 });
  document.body.appendChild(tester);
  
  events({
    'click .tester': function (e) {
      t.deepEqual(e.target, tester);
      t.end();
    }
  });
  
  tester.dispatchEvent(ev);
});

// test('delagates to parent', function (t) {
//   var ev = evt('click');
//   var parent = domify('<div class="parent"></div>');
//   var tester = domify('<div class="tester"></div>');
  
//   parent.appendChild(tester);
//   // document.body.appendChild(parent);
  
//   events({
//     'click .tester': function (e) {
//       // t.deepEqual(e.target, tester);
//       t.end();
//     }
//   }, {
//     parent: parent,
//     delegate: true
//   });
  
//   tester.dispatchEvent(ev);
// });