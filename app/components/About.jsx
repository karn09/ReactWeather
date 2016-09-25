var React = require('react');

var About = () => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>Weather App built for Complete React Web App Course</p>
      <p>Here are some of the tools used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - this was the JS framework used
        </li>
        <li>
          <a href="http://openweathermap.org">OpenWeatherMap</a> - used to search for weather data by city name
        </li>
      </ul>
    </div>
  );
}

module.exports = About;
