
import './App.css';
import SignIn from './components/SignIn';
import Main from './components/Main';
import { useState } from 'react';
function App() {
  const [socket, setSocket] = useState(localStorage.getItem('socket'))
  var [listing, setListing] = useState(JSON.parse(localStorage.getItem('list')))
  var [file,setFile] = useState(null)
  console.log(listing)
  return (
    <>
      {socket ? <Main file={file} setFile={setFile} listing={listing} socket={socket} setSocket={setSocket} />
        : <SignIn file={file} setFile={setFile} listing={listing} setListing={setListing} socket={socket} setSocket={setSocket} />}
    </>




  );
}

export default App;
