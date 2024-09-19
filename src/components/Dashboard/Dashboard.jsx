import React,{useEffect,useState} from 'react'
import Table from '../Table.jsx'
import Navbar from '../Navbar'
import { fetchdata} from '../../service/Api.jsx'
const Dashboard = () => {
  const [state,setstate]=useState()
  useEffect( ()=>{
     setdata()
  },[])
  const setdata =async()=>{
    // setstate(data);
    const data=await fetchdata();
    setstate(data?.data?.data)
  }
  return (
    <>
    <Navbar/>
        <Table x={state} />
    </>
  )
}

export default Dashboard