
import Screen1 from './components/Screen1/screen1'
import Chat2 from './components/chat/chat2'
import Fun from './components/chat/chat2';
import Footer from "./components/chat/footer"
import Profile from './components/chat/profile'
import Signin_page from "./components/signin/signin"
import Dashboard from "./components/Dashboard/Dashboard"
import Login_page from "./components/signin/login"
import { BrowserRouter, Routes, Route ,Switch} from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   {/* <Screen1/> */}
    //   <br/>
    //   <br/>
    //   {/* <Dashboard/> */}
    //   <Fun/>
    //   {/* <Screen1/> */}
    //   <Profile/>

      // <Login_page/>
            // <Signin_page/>
    // </div>
    <BrowserRouter>
    <Routes>
      
      <Route exact path="/home" element={<Screen1 />}/>
      <Route exact path="/dashboard" element={<Dashboard />}/>
        <Route exact index element={<Screen1 />} />
        <Route exact path="/signin" element={<Signin_page />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/chat" element={<Fun />} />
        <Route exact path="/login" element={<Login_page />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
    
    </Routes>
    
  </BrowserRouter> 

  );
}

export default App;
