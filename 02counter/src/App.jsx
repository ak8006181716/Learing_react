import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {

 let [jokes,setJokes] = useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((Response)=>{
      setJokes(Response.data)
    
    })
    .catch(()=>{
      console.log("error")
    })
  },[])




  return (
    <>
     <h1>Hello world !</h1>
     <p>jokes : {jokes.length}</p>
     <div className=""style={{display:"flex",}}>
     {
      jokes.map((jokes,index)=>(
        
       <div style={{border:"2px solid", margin:"10px", padding:"2px"}} key={jokes.id}>
       <h3>{jokes.title}</h3>
       <p>{jokes.content}</p>

       </div>
        
      ))
     }
     </div>
    </>
  )
}

export default App
