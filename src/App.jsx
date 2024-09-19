import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import Record from './components/Record/Record'

import './index.css'
import Updatedata from './components/Update/Updatedata'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path='/record' element={<Record/>}/>
    <Route path='/update' element={<Updatedata/>}/>
   </Routes>
   </>
  )
}

export default App
