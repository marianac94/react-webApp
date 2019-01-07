import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { Menu, Segment } from 'semantic-ui-react';

import Home from './Container/Home'
import About from './Container/About'
import Contact from './Container/Contact'



class App extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ name })

  render() {
    const { activeItem } = this.state

    return (
    <div>
      <h1>welcome to my page</h1>

    <Segment inverted>
      <Menu inverted pointing secondary>

        <Menu.Item
          name='Home'
          href="/"
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name='About'
          href="/about"
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name='Contact'
          href="/contact"
          active={activeItem === 'Contact'}
          onClick={this.handleItemClick}
        />

      </Menu>
    </Segment>

    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>

    </div>
    );
  }
}

export default App;
