FilterableCollectionMixin = {
  filtered: function(criteriaFunction) {
    return new this.constructor(this.select(criteriaFunction));
  }
};

MyApp.Collections.Tasks = Backbone.Collection.extend({
  model: MyApp.Models.Task,
  url: '/tasks',

  complete: function() {
    return this.filtered(function(task) {
      return task.isComplete();
    });
  }
});

_.extend(MyApp.Collections.Tasks, FilterableCollectionMixin);

