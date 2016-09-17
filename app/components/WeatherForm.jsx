var React = require('react');
var PropTypes = React.PropTypes;

var WeatherForm = React.createClass({
  onFormSubmit: function () {

  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="location" placeholder="Enter location"></input>
        </div>
        <div>
          <button>Get Weather</button>
        </div>
      </form>
    );
  }

});

module.exports = WeatherForm;
