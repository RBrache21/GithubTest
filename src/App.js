import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
// import SearchBar from './components/SearchBar';
import HomePage from './components/Home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './components/Users/UserList';
import UserView from './components/Users/UserView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Github Project</h1>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/users" component={UserList} />
        <Route exact path="/users/:username" component={UserView} />
      </div>
    );
  }
}

export default App;
