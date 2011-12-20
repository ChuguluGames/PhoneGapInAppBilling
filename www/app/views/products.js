var ProductsView = Backbone.View.extend({
  tagName: "div",
  id: "products",

  initialize: function() {
    var self = this;
    app.collections.products.bind("collected", self.renderProducts, self);
  },
    
  renderProducts: function() {
    var self = this,
        productView;

    app.collections.products.each(function(product) {
      productView = new ProductView({model: product}); 
      self.$(self.el).append(productView.render().el);
    });
  }  

});