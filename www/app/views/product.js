var ProductView = Backbone.View.extend({
  tagName: "div",
  className: "product",

  render: function() {
    var self = this,
        name = self.model.get("name"),
        price = self.model.get("price");
    
    self.$(self.el).html(name + ' (' + price + ' €)');

    return self;
  }
});