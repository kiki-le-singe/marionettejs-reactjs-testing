/** @jsx React.DOM */

define([
  'react'
],

function (React) {
  'use strict';

  var HelloWorld = React.createClass({
    render: function () {
      return (
        <h1 className="title">{this.props.title}</h1>
      );
    }
  });

  return function (options) {
    var title = (options && options.title) || 'Hello World';

    return React.render(
      <HelloWorld title={title} />,
      document.getElementById('content')
    );
  }
});
