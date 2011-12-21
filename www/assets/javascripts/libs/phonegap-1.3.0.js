if (typeof PhoneGap === "undefined") {
  var PhoneGap = {};

  if (!window.plugins) {
      window.plugins = {};
  }  

  PhoneGap.fire = function(eventType) {
    var event = document.createEvent('Event');
    event.initEvent(eventType, true, false);
    document.dispatchEvent(event);    
  };

  PhoneGap.exec = function(success, fail, service, action, args) {
    
  };

  PhoneGap.onDeviceReady = {
    fired: true
  };
  PhoneGap.fire("deviceready");
}