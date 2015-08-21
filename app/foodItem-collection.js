var app = app || {};

(function () {
  'use strict';

  /**
   * Represents the list of foodItems being tracked by 
   * the user, presists the food items to localStorage
   * 
   * Backbone Collection , //uses localStorgage
   */
  app.FoodItemCollection = Backbone.Collection.extend({
    
    model: app.FoodItem,

    localStorage: new Backbone.LocalStorage('foodItems-list'),

    nextOrder: function() {
      if(!this.length) {
        return 1;
      }
      return this.last().get('order') + 1;
    },

    comparator: function(foodItem) {
      return foodItem.get('order');
    }
  });

  //app.foodItemCollection = new app.FoodItemCollection();

})(); 