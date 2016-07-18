import React from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

export default class TopNav extends React.Component {
  constructor(props, context) {
    super(props)
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
            <Link className="navbar-brand" to={'/'}>Tic Tac Toe</Link>
        </Navbar.Header>

        <Navbar.Collapse>
            <Nav>
              <NavItem href="/">
                Home
              </NavItem>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
