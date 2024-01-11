import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { addstudentuser } from './connect,'
export const Createuser = () => {
    const [studentdetails,setstudentdetail]=useState(
        {
            "regnumber":"",
            "username":"",
            "year":"",
            "department":"",
            "usermailid":"",
            "password":""
        }
    )
    const settingvalues=(temp)=>{

        let {name,value}=temp.target;
        return(
          setstudentdetail((val)=>{
            return{
                ...val,
                [name]:value
            }
          
        }       
        )
        )
    }

    const adduser=async()=>{
        if(studentdetails.regnumber.length>0 &&studentdetails.year.length >0&& studentdetails.department.length>0 &&studentdetails.password.length>0 &&studentdetails.usermailid.length>0 ){
            const value= await addstudentuser(studentdetails);
            window.location.assign("/Adminhome")

        }
        else{
            return alert("must be fill all datas")
           
        }
    
    

         
    }
    return (
        <div className='container-fluid m-0 row justify-content-center align-items-center' style={{ height: "100vh" }}>
            <div className='bg-success col-5 rounded-4' style={{ height: "70vh" }}>

                <label className='form-label' >Reg number</label>
                <input type='number' className='form-control' name='regnumber' onChange={settingvalues} required/>

                <label className='form-label' >User Name</label>
                <input type='text' className='form-control' name='username' onChange={settingvalues} required/>


                <label className='form-label' >Department</label>
                <input type='text' list='departments' className='form-control'  name='department' onChange={settingvalues} required/>
                <datalist id="departments">
                    <option>mech</option>
                    <option>cse</option>
                    <option>ece</option>
                </datalist>

                <label className='form-label'>Year</label>
                <input type='text' list='year' className='form-control' name='year' onChange={settingvalues} required />
                <datalist id="year">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </datalist>

                <label className='form-label'>Mail id</label>
                <input type='email' className='form-control' placeholder='abc@gmail.com' name='usermailid' onChange={settingvalues} required/>

                <label className='form-label'>PASSWORD</label>
                <input type='password' className='form-control' name='password' onChange={settingvalues} required/>

                <button type='submit' className='btn btn-dark mt-1'
                onClick={()=>{
                    adduser();
                }}
                >create</button>

            </div>
        </div>
    )

}