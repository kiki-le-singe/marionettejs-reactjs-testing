define([
  'marionette',
  'react',
  'views/helloWorldItemView',
  'views/librariesCompositeView',
  'models/helloWorldModel',
  'models/librariesCollection',
  '#components/hello-world'
],

function (
  Marionette,
  React,
  HelloWorldItemView,
  LibrariesCompositeView,
  HelloWorldModel,
  LibrariesCollection,
  HelloWorldComponent) {
  'use strict';

  var NavController = Marionette.Controller.extend({
    initialize: function (options) {
      this.contentRegion = options.contentRegion;
    },

    home: function () {
      // return this.contentRegion.show(new HelloWorldItemView({
      //   model: new HelloWorldModel()
      // }));
      var helloWorldComponent = React.createFactory(HelloWorldComponent);
      React.render(
        helloWorldComponent(),
        document.getElementById('content')
      );
    },

    libraries: function () {
      return this.contentRegion.show(new LibrariesCompositeView({
        collection: new LibrariesCollection()
      }));
    }
  });

  return NavController;
});
