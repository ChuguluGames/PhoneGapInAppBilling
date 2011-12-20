var HomeView = Backbone.View.extend({
  id: "page-home",
  tagName: "div",

  render: function() {
    var self = this;

    self.$(self.el).append(new ProductsView().render().el);

    return self;
  }
});