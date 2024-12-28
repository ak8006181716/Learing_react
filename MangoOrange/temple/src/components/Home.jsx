import React from 'react'
import hel from '../assets/hello.jpg'
import logo from '../assets/logo.png'
import magimage from '../assets/magnifying.jpg'


function Home() {
  return (
    <>
    <div className="flex justify-between ">
    <div className="h-20 flex m-1 font-bold ">
      
      <img src={logo} alt="logo pic" className='h-20 p-2 ' />
      <h1 className='p-2 text-6xl text-black'>Temple Site</h1>
      
    </div>
    
      <img src={magimage} alt="search"  className='size-7 m-6 '/>
      </div>
    <hr />
    <div className="w-full flex p-9 justify-evenly">
      <div className="w-2/4">
      <h1 className='text-7xl font-bold p-8 '><span>Explore Mathura </span></h1>
      <p className='text-2xl'>Welcome to Mathura, the birthplace of Lord Krishna and a city steeped in rich heritage and spirituality. As you wander through the bustling streets, you will be enchanted by the vibrant colors, melodious chants, and the divine presence that fills the air.  </p><br />
      <a href="/" className=' bg-blue-500 rounded-lg text-white h-10 p-2'><b>Explore temples</b></a>
      </div>
        <img src={hel} alt="hello" className='w-2/5 p-9 rounded-xl hover:scale-110 duration-150'/>
        
    </div>
    
    </>
  )
}

export default Home