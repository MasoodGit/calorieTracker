var app = app || {};

(function ($) {
  'use strict';

  /**
   * [FoodItemView description]
   * @type {[type]}
   */
  app.FoodItemView = Backbone.View.extend({
    template: _.template($('#fooditem-view-template').html()),

    initialize: function() {

      _.bindAll(this,'deleteFoodItem');
      
      this.listenTo(this.model,'remove', this.removeItemView);
    },
    events: {
      "click .delete-food-item" : "deleteFoodItem"
    },

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    },

    deleteFoodItem : function() {
      this.model.destroy();
    },

    removeItemView : function () {
      this.remove();
    }
  });

})(jQuery); 