import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Investor from "./images/investor.png"
import Farmer from "./images/farmer.png"
import "./signin.css"
import bg1 from "./images/bgsign2.jpg"
import axios from "axios";
import Navbarlog from "./navbarlog"
import {Navigate, useNavigate} from 'react-router-dom';

export default function Login_page() {

    const navigate = useNavigate();
const Signin = ()=>{
  navigate("/signin");
}
  const image_div = useRef(null);
  const login_div = useRef(null);
  const inv_image_div = useRef(null);
  const [state, setState] = useState("farmer");
  const [x, setX] = useState(1);
  const [adhar_value,set_adhaar_value]=useState("");
  const [password_value,set_password_value]=useState("");
 // const [is_otp, setIs_otp] = useState(0);
  const a=useRef(null);
  const b=useRef(null);
  const bt=useRef(null);
  const k=useRef(null);
  useEffect(() => {
    a.current.focus();
  }, [x]);
  function send_data_to_server()
  {
    if(adhar_value.length==12 && password_value!="")
    {
        axios.post(`http://localhost:5000/get_${state}s`,{adhaar:adhar_value}).then((res)=>{
            if((res.data).length==1)
            {
                if((res.data)[0].password == password_value)
                alert("great you have logged in");
            }
            else
            alert("your entered adhar is wrong");
        })
    }
    else
    alert("please enter the valid details and make sure all the fields are given");
  }
  /*function Otp_screen() {
    useEffect(() => {
      a.current.focus();
    }, []);
    return (
      <div>
        <div
          style={{
            width: "100%",
            height: "5vh",
            flexDirection: "row",
            marginTop: "30%",
          }}
        >
          <input className="inputt"
            ref={a}
            style={{
              width: "2vw",
              margin: "1vw",
              height: "100%",
              fontSize: "larger",
              textAlign: "center",
              backgroundColor: "#B958A5",
              borderWidth: "2px",
            }}
            maxLength="1"
            onKeyUp={() => {
              b.current.focus();
            }}
          />
          <input className="inputt"
            ref={b}
            style={{
              width: "2vw",
              margin: "1vw",
              height: "100%",
              fontSize: "larger",
              textAlign: "center",
              backgroundColor: "#B958A5",
              borderWidth: "2px",
            }}
            maxLength="1"
            onKeyUp={() => {
              c.current.focus();
            }}
          />
          <input className="inputt"
            ref={c}
            style={{
              width: "2vw",
              margin: "1vw",
              height: "100%",
              fontSize: "larger",
              textAlign: "center",
              backgroundColor: "#B958A5",
              borderWidth: "2px",
            }}
            maxLength="1"
            onKeyUp={() => {
              d.current.focus();
            }}
          />
          <input className="inputt"
            ref={d}
            style={{
              width: "2vw",
              margin: "1vw",
              height: "100%",
              fontSize: "larger",
              textAlign: "center",
              backgroundColor: "#B958A5",
              borderWidth: "2px",
            }}
            maxLength="1"
            onKeyUp={() => {
              e.current.focus();
            }}
          />
        </div>
        <button
          ref={e}
          style={{
            backgroundColor: "grey",
            height: "5vh",
            width: "10vw",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "5vh",
          }}
          onClick={() => {}}
        >
          verify otp
        </button>
      </div>
    );
  }*/
  return (
    <>
    <Navbarlog/>
    <div
    className="loginmain"
      style={{  
        //background
        display: "flex",
        
        flex: 1,
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div
        className="outer_div"
        ref={k}
        style={{   //box
          
          height: "80%",
          width: "60%", 
          // backgroundColor: "#3D8361",
          borderRadius: "10px",
          display: "inline-flex",
        }}
      >
        <div
          ref={image_div}
          style={{
            display: "flex", 
            width: "50%",
            height: "100%",
            borderRadius: "10px",
            
          }}
        >
          <img
            src={
              Farmer
            }
            height={"100%"}
            width={"100%"}
          ></img>
        </div>
        <div
          className="innerdivbg"
          ref={login_div}
          style={{
            display: "block",
            flexDirection: "column",
            // backgroundColor: "blue", 
           
            width: "50%",
            height: "100%",
            borderRadius: "10px",
            alignItems: "center",
            justifyContent: "space-around",
            overflow: "scroll",
          }}
        >

              <div className="centerr">
              
              <h3>LogIn</h3>
            
              <input className="inputt"
                placeholder="adhaar"
                ref={a}
                type="text"
                style={{ height: "3vh", width: "14vw",display:"block" }}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                  //name_value=e.target.value;
                  //console.log(name_value);
                  //console.log(adhar_value);
                  b.current.focus();}
                }}
                onChange={(e)=>{
                    set_adhaar_value(e.target.value);
                    //console.log(adhar_value);
                  //set_name_value(e.target.value);
                  //pass.current.focus();
                }}
              />
              <input className="inputt"
              placeholder="Password"
                ref={b}
                type="password"
                style={{ height: "3vh", width: "14vw" ,display:"block" }}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                  //password_value=e.target.value;
                  //console.log(password_value);
                  bt.current.focus();}
                }}
                onChange={(e)=>{
                    set_password_value(e.target.value);
                    //console.log(password_value);
                  //set_password_value(e.target.value);
                  //conf_pass.current.focus();
                }}
              />
              </div>
              <button className="confirmbtn"
                style={{cursor: "pointer",width: "30%",}} onClick={Signin}>New Here?</button>
                <br/>

                <br/>
              <button
                ref={bt}
                className="confirmbtn"
                style={{cursor: "pointer",}}
                onClick={() => {
                  send_data_to_server();
                  //console.log(name_value+"\n"+phone_value+"\n"+password_value+"\n"+conf_pass_value+"\n"+gender_value+"\n"+living_city_value+"\n"+living_state_value+"\n"+address_value+"\n");
                }}>
                Confirm
              </button>
              <br />
             <br/>
              <p
                style={{textDecoration: "underline",color: "darkblue",cursor: "pointer",}}
                onClick={() => {
                 
            if(state=="farmer")
            {
            login_div.current.className="Animations_1";
            image_div.current.style.width="0%";
            setTimeout(()=>{setX(x+1)},499);
            }
            else{
              setX(x+1);
              login_div.current.className="Animations_2";
              setTimeout(()=>{login_div.current.style.color="green";image_div.current.style.width="50%"},498);
            }
            a.current.value="";
            b.current.value="";
            setState((state=="farmer")?"investor":"farmer");
           }}>
                {state == "farmer" ? "investor Log-in ?" : "farmer Log-in ?"}
              </p>
        </div>
        {x % 2 ? null : (
          <div
            style={{
              display: "flex",width: "50%",height: "100%",borderRadius: "10px",}}>
            <img src={Investor} height={"100%"} width={"100%"}></img>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
//ReactDOM.render(<Signin_page />, document.getElementById("root"));
