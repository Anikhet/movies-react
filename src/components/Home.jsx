import React, { useEffect, useState } from 'react'
import Sidenav from './Sidenav'
import Topnav from './Topnav'
import Header from './Header'
import axios from 'axios'
import instance from '../utils/axios' // Ensure this is correctly configured


const Home = () => {
  const[wall,setWall ] = useState(null)
  const getWallpaper = async () => {
   

    try {
        const response = await instance.get(`/trending/all/day`)
   
      
       let number = (Math.random()*response.data.results.length).toFixed()
       console.log(number)
        setWall(response.data.results[number]) 
        // Assuming results is the array containing search results
    } catch (e) {
        console.error("error", e)
    }
}

useEffect(() => {
    !wall && getWallpaper()
}, [ ])
  return wall ? (
<>
<Sidenav></Sidenav>
<div className='w-[80%] h-full'>
  


<Topnav></Topnav>
<Header data={wall}></Header>
</div>

    



    </>
  ):<h1>Loading</h1>
}

export default Home