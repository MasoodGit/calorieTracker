var app = app || {};

(function () {
  'use strict';

  /**
   * Represents the food Item 
   * @type {[type]}
   */
  app.FoodItem = Backbone.Model.extend({

    toggleSelection: function() {
      this.set({'selected': true});
    }
  });
})(); 