var app = app || {};

(function ($) {
  'use strict';
  /**
   * View for the FoodItemCollection
   * Backbone View. 
   */
  app.FoodItemListView = Backbone.View.extend({

    el: '#food-list',

    template: $('#fooditem-list-view-template').html(),

    initialize: function() {

      this.listenTo(this.model,'remove',this.updateTotal);
      this.listenTo(this.model,'reset',this.addAll);
      this.listenTo(this.model,'add',this.addOne);

      this.model.fetch();
      this.render();

    },

    events: {
      'click .searchFoodItem' : "searchFoodItems"
    },

    render: function() {

      this.$el.append(this.template);
      this.addAll();
      this.updateTotal();
    },

    addOne : function(foodItem) {
      var foodItemView = new app.FoodItemView({model: foodItem });
      var element = foodItemView.render().el;
      $('.foodItem-list').append(element);
    },

    addAll: function() {
      this.model.each(this.addOne,this);
    },

    searchFoodItems: function(event) {
      app.router.navigate('search',true);
    },

    updateTotal : function() {
       $('.total-value').text(this.calculateTotalCalories());
    },

    calculateTotalCalories : function() {
      var totalCalories = _.reduce(this.model.models,function(accu,item) {
        return accu = accu + (+item.get('calories'));
      },0);
      return totalCalories;
    },

    close : function() {
      this.stopListening();
      this.$el.unbind();
      this.$el.empty();
    }

  });
})(jQuery); 