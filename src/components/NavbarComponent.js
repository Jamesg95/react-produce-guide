import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class NavbarComponent extends Component {

  constructor(props) {
    super(props)
    
    this.toggleNavbar=this.toggleNavbar.bind(this);

    this.state = {
      isNavOpen: false
    }
  }

  toggleNavbar() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }
  render() {
    return (
        <Navbar sticky='top' light expand='md'>
          <NavbarBrand href="/">J. Grigoras Farms</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar className='ml-auto'>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/produce">Produce</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default NavbarComponent;