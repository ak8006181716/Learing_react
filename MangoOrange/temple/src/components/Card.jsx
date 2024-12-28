import React from 'react'
import imag1 from '../assets/Prem_mandir.jpg'
import img2 from '../assets/bake.jpg'
import img3 from '../assets/Janam_bhomi.jpg'
import img4 from '../assets/vishram-ghat.jpg'
import img5 from '../assets/dwarikadhish.jpg'
import img6 from '../assets/maa-vaishno-devi.jpg'
import { Link } from 'react-router-dom';

function Card() {
    
  return (
   <>
   <div className=" flex flex-wrap items-center justify-evenly  m-8">
    

   <div className='shadow-xl w-80 h-[460px] m-3 rounded-xl hover:scale-110 duration-150'>
    <img src={imag1} alt="card image" className='rounded-lg' />
    <div className=' flex justify-center items-center flex-col p-2'>
    <h1 className=' text-black '><b>Prem Mnadir</b></h1>
    <p className='text-justify'>Prem Mandir, also known as the Temple of Love, is a magnificent Hindu temple located in Vrindavan, Uttar Pradesh, India. Built by Jagadguru Kripaluji Maharaj, the temple is a testament to devotion, artistry, and spirituality. </p>
    <Link to="/Prem_mandir">About More</Link>
    </div>
    </div>

    <div className='shadow-xl w-80 h-[460px] m-3 rounded-xl hover:scale-110 duration-150'>
    <img src={img2} alt="card image" className='h-52 rounded' />
    <div className=' flex justify-center items-center flex-col p-2'>
    <h1 className=' text-black '><b>Shree bake bihari </b></h1>
    <p className='text-justify'>The Banke Bihari Temple in Vrindavan is a renowned shrine dedicated to Lord Krishna, known for its black marble deity in a charming. Established by Swami Haridas in the 19th century, it is a center of devotion, drawing pilgrims for its unique rituals and joyful spiritual atmosphere.</p>
    <a href="Prem_mandir.jsx"><button className='bg-blue-800 rounded-lg
     w-24 text-white p-1 m-2'>About More</button></a>
    </div>
    </div>
    
    <div className='shadow-xl w-80 h-[460px] m-3 rounded-xl hover:scale-110 duration-150'>
    <img src={img3} alt="card image"  className='rounded-lg'/>
    <div className=' flex justify-center items-center flex-col p-2'>
    <h1 className=' text-black '><b>Shri Krishna Janmabhoomi</b></h1>
    <p className='text-justify'>Shri Krishna Janmabhoomi in Mathura is believed to be the exact birthplace of Lord Krishna, located in the Katra Keshav Dev area. The temple complex is one of the holiest sites for Hindus and has immense historical and spiritual significance. </p>
    <a href="../components/Pages/Prem_mandir.jsx"><button className='bg-blue-800 rounded-lg
     w-24 text-white p-1 m-2'>About More</button></a>
    </div>
    </div>

    <div className='shadow-xl w-80 h-[460px] m-3 rounded-xl hover:scale-110 duration-150'>
    <img src={img4} alt="card image" className='h-52 rounded-lg'/>
    <div className=' flex justify-center items-center flex-col p-2'>
    <h1 className=' text-black '><b>vishram-ghat</b></h1>
    <p className='text-justify m-1'>Vishram Ghat is the most significant ghat along the Yamuna River in Mathura. It is believed to be the place where Lord Krishna rested after defeating the tyrant king Kansa. The ghat holds immense religious importance, and pilgrims often take a holy dip here to purify themselves. </p>
    <a href="../components/Pages/Prem_mandir.jsx"><button className='bg-blue-800 rounded-lg
     w-24 text-white p-1 m-2'>About More</button></a>
    </div>
    </div>

    <div className='shadow-xl w-80 h-[460px] m-3 rounded-xl hover:scale-110 duration-150'>
    <img src={img5} alt="card image" className='rounded-lg' />
    <div className=' flex justify-center items-center flex-col p-2'>
    <h1 className=' text-black '><b>dwarikadhish</b></h1>
    <p className='text-justify'>The Dwarkadhish Temple in Mathura is one of the most revered temples dedicated to Lord Krishna, worshiped here as Dwarkadhish or the "King of Dwarka." Built in 1814 by Seth Gokul Das Parikh, a wealthy devotee of Krishna, the temple features stunning Rajasthani and Gujarati architecture with intricate carvings and paintings. </p>
    <a href="../components/Pages/Prem_mandir.jsx"><button className='bg-blue-800 rounded-lg
     w-24 text-white p-1'>About More</button></a>
    </div>
    </div>


    <div className='shadow-xl w-80 h-[460px] m-3 rounded-xl hover:scale-110 duration-150 '>
    <img src={img6} alt="card image"  className='rounded-lg'/>
    <div className=' flex justify-center items-center flex-col p-2'>
    <h1 className=' text-black '><b>maa-vaishno-devi</b></h1>
    <p className='text-justify'>Vaishno Devi Dham a famous temple dedicated to Maa Vaishno Devi. It is significant replica of the original Vaishno Devi shrine in Jammu and Kashmir.attracts many devotees who come to seek the blessings of the goddess without traveling to the distant Trikuta Mountains.  </p>
    <a href="../components/Pages/Prem_mandir.jsx"><button className='bg-blue-800 rounded-lg
     w-24 text-white p-1 m-1'>About More</button></a>
    </div>
    </div>


    

    </div>
   </>
  )
}

export default Card