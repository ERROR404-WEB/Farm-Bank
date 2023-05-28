import logo1 from "./images/logos/logoenww.png";
import logo2 from "./images/logos/logohiw.png";
import logo3 from "./images/logos/logotew.png";
import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "bootstrap";
import {Navigate, useNavigate} from 'react-router-dom';

export default function Mainlogo() {

const navigate = useNavigate();
const Signin = ()=>{
  navigate("/signin");
}
  return (
    <>
    <div className="mainlogo">
      
      <Carousel interval={2000} controls={false} indicators={false} pause={false} >
        <Carousel.Item >
          <img className="d-block  a" src={logo1} alt="First slide" width={"400px"}/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block  a" src={logo2} alt="Second slide" width={"400px"}/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block  a" src={logo3} alt="Third slide" width={"400px"} />
        </Carousel.Item>
      </Carousel>
    </div>
    <div className="getting">
      
      <button className="getbtn" onClick={Signin}>Getting Started</button>

    </div>
    </>
  );
}
