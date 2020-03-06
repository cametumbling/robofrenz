import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/searchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { this.setState({ robots: users })});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })

  }

  render() {
    //if you didn't have the following line, you'd need to write this.state in front of the terms in the brackets. but here we have *destructured*
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ? <h1>Loading...</h1> :
   (
      <div className = 'tc'>
        <h1 className='f1'>RoboFrenz</h1>
        <SearchBox searchChange = { this.onSearchChange }/>
        <Scroll>
          <CardList robots={ filteredRobots }/>
        </Scroll>
      </div>
    );
  }
}


export default App;