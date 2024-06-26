import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import instance from '../utils/axios'


const Sidenav = () => {

  return (
    <div className='w-[20%] h-full  border-[#EEEEEE] border-r-2'>
        <h1 className='text-[#EEEEEE] text-[4vw] font-semibold'>Apna.Tv <i className="text-[#EEEEEE] ri-tv-fill text-[2vw]"></i></h1>
        <nav className='flex flex-col text-zinc-400 text-[1.2vw] gap-[2vw]'>
        {/* <h1 className='text-[#EEEEEE] font-semibold text-[2vw] mt-[2vw] ml-[1vw]'>Feed</h1> */}
        <Link to ='/trending' className='flex gap-[1vw] hover:bg-[#393E46] hover:text-white rounded-lg duration-300 p-[1vw] mt-[3vw]'><i className="ri-fire-fill"></i> Trending </Link>
        <Link className='flex gap-[1vw] hover:bg-[#393E46] hover:text-white rounded-lg duration-300 p-[1vw]'><i className="ri-sparkling-fill"></i>Popular</Link>
        <Link className='flex gap-[1vw] hover:bg-[#393E46] hover:text-white rounded-lg duration-300 p-[1vw]'><i className="ri-film-fill"></i>Movies</Link>
        <Link className='flex gap-[1vw] hover:bg-[#393E46] hover:text-white rounded-lg duration-300 p-[1vw]'><i className="ri-tv-2-fill"></i>Tv Shows</Link>
        
        
        </nav>
        <hr className='mt-10 h-[1px]'></hr>
        <nav className='flex flex-col text-zinc-400 text-[1vw] gap-[2vw]'>
        <h1 className='text-[#EEEEEE] font-semibold text-[1.5vw] mt-[2vw] ml-[1vw]'>Website Information </h1>
        <Link className='flex gap-[1vw] hover:bg-[#393E46] hover:text-white rounded-lg duration-300 p-[1vw] '><i className="ri-information-fill"></i>About Us </Link>
        <Link className='flex gap-[1vw] hover:bg-[#393E46] hover:text-white rounded-lg duration-300 p-[1vw]'><i className="ri-phone-fill"></i>Contact</Link>
       
        
        </nav>
    </div>
  )
}

export default Sidenav