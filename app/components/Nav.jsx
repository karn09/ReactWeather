var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({

  render: function() {
    return (
      <div>
        <h3>Nav Component</h3>
        <Link to="/">Get Weather</Link>
        <Link to="/about">About</Link>
        <Link to="/examples">Examples</Link>
      </div>
    );
  }

});

module.exports = Nav;
