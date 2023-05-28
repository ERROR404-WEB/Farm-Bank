import React from 'react'
import { useState , useEffect } from 'react';
import ReactDOM from 'react-dom';
// import { Button } from 'antd';
import axios from 'axios';
import './ActiveRoom.css';
import {ReactComponent as SelectImg } from './imgs/SelectImg.svg';
import RoomMessage from './RoomMessage';

function ActiveRoom(props) {



  const [rooms , setRooms] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:5000/view-rooms',{
      adhaar:'123456123456',
      name : 'Harsha'
    }).then((response) => {
      setRooms(response.data);
    }).catch((error) => {
      console.log(error);
    })
  })


  const displayRoomDetails = (id) => {
    ReactDOM.render(<RoomMessage roomid={id}/> , document.getElementById('board'))
  }

  return (
    <>
      <h3 className="head" style={{ position : "fixed" , backgroundColor : "#f3f3f3", width:"80vw"}}>Monitor all offers and select a rightful investor</h3>
      <div style={{ margin: "0 2.25em " , marginTop: "7rem", display : 'flex'}}>
        
        <div style={{ padding: "2rem" }}>
          
          {rooms.map((room,index) => {
            return(
              <div className='rooms' onClick={()=>{displayRoomDetails(room._id)}}>
                <h1>{room.crop}</h1>
                <h2>{room.equity} % for Rs {room.ask}</h2>
              </div>
            )
          })}
          
        </div>
        <div id='board' style={{ boxShadow : "0 0 10px rgba(0,0,0,0.3)" , height: "80vh", position : "fixed" , marginLeft: "30rem", width: "42vw"  , overflow: "scroll" , padding:"5rem" , borderRadius : "1rem"}}>
          <SelectImg style={{ width:"35vw" , height: "30rem " , position : "fixed" }}/>
        </div>
        
      </div>
    </>
  )
}

export default ActiveRoom