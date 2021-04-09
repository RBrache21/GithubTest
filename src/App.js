import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import './App.css';
import HomePage from './components/Home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './components/Users/UserList';
import UserView from './components/Users/UserView';
import UserRepos from './components/Users/UserRepos';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar/>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/users" component={UserList} />
        <Route exact path="/users/:username" component={UserView} />
        <Route exact path="/users/:username/repos" component={UserRepos} />
      </div>
    );
  }
}

export default App;
