import React, { useEffect, useState } from 'react'
import Sidenav from './Sidenav'
import Topnav from './Topnav'
import Header from './Header'
import instance from '../utils/axios' // Ensure this is correctly configured
import Horizontal from './Horizontal'
import Loading from './Loading'


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
      const response = await instance.get(`/trending/all/day`)
      setCard(response.data.results)
 
  
      // Assuming results is the array containing search results
  } catch (e) {
      console.error("error", e)
  }
}

useEffect(() => {
  const intervalId = setInterval(() => {
    getWallpaper()
  }, 3000)

  // Clear the interval when the component unmounts
  return () => clearInterval(intervalId)
}, [])

useEffect(() => {
  if (card.length === 0) getTrending();
}, [card.length]);

useEffect(() => {
  console.log('Wall:', wall);
  console.log('Card:', card);
}, [wall, card]);



  return wall && card.length  ? (
<>
<Sidenav></Sidenav>
<div className='w-[80%] h-full overflow-auto'>
  


<Topnav></Topnav>
<Header data={wall}></Header>
<Horizontal card={card}></Horizontal>
</div>

    



    </>
  ):<Loading></Loading>
}

export default Home