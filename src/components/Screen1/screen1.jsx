import React from "react";
import Navbar1 from "./navbar1";
import 'bootstrap/dist/css/bootstrap.min.css';
import Text2 from "./text2";
import Cards from "./cards"
import Help from "./help";
import Footer from "./footer"
import Mainlogo from "./mainlogo"

import "./screen1.css"

export default function screen1() {
  return (
    <>
      <Navbar1 />

      <section className="screen1">
        
      
      <Text2/>
       
        <Mainlogo/>
      </section>
      <section id="about">
      <Cards/>
      </section>
      <section id ="help">
        <Help/>
      <Footer/>
      </section>
    </>
  );
}
