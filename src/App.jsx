import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Loading from './components/Loading'
import Trending from './components/Trending'




const App = () => {
  return (
    <div className='bg-[#222831] w-screen h-screen flex'>
    <Routes>
<Route path="/" element={<Home></Home>}></Route>
{/* <Route path="/l" element={<Loading></Loading>}></Route> */}
<Route path="/trending" element={<Trending/>}></Route>

    </Routes>
    </div>
  )
}

export default App