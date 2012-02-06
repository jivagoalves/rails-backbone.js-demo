MyApp.Views.Index = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  render: function() {
    $(this.el).html(window.JST.tasks_collection({ collection: this.collection }));
    $('body').html($(this.el).html());
  }
});

