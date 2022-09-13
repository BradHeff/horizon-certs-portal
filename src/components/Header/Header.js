import React from 'react';
import './header.css';
import {Navbar, Nav} from 'react-bootstrap';

import logo from '../../assets/images/logo11.png';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as Scroll from "react-scroll";
const Links = Scroll.Link;

const Header = (props) => {
  return (
      
    <Navbar collapseOnSelect expand="lg" className="titlebar px-3" variant="dark" sticky="top">
      <Navbar.Brand href="#home"><img src={logo} alt={logo} height={40} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto px-sm-3 px-lg-0">
        <Links
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav-link"
        >Home</Links>
          <Links
          to="buttons"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav-link"
        >Downloads</Links>

        <Links
          to="s2"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav-link"
        >Step 2</Links>
        <Links
          to="s3"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav-link"
        >Step 3</Links>
        {props.os === 0 ?
        <Links
          to="s4"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav-link"
        >Step 4</Links>
        :null}
        {props.os === 0 ?
        <Links
          to="s5"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav-link"
        >Step 5</Links>
        :null}
        {props.os === 0 ?
        <Links
          to="s6"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav-link"
        >Step 6</Links>
        
        :null}
        <Links
          to="finish"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav-link"
        >Finish</Links>      
        </Nav>        
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;