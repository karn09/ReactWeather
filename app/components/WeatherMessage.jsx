var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h3 className="text-center">In {location} it is {temp}</h3>
    </div>
  );
}

module.exports = WeatherMessage;
