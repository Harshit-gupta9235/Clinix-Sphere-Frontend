import axios from 'axios'
const url="https://clinix-sphere.onrender.com/";
export const senddata=async (data)=>{
    try{
        // console.log(data)
        const resp=await axios.post(`${url}created`,data)
        return resp;
    }catch(error){
        console.log(`error in senddata function in Api.jsx ${error}`)
    }
}
export const fetchdata=async()=>{
    try{
         return await axios.get(`${url}getdata`)
    }catch(error){
        console.log(`error in fetchdata function in Api.js ${error}`)
    }
}
export const Updatedata = async (_id,data)=>{
    try{
        return await axios.put(`${url}update`,{_id,user:data})
    }catch(error){
        console.log(`error in Updatedata function in Api.jsx ${error}`)
    }
}
export const Deletedata = async (_id)=>{
    try{
        return await axios.delete(`${url}deleted/${_id}`)
    }catch(error){
        console.log(`error in deletedata function in Api.jsx ${error}`)
    }
}