var React = require('react');
var PropTypes = React.PropTypes;

var WeatherMessage = React.createClass({

  render: function() {
    var {temp, location} = this.props;
    
    return (
      <div>
        <h3>In {location} it is {temp}</h3>
      </div>
    );
  }

});

module.exports = WeatherMessage;
