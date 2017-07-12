import React, {Component} from 'react';
import './People.css';
class People extends Component {

  render() {
    return (
      <div className="People">
        <p> Name: {this.props.people.name} </p>
        <p> Gender: {this.props.people.gender} </p>
        <p> Birth Year: {this.props.people.birth_year} </p>
      </div>
    );
  }
}

export default People;
