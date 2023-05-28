import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactComponent as CreateRoom } from './imgs/createRoomImg.svg';
import { ReactComponent as MonitorRoom } from './imgs/monitorRoomImg.svg';
import './Room.css';
import AddRoom from './AddRoom';
import ActiveRoom from './ActiveRoom';

function Room() {
  
  const addRooms = () => {
    const soul = ReactDOM.createRoot(document.getElementById('soul'));
    soul.render( <AddRoom /> );
  }
  
  const activeRooms = () => {
    const soul = ReactDOM.createRoot(document.getElementById('soul'));
    soul.render( <ActiveRoom /> );
  }

  return (
    <div className="backcolor">
    <div className="room">
        <figure onClick={addRooms}>
            <CreateRoom style={{width:"350px"}}/>
            <figcaption>
                <h3> Create your Room </h3>
                <p>Fill the data and place reasonable ask for bagging multiple offers</p>
            </figcaption>
        </figure>
        <figure onClick={activeRooms}>
            <MonitorRoom  style={{width:"350px"}}/>
            <figcaption> 
                <h3> Monitor your Room </h3> 
                <p>Select a rightful investor who can support you in many ways</p>
            </figcaption>
        </figure>
    </div>
    </div>
  )
}

export default Room