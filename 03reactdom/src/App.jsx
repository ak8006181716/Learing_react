import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username:"Ankit",
    age: 22
  }
  let newArr=[1,2,3]
  return (
    <>
    <h1 className='bg-green-400 p-4 text-black rounded-xl mb-4'>Telwind test</h1>
   <Card username="Ankit Kumar" btnText="hit this"/>
    </>
  )
}

export default App
