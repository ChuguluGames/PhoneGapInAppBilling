function Catalogue() {
  var self = this;

  self.events = {};
};

Catalogue.prototype.exec = function(method, options) {
  console.log("phonegap exec CataloguePlugin " + method);
  PhoneGap.exec(null, null, "CataloguePlugin", method, options);   
};

Catalogue.prototype.fetch = function(callback) {
  var self = this;

  self.events.onFetch = callback;

  self.exec("fetch", [{}]);  
};