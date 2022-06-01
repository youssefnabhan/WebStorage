
import './App.css';
import SignIn from './components/SignIn';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn/>} />
      <Route path="/Home" element={<Main/>} />


    </Routes>
    </BrowserRouter>
  
   
    
  );
}

export default App;
