MyApp.Models.Task = Backbone.Model.extend({
  urlRoot: '/tasks',

  isComplete: function() {
    return this.get('completed_at') !== null;
  }
});

