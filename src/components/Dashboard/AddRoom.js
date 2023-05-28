import React from 'react'
import { useState } from 'react';
import { Input , Button } from 'antd';
import axios from 'axios';
import './AddRoom.css';
import {ReactComponent as AskImg} from './imgs/AskImg.svg';



function AddRoom(props) {

  const [ equity , setEquity ] = useState('');
  const [ ask , setAsk ] = useState('');
  const [ crop , setCrop ] = useState('');



  const handleCreateRoom = () => {
    axios.post('http://localhost:5000/create-room',{
      adhaar : '123456123456',
      name : 'Harsha',
      crop : crop ,
      equity : equity ,
      ask : ask
    }).then((res) => {
      alert('Created Successfully');
    });
    setEquity('');
    setAsk('');
    setCrop('');
  }

  return (
    <>
      <h1 className="head">Create room and stand a chance to win investment</h1>
      <div style={{ margin: "2.25em 4rem" , display : 'flex' }}>
        <div>
          <AskImg />
        </div>
        <div>
          <Input placeholder='Crop' onChange={(event)=> { setCrop(event.target.value); }} value={crop} addonBefore="Type" />
          &nbsp;
          <Input placeholder='Equity' onChange={(event)=> { setEquity(event.target.value); }} value={equity} addonAfter="%" />
          &nbsp;
          <Input placeholder='Ask' onChange={(event)=> { setAsk(event.target.value); }} value={ask} addonBefore="Rs" />
          <br />
          <br />
          <Button type='primary' onClick={handleCreateRoom} > Create Room </Button>
        </div>
        
      </div>
    </>
  )
}

export default AddRoom