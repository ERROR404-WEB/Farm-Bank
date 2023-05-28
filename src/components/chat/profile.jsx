import React from "react";
// import Img from './account.gif';

import "./profile.css";
export default function profile(props) {
  return (
    <>
      <div className="bodydiv">
        <div className="container">
          {/* <Img /> */}
          <img className="imgcontainer" src="https://thumbs.dreamstime.com/b/indian-farmer-holding-crop-plant-his-wheat-field-indian-farmer-holding-crop-plant-his-wheat-field-123557695.jpg"></img>
          <div className="detaildiv">
            <div className="f" classname="f1">
              <p>{props.name}</p>
            </div>
            <hr className="line" />
            <div className="f">
              <p>AGE:{props.age}</p>
            </div>
            <hr className="line" />
            <div className="f">
              <p>PHONE: {props.phone}</p>
            </div>
            <hr className="line" />
            <div className="f">
              <p>EXPERIENCE: {props.experience}</p>
            </div>
            <hr className="line" />
            <div className="f" classname="f2">
              <p>PROPERTY:{props.property}</p>
            </div>
          </div>
        </div>

        <div className="remaininginfo">
          <div className="box">
            <div className="headbox">
              <p className="headingg">BIDDING ROOMS</p>
            </div>
            <br />
            <p>LIVE ROOMS:0</p>
            <p>CLOSED ROOMS:3</p>
          </div>
          <div className="box">
            <div className="headbox">
              <p className="headingg">COLLABRATIONS</p>
            </div>
            <br />
            <p>collabrated with mani revanth</p>
          </div>
          <div className="box">
            <div className="headbox">
              <p className="headingg">EARNINGS</p>
            </div>
            <br />
            <p>LAST YEAR: ₹50000</p>
            <p>CURRENT YEAR:----</p>
          </div>
        </div>




        <div className="addpost">
          <div className="heading headbox">ADD POST</div>
          <center>
            <br/>
            <input type="file" className="postpic" title=""  />
            {/* <br />
            <br /> */}
            <input type="text"  className="postdesc inpu"  placeholder="Add Description" style={{textAlign:"center"}}/>
            
            
            <button className="btnn">Submit</button>
            <br />
            <br />
          </center>
        </div>

            <br/>

            <br/>
        <div className="heading">POSTS</div>
        <br/>
        <div className="posts">
          <div className="p1">
            <div className="images">
              <img
                src="https://media.istockphoto.com/photos/green-field-lined-by-trees-on-clear-day-picture-id113145561?k=20&m=113145561&s=612x612&w=0&h=FkjvoWj3uqf9zzU7oCRcTuEQ9OTilfkpqYhmHxEmWa4="
                className="postimg"
              />
            </div>
            <div className="content">This is my field</div>
          </div>
          <div className="p1">
            <div className="images">
              <img
                src="https://media.istockphoto.com/photos/green-field-lined-by-trees-on-clear-day-picture-id113145561?k=20&m=113145561&s=612x612&w=0&h=FkjvoWj3uqf9zzU7oCRcTuEQ9OTilfkpqYhmHxEmWa4="
                className="postimg"
              />
            </div>
            <div className="content">Greenary field</div>
          </div>
          <div className="p1">
            <div className="images">
              <img
                src="https://media.istockphoto.com/photos/green-field-lined-by-trees-on-clear-day-picture-id113145561?k=20&m=113145561&s=612x612&w=0&h=FkjvoWj3uqf9zzU7oCRcTuEQ9OTilfkpqYhmHxEmWa4="
                className="postimg"
              />
            </div>
            <div className="content">This is my field</div>
          </div>
          <div className="p1">
            <div className="images">
              <img
                src="https://media.istockphoto.com/photos/green-field-lined-by-trees-on-clear-day-picture-id113145561?k=20&m=113145561&s=612x612&w=0&h=FkjvoWj3uqf9zzU7oCRcTuEQ9OTilfkpqYhmHxEmWa4="
                className="postimg"
              />
            </div>
            <div className="content">Greenary field</div>
          </div>
          <div className="p1">
            <div className="images">
              <img
                src="https://media.istockphoto.com/photos/green-field-lined-by-trees-on-clear-day-picture-id113145561?k=20&m=113145561&s=612x612&w=0&h=FkjvoWj3uqf9zzU7oCRcTuEQ9OTilfkpqYhmHxEmWa4="
                className="postimg"
              />
            </div>
            <div className="content">This is my field</div>
          </div>
          <div className="p1">
            <div className="images">
              <img
                src="https://media.istockphoto.com/photos/green-field-lined-by-trees-on-clear-day-picture-id113145561?k=20&m=113145561&s=612x612&w=0&h=FkjvoWj3uqf9zzU7oCRcTuEQ9OTilfkpqYhmHxEmWa4="
                className="postimg"
              />
            </div>
            <div className="content">Greenary field</div>
          </div>
        </div>
      </div>
    </>
  );
}

profile.defaultProps = {
  name: "Username",
  age: " YEARS",
  phone: "0000000000",
  experience: "YEARS",
  property: "ACRES",
};
