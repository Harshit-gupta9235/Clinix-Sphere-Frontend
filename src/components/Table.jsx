import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Deletedata, fetchdata } from '../service/Api';
const Table = (props) => {
  const navigate=useNavigate()
  // console.log(props);
  const [content,setcontent]=useState(undefined)
  useEffect(()=>{
    
      updateit();
    
  },[props.x])
  const updateit = ()=>{
    if(Array.isArray(props.x)){
      setcontent(props.x)
      // console.log(props.x)
    }
  }
  const columns = [
    { Header: "Date"},
    { Header: "Temprature" },
    { Header: "Systolic"},
    { Header: "Diastolic"},
    { Header: "Heart Rate"},
    
  ];
  const updatetrasnfer = (x)=>{
    navigate("/update",{state:{data:x}})
  }
  const deleteit = async (_id)=>{
    try{
      const data=await Deletedata(_id);
      const newdata=await fetchdata();
      setcontent(newdata?.data?.data)
    }catch(error){
      console.log(`error in Table.jsx deleteit function ${error}`)
    }
  }
 

  
  return (
    <div className='h-[80vh] w-full p-4 flex justify-center items-start '>
      <table className='w-[80%] mx-auto '>
        <thead className='bg-purple-500 text-white rounded-lg '>
            <tr className='flex justify-around rounded-lg items-center'>
              {
                columns.map((column,index)=>(
                  
                  <th key={`col${index}`} className=' border border-white py-3 w-[20%]'>{column.Header}</th>
                ))
              }
              <th key="5" className='border py-3  border-white w-[8%]'>Edit</th>
              <th key="6" className='border py-3  border-white w-[8%]'>Delete</th>
              
            </tr>
        </thead>
        <tbody>
          {
           (content!=undefined) ?  content.map((row,index)=>(
            <tr key={`row${index}`}  className=' flex justify-around items-center'>
                  <td onClick={()=>{navigate("/record",{state:{data:{...row}}})}} className='w-[20%] py-3 text-center border border-gray-500'>{row.date}</td>
                  <td onClick={()=>{navigate("/record",{state:{data:{...row}}})}} className='w-[20%] py-3 text-center border border-gray-500'>{row.temperature}</td>
                  <td onClick={()=>{navigate("/record",{state:{data:{...row}}})}} className='w-[20%] py-3 text-center border border-gray-500'>{row.systolic}</td>
                  <td onClick={()=>{navigate("/record",{state:{data:{...row}}})}} className='w-[20%] py-3 text-center border border-gray-500'>{row.diastolic}</td>
                  <td onClick={()=>{navigate("/record",{state:{data:{...row}}})}} className='w-[20%] py-3 text-center border border-gray-500'>{row.heart}</td>
                  <td onClick={()=>updatetrasnfer(row)} className='w-[8%] py-1 text-center border border-gray-500'>
                    <button className='text-blue-600'><MdEdit className='w-[32px] h-[32px]' /></button>
                  </td>
                  <td onClick={()=>deleteit(row._id)} className='w-[8%]  py-1 text-center border border-gray-500'>
                    <button className='text-red-500 '><FaTrash className='w-[32px] h-[32px]'/></button>
                  </td>
            </tr>
          )):null
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;