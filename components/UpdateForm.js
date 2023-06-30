import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"



const UpdateForm=()=>{
    const[emp,setemp]=useState({empid:"" ,ename:"",sal:0})
    const navigate=useNavigate()
    const params=useParams()

    const handleUpdate=async()=>{
        try {
        await axios.put(`http://localhost:3002/employees/update/${emp.empid}`,emp)
            navigate('/employeetable')
        } catch (error) {
            console.log(error)
        }
    }

    const getEmpData=async()=>{
    //   try {
    //     const data=await axios.get(`http://localhost:3002/employees/${params.empid}`)
    //     setemp(...data)
    //     console.log(data)
    //   } 
    
    await axios.get(`http://localhost:3002/employees/${params.empid}`)
    .then(({data})=>{
        console.log(data)
        setemp(...data)
    })
    
    .catch ((error)=>{
        console.log(error)
      })
    }

    useEffect(()=>{
        getEmpData();
    },[])

    return(
        <>
        Id:<input type="text" value={emp.empid} disabled></input><br/>
        NAME:<input type="text" value={emp.ename} onChange={(e)=>{setemp({...emp,ename:e.target.value})}}></input><br/>
        SALARY:<input type="text" value={emp.sal} onChange={(e)=>{setemp({...emp,sal:e.target.value})}}></input>
            <button type="button" onClick={handleUpdate}>UPDATE</button>
        </>
    )
}

export default UpdateForm;