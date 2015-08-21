var app = app || {};

(function () {
  'use strict';

  /**
   * Represents the food Item model
   * @type {[type]}
   */
  app.FoodItem = Backbone.Model.extend({

    toggleSelection: function() {
      this.set({'selected': true});
    }
  });
})(); 