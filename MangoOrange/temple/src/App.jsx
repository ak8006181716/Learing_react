import { Routes, Route } from 'react-router-dom';
import Prem_mandir from './components/Prem_mandir';
import Home from './components/Home';
import Card from './components/Card';
import { useState } from 'react';
import Footer from './components/Footer';



function App() {
  const [data,setdata]=useState(0);

  return (
    
    <>
     <Home />
     
      <h1 style={{color:'black', textAlign:'center', fontSize:'40px', top:'7rem', fontWeight:"700"}}>More Temple</h1>
      <br />
      <br />
     <Card/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Prem_mandir" element={<Prem_mandir />} />
    </Routes>
     <Footer/>
    </>
  )
}

export default App
