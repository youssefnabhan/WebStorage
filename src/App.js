
import './App.css';
import SignIn from './components/SignIn';
import Main from './components/Main';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [socket,setSocket] = useState(null)
  const [listing,setListing] = useState([])

  
  return (
    <>
    {socket ? <Main listing={listing} socket={socket} setSocket={setSocket}/> 
    : <SignIn listing={listing} setListing={setListing} socket={socket} setSocket={setSocket}/>}
    </>
    
  
   
    
  );
}

export default App;
