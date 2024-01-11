import'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { login } from '../Admin/connect,'


export const Login=()=>{
  const [user,setuser]=useState({
    "username":"",
    "password":"" 
  })
  const [type,settype]=useState("")


  const settinguser=(e)=>{
    let {name,value}=e.target;
    return(
        setuser((old)=>{
          return{
             ...old,
             [name]:value
          }
        }
        )
    )
    }
    const log=()=>{
     var data= login(user,type);
    data.then((msg)=>{
      if(msg==="student"){
        return window.location.assign("/Studenname")         
      }
      else if(msg==="admin"){
        return window.location.assign("/Adminhome")
      }
    })
    }
    return(
       
      <div className='container-fluid bg-primary m-0 row justify-content-center align-items-center' style={{height:"100vh"}}>
  
          <div className='bg-success col-5 rounded-4'  style={{height:"50vh"}}>
            <label className='form-label' >USERNAME</label>
            <input type='text' className='form-control' name='username' onChange={settinguser}/>
            <label className='form-label'>PASSWORD</label>
            <input type='text' className='form-control' name='password' onChange={settinguser} />
             <div>
                
                  <label><input type='radio' value={'admin'}  id='admin' name='type' onClick={()=>settype("admin")}></input >Admin</label>
                
                  <label ><input type='radio' value={'student'} id='student' name='type' onClick={()=>settype("student")}></input>Student</label>
             </div>
            <button type='' className='btn btn-dark mt-1' onClick={()=>{log()}} >LOGIN</button>
    </div>
      </div>
    )
}