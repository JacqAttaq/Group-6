
//Model View
var StateView = Backbone.View.extend({
    tagName: 'article',
    className: 'states-view',
    events: {
      "click button": "showState"
    },
    initialize: function() {
      console.log('state view is made');
      this.render();
    },
//we need to render .page2
    render: function() {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this
  }
});

//from page2:
//if hotel is clicked: render to hotels from that state


  //collection view
  //do iterration and render to the page
  var StatesView = Backbone.View.extend({
    tagName: 'section'
    initialize: function() {
     console.log("states view is running");
   }
  });


//not sure what's this is on. Also, not all correct

// $(function(){
//   var people = new StudentCollection();
//   var appView = new Students
//
//   people.fetch().then(fucntion(){
//
//
//
// var appView;
// $(function(){
//   var people = new StudentCollection();
//   people.fetch().then(fucntion(){
//
//   })
// })

//    var person = people.at(0);
//    appView.addOne(person);
    //i didn't get the rest
  });
})
