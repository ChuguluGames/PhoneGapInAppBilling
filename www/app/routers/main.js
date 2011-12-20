var MainRouter = Backbone.Router.extend({
  routes: {
    "home": "home",
  },
  
  home: function() {
    app.collections.products = new ProductsCollection();
    app.views.home = new HomeView();

    app.container.html(app.views.home.render().el);
    app.collections.products.collect();

  }
});