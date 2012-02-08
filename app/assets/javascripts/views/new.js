MyApp.Views.New = Backbone.View.extend({
  el: 'body',

  events: {
    "click input": "create"
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(window.JST.task_new({ model: this.model }));
  },

  create: function() {
    this.model.save(
      {
        description: this.$("textarea[name='description']").val()
      },
      {
        success: function() {
          alert('The task has been saved successfully!');
        },
        error: function() {
          alert('Oops...');
        }
      }
    );
  }
});
