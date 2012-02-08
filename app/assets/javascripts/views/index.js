MyApp.Views.Index = Backbone.View.extend({
  el: 'body',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(window.JST.tasks_collection({ collection: this.collection }));
  }
});

