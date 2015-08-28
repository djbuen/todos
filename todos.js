Tasks = new Mongo.Collection("tasks");
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
      tasks: function(){
          return Tasks.find({});
      }
  });

  Template.body.events({
    'click .delete': function(event){
        Tasks.remove(this._id);
    },
    'submit .new-task': function(event){
        event.preventDefault();
        var text = event.target.text.value;
        console.log(text);

        Tasks.insert({
            text: text,
            createdAt: new Date()
        });

        event.target.text.value = "";
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
