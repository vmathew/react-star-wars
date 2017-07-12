import React, {Component} from 'react';

import Planet from './Planet';
import './PlanetList.css';

class PlanetList extends Component {

  render() {
    let planetItems;
    if(this.props.planets){
      planetItems = this.props.planets.map(planet => {
        return (
          <Planet key={planet.name} planet={planet}/>
        );
      });
    }

    return (
      <div className="PlanetList">
        <h4>Planets</h4>
        {planetItems}
      </div>
    );
  }
}

export default PlanetList;
