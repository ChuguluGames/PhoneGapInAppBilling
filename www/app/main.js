function Application() {
  var self = this;

  self.routers = {};
  self.models = {};
  self.collections = {};
  self.views = {};   
  self.plugins = {};   

  self.ready = null;
  self.phonegap = null;
  self.initialized = false;
  
  self.container = null;

  return self;     
}

Application.prototype.wait = function() {
  var self = this;
  
  console.log("waiting for dom and phonegap initialization");

  $(window).load(function() {
    if(typeof PhoneGap !== "undefined" && typeof PhoneGap.onDeviceReady != "undefined" && PhoneGap.onDeviceReady.fired === true) 
      self.onDeviceReady();
    else document.addEventListener("deviceready", function() { self.onDeviceReady(); }, false);
  });

  $(function() { self.onDomReady(); }); // dom ready

  return self;
};

/*
The Android PhoneGap javascript version cancel the deviceready listeners on initialization.
It appears to be more logical to listen before the instanciation...
So we loop until we deviceready has fired.
*/
Application.prototype.waitForDeviceReady = function(callback) {
  var self = this;

  // don't need a timer, it's already ready
  if(!self.phonegap && typeof PhoneGap !== "undefined" && PhoneGap.onDeviceReady.fired) {
    callback();

  // not ready yet, let's wait  
  } else if(!self.phonegap) {
    var loopsMax = 1000,
        loopCurrent = 0,
        loopFrequence = 1,
        timer = setInterval(function() {

      if(typeof PhoneGap !== "undefined" && PhoneGap.onDeviceReady.fired) {
        console.log("deviceready fired in " + (loopCurrent * loopFrequence) + "ms");
        clearInterval(timer);
        callback();
        return;
      }
      loopCurrent++;
      if(loopCurrent == loopsMax) {
        console.error("deviceready didn't fired in " + (loopCurrent * loopFrequence) + "ms");
        clearInterval(timer);
      }
    }, loopFrequence);         
  }
};

Application.prototype.onDeviceReady = function() {
  var self = this;
  
  self.phonegap = true; 
  self.initialize();
};

Application.prototype.onDomReady = function() {
  var self = this;
  
  self.ready = true; 
  self.initialize();
};

Application.prototype.initialize = function() {
  var self = this;

  if(self.ready && self.phonegap) {
    self.initialized = true;
    console.log("application initialized");

    self.container = $("#main");
    self.routers.main = new MainRouter();

    app.addPlugin("Catalogue");

    Backbone.history.start({pushState: false}); // start the history
    self.routers.main.navigate("home", true);   // start at the home page
  }
};

Application.prototype.addPlugin = function(plugin) {
  app.plugins[plugin] = window.plugins[plugin] = new window[plugin]; 
}

var app = new Application().wait();