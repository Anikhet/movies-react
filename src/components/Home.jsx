import React, { useEffect, useState } from 'react'
import Sidenav from './Sidenav'
import Topnav from './Topnav'
import Header from './Header'
import axios from 'axios'
import instance from '../utils/axios' // Ensure this is correctly configured
import Horizontal from './Horizontal'


const Home = () => {
  const[wall,setWall ] = useState(null)
  const[card,setCard] = useState([])
  const getWallpaper = async () => {
   

    try {
        const response = await instance.get(`/trending/all/day`)
   
      
        const number = Math.floor(Math.random() * response.data.results.length);
    
        setWall(response.data.results[number]) 
     
   
    
        // Assuming results is the array containing search results
    } catch (e) {
        console.error("error", e)
    }
}

const getTrending = async () => {
   

  try {
      const {response} = await instance.get(`/trending/all/day`)
      setCard(response.data.results)
 
  
      // Assuming results is the array containing search results
  } catch (e) {
      console.error("error", e)
  }
}

useEffect(() => {
    !wall && getWallpaper()
    !card && getTrending()
  }, [wall, card]);



  return wall ? (
<>
<Sidenav></Sidenav>
<div className='w-[80%] h-full overflow-auto'>
  


<Topnav></Topnav>
<Header data={wall}></Header>
<Horizontal data={card}></Horizontal>
</div>

    



    </>
  ):<h1>Loading</h1>
}

export default Home