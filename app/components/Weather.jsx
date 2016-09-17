var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      location: 'New York, NY',
      temp: 76
    }
  },
  handleSearch: function(location) {

    openWeatherMap.getTemp(location).then( (temp) => {
      this.setState({
        location: location,
        temp: temp
      });
    }, (errorMessage) => {
      alert(errorMessage)
    });
    
    // this.setState({
    //   location: location,
    //   temp: 23
    // })
  },
  render: function() {
    var {temp, location} = this.state;

    return (
      <div>
        <h2>Get Weather</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={location} temp={temp}/>
      </div>
    );
  }

});

module.exports = Weather;
