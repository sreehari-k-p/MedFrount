import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Switch } from '@mui/material';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Page from './components/Page';
import OR from "./components/OR"
import Main2 from './components/Main2';
import Main3 from './components/Main3';
import Form from './components/Form';
import Request from './components/Request';
import BloodD from './components/BloodD';

function App() {
  return (
    <div className="App">
      <Navbar />
      { <Routes>
        <Route path='/login'element={<Login/>}/>
        <Route path='/home'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/signup'element={<Signup/>}/>
        <Route path='/or'element={<Main3 />}/>
        <Route path='/h'element={<Main2/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/request' element={<Request/>}/>
        <Route path='/bld' element={<BloodD/>}/>
    
     </Routes> }

  
     
    
      
    

    </div>
  );
}

export default App;
