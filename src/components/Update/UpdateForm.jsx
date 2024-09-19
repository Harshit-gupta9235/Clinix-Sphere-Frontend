import React, { useEffect, useState } from 'react'
import {Formik,Field} from 'formik'
import { Form as Formdiv }  from 'formik'
import { Updatedata } from '../../service/Api.jsx';
import { useNavigate } from 'react-router-dom';
const UpdateForm = (props) => {
  const [state,setstate]=useState({date:"",temperature:"",systolic:"",diastolic:"",heart:""});
  const navigate=useNavigate()
  useEffect(()=>{
    setfunc();
  },[])
  const setfunc=()=>{
    setstate(props.x);
    console.log(props.x._id)
  }
  const setdata= async (data)=>{
    try{
      // console.log(props.x._id,data);
    const resp=await Updatedata(props.x._id,data);
    // resp!= undefined ?console.log(resp?.data?.data):null;
    navigate("/")
    }catch(error){
      console.log(`error while sending data from Form.jsx ${error}`)
    }

  }
  
  return (
    <div className='h-[80vh] flex flex-col   justify-center items-center w-full border-gray-400 mt-6 '>
      
        {
            state.date != "" ?<Formik initialValues={{date:state.date,temperature:state.temperature,systolic:state.systolic,diastolic:state.diastolic,heart:state.heart}} onSubmit={(initialValues)=>{
                setstate(initialValues);setdata(initialValues);
              }}>
                <Formdiv className='w-[50%] rounded-xl border border-gray-400 text-gray-400 text-[24px] px-5 py-4'>
                <h1 className='mx-auto text-center text-[48px] text-purple-500'>Form Submission</h1>
                  <div>
                    <label className='' htmlFor=""> Enter Date </label>
                    <Field type="date" name="date" className="w-full text-[24px] border border-gray-400 text-gray-600 rounded-lg px-[10px] py-[5px] my-[10px]"  placeholder="Enter Date here..."/>   
                  </div>
                  <div>
                  <label className='' htmlFor="">Temprature</label>
                    <Field className="w-full text-[24px] border border-gray-400 text-gray-600 rounded-lg px-[10px] py-[5px] my-[10px]"  placeholder="Enter Temprature here..." name="temperature" type="number"/>   
                  </div>
                  <div className='flex flex-col justify-between items-start'>
                  <label className='' htmlFor="">Systolic</label>
                    <Field className="w-[100%] text-[24px] border border-gray-400 text-gray-600 rounded-lg px-[10px] py-[5px] my-[10px]" placeholder="Enter Systolic here..." name="systolic" type="number"/>  
                     
                  </div>
                  <div className='flex flex-col justify-between items-start'>  
                  <label className='' htmlFor="">Diastolic</label>
                    <Field className="w-[100%] text-[24px] border border-gray-400 text-gray-600 rounded-lg px-[10px] py-[5px] my-[10px]" placeholder="Enter Diastolic here..." name="diastolic" type="number"/> 
                  </div>
                  <div>
                  <label className='' htmlFor="">Heart Rate</label>
                    <Field className="w-full text-[24px] border border-gray-400 px-[10px] text-gray-600 rounded-lg py-[5px] my-[10px]"  placeholder="Enter Heart Rate here..." name="heart" type="number"/>   
                  </div>
                  <div className='flex justify-center items-center'>
                    <button type='submit' className="w-[80%] text-[24px] border border-gray-400 bg-purple-500 text-white rounded-lg px-[10px] py-[5px] text-center mx-auto " >Submit</button>
                  </div>
                </Formdiv>
              </Formik>:null
        }
    </div>
  )
}

export default UpdateForm