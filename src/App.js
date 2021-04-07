import React, { Component } from 'react';
import './App.css';
import UserTable from './components/UserTable';
import SearchBar from './components/SearchBar';
// import EnhancedTable from './components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { users } from './users';


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Github Project</h1>
        <SearchBar />
        <UserTable/>
      </div>
    );
  }
}

export default App;
