import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Investor from "./images/investor.png";
import Farmer from "./images/farmer.png";
// import "../src/App.css"
import "./signin.css";
import bg1 from "./images/bgsign2.jpg";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Navbarsign from "./navbarsign"
export default function Signin_page() {
  const navigate = useNavigate();
  const Login = () => {
    navigate("/login");
  };

  const image_div = useRef(null);
  const login_div = useRef(null);
  //const inv_image_div = useRef(null);
  const [state, setState] = useState("farmer");
  const [x, setX] = useState(1);
  //const [is_otp, setIs_otp] = useState(0);
  const phone = useRef(null);
  const pass = useRef(null);
  const bt = useRef(null);
  const conf_pass = useRef(null);
  const name = useRef(null);
  //const [timer, setTimer] = useState(30);
  //const a = useRef(null);
  //const b = useRef(null);
  //const c = useRef(null);
  //const d = useRef(null);
  const k = useRef(null);
  //const e = useRef(null);
  const gender = useRef(null);
  const living_state = useRef(null);
  const living_city = useRef(null);
  const address = useRef(null);
  const adhaar = useRef(null);
  /*let name_value="";
  let phone_value="";
  let password_value="";
  let conf_pass_value="";
  let gender_value="";
  let living_city_value="";
  let living_state_value="";
  let address_value="";
  let adhaar_value="";*/
  const [name_value, set_name_value] = useState("");
  const [phone_value, set_phone_value] = useState("");
  const [password_value, set_password_value] = useState("");
  const [conf_pass_value, set_conf_pass_value] = useState("");
  const [gender_value, set_gender_value] = useState("");
  const [living_city_value, set_living_city_value] = useState("");
  const [living_state_value, set_living_state_value] = useState("");
  const [address_value, set_address_value] = useState("");
  const [adhaar_value, set_adhaar_value] = useState("");
  useEffect(() => {
    phone.current.focus();
  }, [x]);
  function send_data_to_server() {
    console.log(
      name_value +
        "\n" +
        phone_value +
        "\n" +
        password_value +
        "\n" +
        conf_pass_value +
        "\n" +
        gender_value +
        "\n" +
        living_city_value +
        "\n" +
        living_state_value +
        "\n" +
        address_value +
        "\n" +
        adhaar_value
    );
    if (state === "farmer") {
      if (
        name_value !== "" &&
        phone_value.length === 10 &&
        password_value !== "" &&
        conf_pass_value !== "" &&
        gender_value !== "" &&
        living_city_value !== "" &&
        living_state_value !== "" &&
        address_value !== "" &&
        adhaar_value.length === 12
      ) {
        axios
          .post("http://localhost:5000/get_farmers", { adhaar: adhaar_value })
          .then((res) => {
            if (res.data.length === 0) {
              axios
                .post("http://localhost:5000", {
                  name: name_value,
                  phone: phone_value,
                  password: password_value,
                  adhaar: adhaar_value,
                  state: living_state_value,
                  city: living_city_value,
                  street: address_value,
                })
                .then((res) => {
                  if (res.status === 200)
                    alert("you have registered suceesfully now");
                  else alert("something went wrong , please try again later");
                });
            } else alert("oops the adhaar was already registered");
          });
      } else {
        alert(
          name_value +
            "\n" +
            phone_value +
            "\n" +
            password_value +
            "\n" +
            conf_pass_value +
            "\n" +
            gender_value +
            "\n" +
            living_city_value +
            "\n" +
            living_state_value +
            "\n" +
            address_value +
            "\n" +
            adhaar_value
        );
      }
    } else {
      if (
        name_value !== "" &&
        phone_value.length === 10 &&
        password_value !== "" &&
        conf_pass_value !== "" &&
        gender_value !== "" &&
        living_city_value !== "" &&
        living_state_value !== "" &&
        address_value !== "" &&
        adhaar_value.length === 12
      ) {
        axios
          .post("http://localhost:5000/get_investors", { adhaar: adhaar_value })
          .then((res) => {
            if (res.data.length === 0) {
              axios
                .post("http://localhost:5000/investors", {
                  name: name_value,
                  phone: phone_value,
                  password: password_value,
                  adhaar: adhaar_value,
                  state: living_state_value,
                  city: living_city_value,
                  street: address_value,
                })
                .then((res) => {
                  if (res.status === 200)
                    alert("you have registered suceesfully now");
                  else alert("oops something went wrong");
                });
            } else alert("oops the adhaar was already registered");
          });
      } else {
        alert(
          "make sure you entered valid details and all the fields are given"
        );
      }
    }
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
     <Navbarsign/>
    
    <div
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
        style={{
          //box

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
            src={Farmer}
            alt="image not loaded"
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
            <h3>SignUp</h3>
            <input
              className="inputt"
              placeholder="phone number"
              type="text"
              ref={phone}
              style={{ height: "3vh", width: "14vw", display: "block" }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  //phone_value=e.target.value;
                  console.log(phone_value);
                  name.current.focus();
                }
              }}
              onChange={(e) => {
                set_phone_value(e.target.value);
                //name.current.focus();
              }}
            />

            <input
              className="inputt"
              placeholder="name"
              ref={name}
              type="text"
              style={{ height: "3vh", width: "14vw", display: "block" }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  //name_value=e.target.value;
                  console.log(name_value);
                  pass.current.focus();
                }
              }}
              onChange={(e) => {
                set_name_value(e.target.value);
                //pass.current.focus();
              }}
            />

            <input
              className="inputt"
              placeholder="Password"
              ref={pass}
              type="password"
              style={{ height: "3vh", width: "14vw", display: "block" }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  //password_value=e.target.value;
                  console.log(password_value);
                  conf_pass.current.focus();
                }
              }}
              onChange={(e) => {
                set_password_value(e.target.value);
                //conf_pass.current.focus();
              }}
            />

            <input
              className="inputt"
              ref={conf_pass}
              placeholder="Confirm Password"
              type="password"
              style={{ height: "3vh", width: "14vw", display: "block" }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  //conf_pass_value=e.target.value;
                  console.log(conf_pass_value);
                  gender.current.focus();
                }
              }}
              onChange={(e) => {
                set_conf_pass_value(e.target.value);
                //gender.current.focus();
              }}
            />

            <input
              className="inputt"
              placeholder="gender"
              type="text"
              ref={gender}
              style={{ height: "3vh", width: "14vw", display: "block" }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  //gender_value=e.target.value;
                  console.log(gender_value);
                  living_state.current.focus();
                }
              }}
              onChange={(e) => {
                set_gender_value(e.target.value);
                //living_state.current.focus();
              }}
            />

            <input
              className="inputt"
              placeholder="state"
              type="text"
              ref={living_state}
              style={{ height: "3vh", width: "14vw", display: "block" }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  //living_city_value=e.target.value;
                  console.log(living_state_value);
                  living_city.current.focus();
                }
              }}
              onChange={(e) => {
                set_living_state_value(e.target.value);
                //living_city.current.focus();
              }}
            />

            <input
              className="inputt"
              placeholder="city"
              type="text"
              ref={living_city}
              style={{ height: "3vh", width: "14vw", display: "block" }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  //living_state_value=e.target.value;
                  console.log(living_city_value);
                  address.current.focus();
                }
              }}
              onChange={(e) => {
                set_living_city_value(e.target.value);
                //address.current.focus();
              }}
            />

            <input
              className="inputt"
              placeholder="address"
              type="text"
              ref={address}
              style={{ height: "3vh", width: "14vw", display: "block" }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  //address_value=e.target.value;
                  console.log(address_value);
                  adhaar.current.focus();
                }
              }}
              onChange={(e) => {
                set_address_value(e.target.value);
                //adhaar.current.focus();
              }}
            />

            <input
              className="inputt"
              placeholder="adhaar number"
              type="text"
              ref={adhaar}
              style={{ height: "3vh", width: "14vw", display: "block" }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  //adhaar_value=e.target.value;
                  console.log(adhaar_value);
                  bt.current.focus();
                }
              }}
              onChange={(e) => {
                set_adhaar_value(e.target.value);
                //bt.current.focus();
              }}
            />
          </div>
          <button
            className="confirmbtn"
            style={{ cursor: "pointer", width: "30%" }}
            onClick={Login}
          >
            Already Have an Account?
          </button>
          <br />

          <br />
          <button
            ref={bt}
            className="confirmbtn"
            style={{ cursor: "pointer" }}
            onClick={() => {
              send_data_to_server();
            }}
          >
            Confirm
          </button>
          <br />
          <br />
          <p
            style={{
              textDecoration: "underline",
              color: "darkblue",
              cursor: "pointer",
            }}
            onClick={() => {
              if (state === "farmer") {
                login_div.current.className = "Animations_1";
                image_div.current.style.width = "0%";
                setTimeout(() => {
                  setX(x + 1);
                }, 500);
              } else {
                setX(x + 1);
                login_div.current.className = "Animations_2";
                setTimeout(() => {
                  login_div.current.style.color = "green";
                  image_div.current.style.width = "50%";
                }, 500);
              }
              name.current.value = "";
              pass.current.value = "";
              setState(state === "farmer" ? "investor" : "farmer");
            }}
          >
            {state === "farmer" ? "investor sign-up ?" : "farmer sign-up ?"}
          </p>
        </div>
        {x % 2 ? null : (
          <div
            style={{
              display: "flex",
              width: "50%",
              height: "100%",
              borderRadius: "10px",
            }}
          >
            <img src={Investor} height={"100%"} width={"100%"}></img>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
//ReactDOM.render(<Signin_page />, document.getElementById("root"));
