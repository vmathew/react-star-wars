import React, {Component} from 'react';

import People from './People';
// import './PeopleList.css';

class PeopleList extends Component {

  render() {
    let peopleList;
    if(this.props.peoples){
      peopleList = this.props.peoples.map(people => {
        return (
          <People key={people.name} people={people}/>
        );
      });
    }

    return (
      <div className="PeopleList">
        <h4>Peoples</h4>
        {peopleList}
      </div>
    );
  }
}

export default PeopleList;
