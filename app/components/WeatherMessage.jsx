var React = require('react');
var PropTypes = React.PropTypes;

var WeatherMessage = React.createClass({

  render: function() {
    var weather = this.props.weather;
    
    return (
      <div>
        <h3>Weather: {weather}</h3>
      </div>
    );
  }

});

module.exports = WeatherMessage;
