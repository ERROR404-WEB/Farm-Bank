import React from "react";
import logo1 from "./images/logos/logoenw.png";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import "./screen1.css"
export default function navbar1() {



  return (

  

    <>
   
     <Navbar  className="navbar "   id="navbar"  expand="lg"  style={{position:"absolute",color:"white"}}>
     <Container fluid>
          <Navbar.Brand href="#home" >
            <img
              src={logo1}
              width="100px"
              className="d-inline-block align-top bg-opacity-10 navlogo"
              alt=" logo"
            />
             </Navbar.Brand>
             <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
         
          <Nav className="justify-content-end flex-grow-1  me-5" navbarScroll>
                  <Nav.Link href="#home"  style={{color:"white"}}><h6 className="navtext">Home</h6></Nav.Link>
                  <Nav.Link href="#about"  style={{color:"white"}}><h6 className="navtext">Services</h6></Nav.Link>
                  <Nav.Link href="#help"  style={{color:"white"}}><h6 className="navtext">Helpline</h6></Nav.Link>
                  <Nav.Link href="/signin"  style={{color:"white"}}><h6 className="navtext">Login</h6></Nav.Link>
                  </Nav>
                  </Navbar.Collapse>
                  </Container>
      </Navbar>

    </>
  );
}
