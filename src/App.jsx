import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'



const App = () => {
  return (
    <div className='bg-[#222831] w-screen h-screen flex'>
    <Routes>
<Route path="/" element={<Home></Home>}></Route>


    </Routes>
    </div>
  )
}

export default App