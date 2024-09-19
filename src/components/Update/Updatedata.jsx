import React from 'react'
import UpdateForm from './UpdateForm.jsx'
import Navbar from '../Navbar'
import { useLocation } from 'react-router-dom'

const Updatedata = () => {
    const location= useLocation();
  return (
    <>
    <Navbar/>
        <UpdateForm x={location.state.data}/>
    </>
  )
}

export default Updatedata