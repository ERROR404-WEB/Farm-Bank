import React from "react";
import "./signin.css"
import logo1 from "./images/logoen.png";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Signin_page from "./signin"

export default function navbarsign() {



  return (

    <>   
     <Navbar  className="navbar bgg bg-light"   id="navbar"  expand="lg" >
     <Container fluid>
          <Navbar.Brand href="#home" >
            <img
              src={logo1}
              width="50px"
              className="d-inline-block align-top bg-opacity-10 navlogo"
              alt=" logo"
            />
             </Navbar.Brand>
             <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
         
          <Nav className="justify-content-end flex-grow-1  me-5" navbarScroll>
          <Nav.Link href="/"  ><h6 className="navtext" style={{color:"black"}}>Home</h6></Nav.Link>
                  <Nav.Link href="/login"  style={{color:"black"}} ><h6 style={{color:"black"}}className="navtext">Login</h6></Nav.Link>
                  {/* <Nav.Link href="#about" ><h6 className="navtext">Services</h6></Nav.Link>
                  <Nav.Link href="#help" ><h6 className="navtext">Helpline</h6></Nav.Link>
                  <Nav.Link href="/signin" ><h6 className="navtext">Login</h6></Nav.Link> */}
                  </Nav>
                  </Navbar.Collapse>
                  </Container>
      </Navbar>

    </>
  );
}
