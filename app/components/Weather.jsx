var React = require('react');
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');

var Weather = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Get Weather</h2>
        <WeatherForm />
        <WeatherMessage weather='someting'/>
      </div>
    );
  }

});

module.exports = Weather;
