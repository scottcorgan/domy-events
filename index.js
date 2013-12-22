(function () {
  var EVENT_SPLITTER = /\s+/;
  var windowLoaded = false;

  var ear = function (events, options) {
    if (windowLoaded || document.readyState === "complete") init();
    else window.onload = init;
    
    function init() {
      setTimeout(function () {
        windowLoaded = true;
        Object.keys(events).forEach(ear.mapEvents(events, options));
      }, 0);
    }
    
    return ear;
  };

  ear.mapEvents = function (events, options) {
    return function (key) {
      if (!EVENT_SPLITTER.test(key)) return;
      
      var eventList = key.split(EVENT_SPLITTER);
      var eventName = eventList.shift();
      var action = events[key];
      var parent = ear.parentElement(options.parent);
      
      if (!parent) return;
      
      var domElements = parent.querySelectorAll(eventList.join(' '));
      
      [].forEach.call(domElements, function (el) {
        el.addEventListener(eventName, function (e) {
          var context = options.bind || this;
          action.call(context, e);
        });
      });
      
    };
  };

  ear.parentElement = function (parent) {
    if (!parent) return document;
    if (typeof parent === 'object') return parent;
    
    return document.querySelector(parent);
  }

  module.exports = ear;
}());