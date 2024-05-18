import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Topnav = () => {
    const[query,setQuery] = useState('')
    console.log(query)
  return (
    <div className='w-full h-[10vh]  relative flex justify-start ml-[20vw] p-2 text-[#EEEEEE]'>
       <i class=" text-[2vw] ri-search-line"></i>
        <input onChange={(e)=>{setQuery(e.target.value)}} value={query} className=' outline-none border-none bg-transparent mx-10 p-5 w-[40vw] h-[3vw]' type='text' placeholder='Search your favourite shows & movies'></input>
       {query.length > 0 && (<i onClick={()=>{setQuery('')}} class="text-[2vw] ri-close-fill"></i> )} 

        <div className='absolute text-[#EEEEEE] h-[50vh] top-[100%] w-[40vw] overflow-auto'>
            {/* <Link className='text-[1vw] inline-block p-[2vw] w-full hover:bg-[#393E46] hover:text-white duration-500'>
            <img></img>
            <span>Hi</span>
            </Link>
            <hr></hr> */}
          
        </div>
    </div>
  )
}

export default Topnav