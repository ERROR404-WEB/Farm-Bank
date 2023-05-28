import React from 'react'
import { useState , useEffect} from 'react';
import axios from 'axios';



function RoomMessage(props) {

    const [roomMessages , setRoomMessages ] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:5000/room-message',{
            roomid : props.roomid
        }).then((res)=>{
            setRoomMessages(res.data);
        }).catch((err) => {
            console.log(err);
        })
    });







  return (
    <div >
    <h1>Farmer Details</h1>
        {roomMessages.map((val,index) => {
            return(
                <h2>{val.farmerName}</h2>
                )
        })}
    <hr />
    <h1>Offers</h1>
        {roomMessages.map((val,index) => {
            const investor = val.investor;
            if(investor.length===1){
                return(
                    <h2>No offers yet</h2>
                )
            }
            else {
                return (
                    investor.map((ival , index) => {
                        return (
                            <div>
                                <h2>{ival.name}</h2>
                                <h3>{ival.equity} % for Rs {ival.ask}</h3>
                            </div>
                        )
                    })
                )
            }
        })}
    </div>
  )
}

export default RoomMessage