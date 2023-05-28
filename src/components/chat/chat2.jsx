import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
// import SearchBar from "material-ui-search-bar";
//import Signin_page from "./signin_screen";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactComponent as ChatImg } from "./account.gif";
import "./chat.css";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

/* Fun1(props) {
  useEffect(() => {}, []);
  let messages = {
    arjun: [
      {
        name: "arjun",
        message: "how's the work going on , can we expect profits ?",
      },
      {
        name: "you",
        meaasge: "the work is great , we can except good profits .",
      },
      {
        name: "arjun",
        message:
          "ho that sounds great , continue with your work . ask me if any help required",
      },
      {
        name: "you",
        message: "ok ill inform you later",
      },
    ],
    revanth: [
      {
        name: "arjun",
        message: "how's the work going on , can we expect profits ?",
      },
      {
        name: "you",
        meaasge: "the work is great , we can except good profits .",
      },
      {
        name: "arjun",
        message:
          "ho that sounds great , continue with your work . ask me if any help required",
      },
      {
        name: "you",
        message: "ok ill inform you later",
      },
    ],
    kiran: [
      {
        name: "arjun",
        message: "how's the work going on , can we expect profits ?",
      },
      {
        name: "you",
        meaasge: "the work is great , we can except good profits .",
      },
      {
        name: "arjun",
        message:
          "ho that sounds great , continue with your work . ask me if any help required",
      },
      {
        name: "you",
        message: "ok ill inform you later",
      },
    ],
    harsha: [],
    jahnavi: [],
  };
  if (props.x === null) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage:"radial-gradient(white,lightgreen)",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ width: "50%", height: "50%" ,textAlign:'center',justifyContent:'center',alignItems:'center' }}>
          <ChatImg 
            style={{width : "20em" , height : "20em" , marginLeft : "20em", marginTop : "5em"}}
          />
          <p style={{marginLeft : "25em"}}>Chat here</p>
          
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: "linear-graduent(60deg,green,yellow)",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      ></div>
    );
  }
}*/
function Fun() {
  const [user, setUser] = useState(null);
  let a = ["Harsha", "Revanth", "Kiran", "Arjun", "Jahnavi"];
  const [text, setText] = useState("");
  const [arr, setArr] = useState(a);
  const temp = useRef(null);
  
  useEffect(() => {
    let t = a.filter(
      (item) => item.toLowerCase().lastIndexOf(text.toLowerCase()) > -1
    );
    setArr(t);
  }, [text]);
  return (
    <div className="Mainbody">
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
        display: "inline-flex",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100vh",
          width: "30vw",
          backgroundImage: "radial-gradient(white,rgba(0, 255, 255, 0.300))",
          boxShadow:"0px 0px 8px rgba(0,0,0,0.300)",
    
          //borderWidth: "2px",
          //borderStyle: "solid",
          // backgroundColor: "#2B7A0B",
          //  backgroundImage: "linear-gradient(60deg,black,blue)",
        }}
      >
        <div
          style={{
            // backgroundColor: "green",
           //search box div
            height: "5%",
            width: "100%",
            margin: "20px 0px 10px 0px",
            
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            alignContent: "center",
            display: "inline-flex",
          }}
        >
          <form>
            <TextField
              id="search-bar"
              className="text searchb"
              onChange={(e) => {
                setText(e.target.value);
                console.log(text);
              }}
              label="Search"
              variant="outlined"
              // placeholder="Search..."
              size="small"
              style={{
                boxShadow:"0px 0px 10px rgba(0,0,0,0.100)",
                backgroundImage:
                  "radial-gradient(white,rgba(165, 255, 165, 0.342))",
                 
              }}
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon style={{ fill: "black" }} />
            </IconButton>
           
          </form>
          <hr/>
        </div>
        <div
          style={{
            height: "100%",
            width: "30vw",
            
            overflow: "scroll",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            alignContent: "center",
            marginTop: "30px",
           //list box
            // backgroundImage: "radial-gradient(white,rgba(0, 255, 255, 0.300))",
            // backgroundImage: "linear-gradient(60deg,black,blue)",
          }}
        >
          {arr.map((item, index) => {
            return (
              <div>
                <div
                  key={index.toString()}
                  style={{
                    
                    width: "90%",

                    // height: "10%",
                    //borderWidth: "2px",
                    flexDirection: "row",
                    //borderStyle: "solid",
                    //margin: "2px",
                   
                    display: "inline-flex",
                    alignItems: "center",
                    // backgroundColor: "#2B7A0B",

                    //borderRadius: "5px",
                    cursor: "pointer",
                    color: "white",
                  }}
                  onClick={(e) => {
                    //e.target.ref={temp};
                    //setArr(arr);
                    //e.target.style.backgroundColor="blue";
                  }}
                >
                  <img
                    src={
                      "https://p7.hiclipart.com/preview/782/114/405/5bbc3519d674c.jpg"
                    }
                    style={{
                      height: "7vh",
                      width: "7vh",
                      borderRadius: "50%",
                      // borderStyle: "solid",
                      // backgroundColor: "black",
                      // backgroundColor: "white",
                      marginRight: "1vw",
                      marginLeft: "1vw",
                    }}
                  ></img>
                  <h5 style={{ fontWeight: "lighter" }}>{item}</h5>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: "radial-gradient(white,rgba(165, 255, 165, 0.300))",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            // width: "50%",
            // height: "50%",
            // textAlign: "center",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          {/* <ChatImg 
            style={{width : "20em" , height : "20em" , marginLeft : "20em", marginTop : "5em"}}
          /> */}
          <div
            style={{
              height: "90vh",
            }}
          ></div>
          <form>
            <TextField
              id="search-bar"
              className="text "
              
              label="Message"
              variant="outlined"
              // placeholder="Message"
              size="small"
              style={{
                width: "60vw",
                boxShadow:"0px 0px 10px rgba(0,0,0,0.100)",
                display: "inline-flex",
                backgroundImage:
                  "radial-gradient(white,rgba(165, 255, 165, 0.342))",
              }}
            />
          
            <IconButton type="submit" aria-label="search">
              <SendIcon style={{ fill: "black", display: "inline" }} />
            </IconButton>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Fun;
