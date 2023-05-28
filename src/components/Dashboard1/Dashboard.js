import { Layout, Menu } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import Room from './Room';
import Profile from './Profile';
import Chat from './Chat';
import History from './History';
import Logout from './Logout';
import './Dashboard.css';


import 'antd/dist/antd.css';
const { Sider } = Layout; 

const Dashboard = () => {

  const displayRooms = ()=> {
    const soul = ReactDOM.createRoot(document.getElementById('soul'));
    soul.render( <Room /> );   
  }

  const displayProfile = () => {
    const soul = ReactDOM.createRoot(document.getElementById('soul'));
    soul.render( <Profile /> );
  }

  const displayChat = () => {
    const soul = ReactDOM.createRoot(document.getElementById('soul'));
    soul.render( <Chat /> );
  }

  const displayHistory = () => {
    const soul = ReactDOM.createRoot(document.getElementById('soul'));
    soul.render( <History /> );
  } 

  const displayLogout = () =>{
    const soul = ReactDOM.createRoot(document.getElementById('soul'));
    soul.render( <Logout /> );
  }
  
  return (
    <Layout >
      <Sider  style={{ backgroundColor: "#7DCE13" }}>
        <Menu
          theme="dark"
          mode="inline"
          style={{ backgroundColor: "#7DCE13" }}
          // defaultSelectedKeys={['100']}
          items={[
            {
              key: '100',
              label: 'Profile',
              onClick : () => {
                displayProfile();
              }
            },
            {
              key: '200',
              label: 'Rooms',
              onClick : () => {
                displayRooms();
              }
            },
            {
              key: '300',
              label: 'Chat',
              onClick : () => {
                displayChat();
              }
            },
            {
              key: '400',
              label: 'History',
              onClick : () => {
                displayHistory();
              }
            },
            {
              key: '500',
              label: 'Logout',
              onClick : () => {
                displayLogout();
              }
            }
          ]}
        />
      </Sider>
      <div id='soul'>
          <h1>Hello  User</h1>
      </div>

    </Layout>
  );
};

export default Dashboard;