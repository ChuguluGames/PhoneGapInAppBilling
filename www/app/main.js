function Application() {
  var self = this;

  self.routers = {};
  self.models = {};
  self.collections = {};
  self.views = {};   
  self.plugins = {};   

  self.ready = null;
  self.phonegap = null;
  
  self.container = null;

  return self;     
}

Application.prototype.wait = function() {
  var self = this;
 
  document.addEventListener("deviceready", function() { self.phonegap = true; self.initialize(); }, false); // phonegap ready
  $(function() { self.ready = true;  self.initialize(); }); // dom ready

  return this;
};

Application.prototype.initialize = function() {
  var self = this;

  if(self.ready && self.phonegap) {
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