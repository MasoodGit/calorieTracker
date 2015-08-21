var app = app || {};

(function ($) {
  'use strict';

  /**
   * Represents the FoodItemSearchCollection
   * @type {[type]}
   */
   app.FoodItemSearchListView = Backbone.View.extend({
    
    el: '#search-list-view',

    template: $('#search-list-view-template').html(),

    initialize : function () {

      this.model.bind('add',this.addOne);
      
      _.bindAll(this,'search');

      this.render();
    },

    

    events: {
      "click #searchFoodItemButton" : "searchFoodItem",
      "click #addFooditemButton" : "addFoodItems",
      "click #cancelButton" : "goToFoodItemList"
    },

    render: function () {
      this.$el.append(this.template);
    },

    searchFoodItem: function(event) {
      var searchterm = $('#searchFoodItemInput').val();
      this.search(searchterm);
    },

    search: function(searchfor){
      if(searchfor) {
        $('.search-results').html('');
        this.model.searchTerm( searchfor );
      }
    },

    addFoodItems : function(event) {
      _.each(this.model.selected(),function(fooditem) {
        console.log(fooditem.attributes);
        app.foodItemCollection.create(fooditem.attributes);
      },this);
      this.navigateToFoodItemList();
    },

    goToFoodItemList : function(event) {
     this.navigateToFoodItemList();
    },

    addOne : function (foodItem) {
      var view = new app.FoodItemSearchView({model:foodItem});
      $('.search-results').append(view.render().el);
    },

    addAll : function() {
      $('.search-results').html('');
      this.model.each(this.addOne,this);
    },

    navigateToFoodItemList: function(){
       app.router.navigate('',true);
    },

    close : function () {
      this.$el .unbind();
      this.$el.empty();
    }



   });
})(jQuery); 