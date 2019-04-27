import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Array from './Array';
import Clock from './Clock';
import TodoList from './TodoList';

import './../common/css/reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <ul className='header'>
          <li>
            <Link to='/'>Array</Link>
          </li>
          <li>
            <Link to='/clock'>Clock</Link>
          </li>
          <li>
            <Link to='/todoList'>TodoList</Link>
          </li>
        </ul>
        <div className='main'>
          <Route exact path="/" component={Array} />
          <Route path="/clock" component={Clock} />
          <Route path="/todoList" component={TodoList} />
        </div>
      </Router>
    )
  }
}

export default App