var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h3>In {location} it is {temp}</h3>
    </div>
  );
}

module.exports = WeatherMessage;
