var app = app || {};

(function () {
  'use strict';

  /**
   * Collection of food items from the Health API, based on the search term
   * Backbone Collection, uses the url to get the list of food items
   */
  app.FoodItemSearchCollection = Backbone.Collection.extend({

    model: app.FoodItem,

    initialize: function() {
      this.ulr = this.updateUrl('milk');
    },

    // url to fetch list of fooditems based on the search term
    updateUrl : function(searchitem) {
      var baseUrl = 'https://api.nutritionix.com/v1_1/search/';
      var fields ='?fields=item_name,item_id,brand_name,nf_calories,nf_total_fat';
      var appIdAndKey = '&appId=058b0553&appKey=c920cef030e873cae9e5867dd31ee8f0';
      
      return baseUrl + searchitem + fields + appIdAndKey;
    },

    searchTerm : function(searchitem) {
      this.url = this.updateUrl(searchitem);
      this.fetch();
    },
    
    selected : function() {
      return this.filter(function(item){
        return item.get('selected');
      });
    },


    parse : function(response) {

      var data = [];

      _.each(response.hits,function(item) {

        var foodItem = {};
        var fields = item.fields;
        foodItem.id = fields.item_id;
        foodItem.name = fields.item_name;
        foodItem.brandName = fields.brand_name;
        foodItem.calories = fields.nf_calories;
        foodItem.totalFat = fields.nf_total_fat;
        foodItem.serving = fields.nf_serving_size_qty;
        foodItem.selected = false;
        data.push(foodItem);

      });
      return data;
    },
  });
})(); 