var React = require('react');
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      location: 'New York, NY',
      temp: 76
    }
  },
  handleSearch: function(location) {
    this.setState({
      location: location,
      temp: 23
    })
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
