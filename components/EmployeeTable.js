import { useEffect, useState } from "react"
import axios from 'axios'
import {Link} from 'react-router-dom'


const EmployeeTable=()=>{
const[emp,setemp]=useState([])

const handleDelete=async(id)=>{
    try {
        await axios.delete(`http://localhost:3002/employees/${id}`)
    } catch (error) {
        console.log(error)
    }
}

const getEmpData=async()=>{
    try {
       const {data}= await axios.get(`http://localhost:3002/employees`)
       setemp(data)
       console.log(data)
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
    getEmpData();
})

    return(
        <>
        <Link to="/"><button>ADD</button></Link>
        <table border={2} bgcolor="cyan" >
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee Name </th>
                    <th>Employee SALARY </th>
                    <th>ACTION </th>
                </tr>
            </thead>
            <tbody>
                {
                    emp.map((e)=>{
                        return(
                           <tr>
                            <td>{e.empid}</td>
                            <td>{e.ename}</td>
                            <td>{e.sal}</td>
                            <td bgcolor="red">
                                <button onClick={()=>{handleDelete(e.empid)}} >DELETE</button>
                                <Link to="/update"><button>EDIT</button></Link>
                            </td>
                           </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}

export default EmployeeTable;