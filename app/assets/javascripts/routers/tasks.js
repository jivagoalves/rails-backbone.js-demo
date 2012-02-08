MyApp.Routers.Tasks = Backbone.Router.extend({
  routes: {
    "": "index",
    "new": "newTask"
  },

  index: function() {
    var tasks = new MyApp.Collections.Tasks();
    tasks.fetch({
      success: function() {
        new MyApp.Views.Index({ collection: tasks });
      },
      error: function() {
        new Error({ message: "Error on loading tasks."});
      }
    });
  },

  newTask: function() {
    new MyApp.Views.New({ model: new MyApp.Models.Task() })
  }
});

