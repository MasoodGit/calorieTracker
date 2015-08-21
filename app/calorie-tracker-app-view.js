var app = app || {};

$(function() {

var AppRouter = Backbone.Router.extend({

  routes: {
    "": "foodList",
    "search": "searchList"
  },

  foodList: function() {
    this.loadView(new app.FoodItemListView({model: app.foodItemCollection}));
  },

  searchList: function() {
    this.loadView(new app.FoodItemSearchListView({model: new app.FoodItemSearchCollection()}));
  },

  loadView : function(_view) {
    this.view && (this.view.close ? this.view.close() : this.view.remove());
    this.view = _view;
  }

}); // end of AppRouter

app.router = new AppRouter();
app.foodItemCollection = new app.FoodItemCollection();
//app.foodItemCollection.fetch();
Backbone.history.start();
});