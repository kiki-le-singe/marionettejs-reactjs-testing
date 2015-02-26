/** @jsx React.DOM */

define([
  'react'
],

function (React) {
  'use strict';

  var HelloWorld = React.createClass({
    render: function () {
      return (
        <h1>Hello world</h1>
      );
    }
  });

  return React.render(
    <HelloWorld />,
    document.getElementById('content')
  );
});
