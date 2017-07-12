import React, { Component } from 'react';
import axios from 'axios';
import PlanetList from './Components/Planet/PlanetList';
import PeopleList from './Components/People/PeopleList';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {planets: [], peoples: []};
  }

  getInitialState() {
    return {
      planets: [],
      peoples: []
    }
  }

  componentDidMount() {
    console.log('componentDidMount()');
    let self = this;
    const planetUrl = "https://swapi.co/api/planets/";
    const peopleUrl = "https://swapi.co/api/people";
    //Planet Service
    axios.get(planetUrl)
    .then(function (response){
      // console.log("=========");
      // console.log(response);
      if(response.data.results){
        self.setState({
          planets: response.data.results
        });
      }
    })
    .catch(function (error){
      console.log(error);
    });

    //People Service
    axios.get(peopleUrl)
    .then(function (response){
      // console.log("=========");
      // console.log(response);
      if(response.data.results){
        self.setState({
          peoples: response.data.results
        });
      }
    })
    .catch(function (error){
      console.log(error);
    });

  }

  componentWillUnmount() {
    console.log('--> '+this.state.planets);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Star Wars</h2>
        </div>
        <div className="AppBody">
          <PlanetList planets={this.state.planets}/>
          <PeopleList peoples={this.state.peoples}/>
        </div>
      </div>
    );
  }
}

export default App;
