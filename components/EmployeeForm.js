import { Fragment, useState } from "react"
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
 

 const EmployeeForm=()=>{
    const[empid,setempid]=useState('')
    const[ename,setename]=useState('')
    const[sal,setsal]=useState('')
    const navigate=useNavigate();

    const handleForm=()=>{
        axios.post(`http://localhost:3002/employees`,{
            empid:empid,
            ename:ename,
            sal:sal
        }).then(()=>{navigate('/employeetable')})
    }



    return(
        <Fragment>
            Employee ID:<input value={empid} onChange={(e)=>{setempid(e.target.value)}}></input><br/>
            Employee NAme:<input value={ename} onChange={(e)=>{setename(e.target.value)}}></input><br/>
            Employee SalAry:<input value={sal} onChange={(e)=>{setsal(e.target.value)}}></input><br/>
            <button onClick={handleForm}>ADD EMPLOYEE</button>
        </Fragment>
    )
 }

 export default EmployeeForm;