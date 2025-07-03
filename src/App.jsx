import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/Home'
import Info from './pages/info/Info'
import Layout from './pages/layout/Layout'
import Programs from './pages/programs/Programs'
import Category from './pages/category/Category'
import { Route, Routes } from "react-router";
function App() {








  return (
    <>
     <div>



      <Routes>
<Route path='/' element={<Layout />}>
  <Route  index element={<Home />}/>
  <Route path='category' element={<Category/>} />
  <Route path='info/:id' element={<Info/>} />
  <Route path='programs' element={<Programs/>} />

</Route>
      </Routes>

     </div>
    </>
  )
}

export default App
