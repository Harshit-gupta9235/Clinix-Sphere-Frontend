import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'

const Record = () => {
  const navigate=useNavigate()
    const location=useLocation();
    console.log(location.state)
  return (
    <div className='w-screen relative h-screen'>
        <h1 className='text-[50px] text-center text-purple-500  mx-auto'><p className='border-b border-b-5 border-purple-500 inline'>Health Report</p> </h1>
        <button onClick={()=>navigate("/")} className='absolute rounded-full top-[2%] left-[1%] p-4 border border-black'>Back</button>
        <div className='h-[50%] border border-gray-500 w-[50%] flex justify-evenly items-start flex-col text-[24px] mx-auto my-[50px]'>
            <div className='px-5'>{`Date : ${location.state.data[0]}`}</div>
            <div className='px-5'>{`Body Temprature : ${location.state.data[1]}`}</div>
            <div className='px-5'>{`Blood Pressure : ${location.state.data[2]}/${location.state.data[3]}`}</div>
            <div className='px-5'>{`Heart Rate : ${location.state.data[4]}`}</div>

        </div>
    </div>
  )
}

export default Record