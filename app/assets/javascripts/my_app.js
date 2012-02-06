var MyApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function(tasks) {
    new MyApp.Routers.Tasks();
    Backbone.history.start();
  }
};
