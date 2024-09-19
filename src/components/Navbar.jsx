import React from 'react'
import  {NavLink} from 'react-router-dom'
const Navbar = () => {
    
  return (
    <div className="flex justify-center gap-2 p-[10px] items-center w-full">
        <NavLink className="text-2xl text-gray-400" to={"/home"}>Home</NavLink>
        <NavLink className="text-2xl text-gray-400" to={"/"}>Dashboard</NavLink>
    </div>
  )
}

export default Navbar