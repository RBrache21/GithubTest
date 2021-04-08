import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import UserTable from './components/UserTable';
// import SearchBar from './components/SearchBar';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Github Project</h1>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/users' component={UserTable} />
      </div>
    );
  }
}

export default App;
