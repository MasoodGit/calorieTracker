var app = app || {};

(function ($) {
  'use strict';

  /**
   * Represents the view for the foodItem model, used in FoodItemSearchCollection
   * 
   */
  app.FoodItemSearchView = Backbone.View.extend({
    
    template: _.template( $('#search-view-template').html() ),

    events: {
      'click .toggle' : 'toggleSelected'
    },

    render: function() {

      this.$el.html( this.template(this.model.attributes) );
      this.$el.toggleClass('selected',this.model.get('selected'));

      return this;
    },

    toggleSelected: function() {
      this.model.toggleSelection();
    }

  });

})(jQuery); 