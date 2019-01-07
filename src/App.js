import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

import Home from './Container/Home'
import About from './Container/About'
import Contact from './Container/Contact'


const MainMenu = () => {
  return (
  <div className="m-link">
    <NavItem>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </NavItem>
  </div>
  );
};

class App extends Component {
  render() {
    return (
    <div>
      <h1>welcome to my page</h1>

      <Router>
      <main>
        <MainMenu />
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
      </main>
      </Router>

    </div>
    );
  }
}

export default App;
