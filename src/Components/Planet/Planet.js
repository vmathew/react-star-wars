import React, {Component} from 'react';
import './Planet.css';

class Planet extends Component {

  render() {
    return (
      <div className="Planet">
        <p> Planet Name: {this.props.planet.name} </p>
        <p> Rotation Period: {this.props.planet.rotation_period} </p>
        <p> Population: {this.props.planet.population} </p>
      </div>
    );
  }
}

export default Planet;
