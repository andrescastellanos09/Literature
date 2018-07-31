// export default HeaderNavigation;
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from './literature.jpg'


class HeaderNavigation extends Component{

  render(){
    return(
      <Navbar href="/">
      <NavbarBrand>
        <img alt="" src={logo} />
      </NavbarBrand>
      </Navbar>
    );
  }

}

export default HeaderNavigation;