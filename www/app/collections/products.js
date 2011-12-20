var ProductsCollection = Backbone.Collection.extend({
  model: ProductModel,

  initialize: function() {
    var self = this;


  },

  collect: function() {
    var self = this;

    app.plugins.Catalogue.fetch(function(response) {
      self.add(response.products);
      self.trigger("collected");
    });
    
    // self.add({
    //   id: 1,
    //   name: "chaussettes",
    //   price: 5
    // });

    // self.add({
    //   id: 2,
    //   name: "pantalon",
    //   price: 30
    // });

    // self.add({
    //   id: 3,
    //   name: "casquette",
    //   price: 10
    // });
    
    // self.add({
    //   id: 4,
    //   name: "pull",
    //   price: 20
    // });        

    

  }
});