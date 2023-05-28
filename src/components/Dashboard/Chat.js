import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ReactComponent as ChatImg } from './imgs/ChatImg.svg';

export default function Chat() {
  const [user, setUser] = useState(null);
  let a = ["harsha", "revanth", "kiran", "arjun", "jahnavi"];
  const [text, setText] = useState("");
  const [arr, setArr] = useState(a);
  useEffect(() => {
    let t = a.filter(
      (item) => item.toLowerCase().lastIndexOf(text.toLowerCase()) > -1
    );
    setArr(t);
  }, [text]);
  function Fun1(x) {
    if (x === null) {
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
            backgroundImage: "linear-gradient(60deg,green,yellow)",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        ></div>
      );
    }
  }
  return (
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
          backgroundColor: "#2B7A0B",
        }}
      >
        <div
          style={{
            backgroundColor: "green",
            
            height: "5%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            alignContent: "center",
            display: "inline-flex",
          }}
        >
          
          <input
            type="text"
            style={{ height: "80%", width: "90%", borderRadius: "5px" }}
            placeholder="search by name"
            onChange={(e) => {
              setText(e.target.value);
              console.log(text);
            }}
          ></input>
        </div>
        <div
          style={{
            height: "100%",
            width: "30vw",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            alignContent: "center",
            overflow: "hidden",
            
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
                  height: "10%",
                  //borderWidth: "2px",
                  flexDirection: "row",
                  //borderStyle: "solid",
                  //margin: "2px",
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "#2B7A0B",
                  //borderRadius: "5px",
                  cursor: "pointer",
                  color:"white",
                }}
                onClick={(e) => {
                  //e.target.ref={temp};
                  //setArr(arr);
                  //e.target.style.backgroundColor="blue";
                }}
              >
                <img
                  src={
                    'https://p7.hiclipart.com/preview/782/114/405/5bbc3519d674c.jpg'
                  }
                  style={{
                    height: "8vh",
                    width: "8vh",
                    borderRadius: "50%",
                    borderStyle: "solid",
                    backgroundColor: "white",
                    marginRight: "1vw",
                  }}
                  alt="img"
                />
                <h1>{item}</h1>
              </div>
              <hr/>
              </div>
            );
          })}
        </div>
      </div>
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
    </div>
  );
}

