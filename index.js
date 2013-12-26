var EVENT_SPLITTER = /\s+/;
var windowLoaded = false;

var domyEvents = function (events, options) {
  if (windowLoaded || document.readyState === "complete") init();
  else window.onload = init;
  
  function init() {
    windowLoaded = true;
    Object.keys(events).forEach(domyEvents._mapEvents(events, options));
  }
  
  return domyEvents;
};

domyEvents._mapEvents = function (events, options) {
  options || (options = {});
    
  return function (key) {
    // Valid event map?
    if (!EVENT_SPLITTER.test(key)) return;
    
    var eventList = key.split(EVENT_SPLITTER);
    var eventName = eventList.shift();
    var action = events[key];
    var parent = domyEvents._parentElement(options.parent);
    var domElements = parent.querySelectorAll(eventList.join(' '));
    
    if (options.delegate) {
      parent.addEventListener(eventName, function (e) {
        if ([].slice.call(domElements, 0).indexOf(e.target) < 0) return;
        domyEvents._callAction(e, action, options);
      });
    }
    else {
      [].forEach.call(domElements, function (el) {
        el.addEventListener(eventName, function (e) {
          domyEvents._callAction(e, action, options);
        });
      });
    }
    
  };
};

domyEvents._callAction = function (e, action, options) {
  var context = options.bind || this;
  domyEvents._parseAction(action, context).call(context, e);
};

domyEvents._parseAction = function (action, context) {
  if (typeof action === 'string') {
    var __action = action;
    
    action = context[action];
    if (!action) throw new Error('Event listener method "' + __action + '" is undefined');
  }
  
  return action;
};

domyEvents._parentElement = function (parent) {
  if (!parent) return document;
  if (typeof parent === 'object') return parent;
  
  return document.querySelector(parent);
}

module.exports = domyEvents;
