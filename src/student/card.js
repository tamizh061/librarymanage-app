import { useEffect, useState } from "react"
import { liststudentcarts, submitbooks } from "../Admin/connect,"

export const Cart=()=>{
    const [val,setval]=useState([]);
    const date=new Date;
    const today=date.getDate();
    const onsubmiting=(val)=>{
       
        const res=submitbooks(val,today);
        res.then((msg)=>alert(msg));
        
    }
    const session=sessionStorage.getItem("studentuser")
    const student=JSON.parse(session)

    useEffect(()=>{ 
        const value= liststudentcarts(student.regnumber);  
        value.then((val)=>{
         setval(val);
        })
     },[])
     return(
         <div className="container-fluid " >
            <div className="row align-items-center justify-content-center " style={{ height: "6rem" }}>
                <div className="row align-items-center justify-content-center col-12">
                    <div className='col'></div>
                   <input className="form-control form-control-lg ms-1 col" list="titles" placeholder="tittle"></input>
                        <datalist id="titles">
                            <option>list1</option>
                            <option>list1</option>
                            <option>list1</option>
                        </datalist>
                        <input className="form-control form-control-lg  ms-1 col" placeholder="value"></input>
                        <button className="btn btn-success  btn-lg  ms-1 col">Search</button>
                 
                        </div>
                        </div>


            <div>
                <ul className="list-group  ">
                    <li className="list-group-item   d-flex align-items-center justify-content-center p-1  text-center" style={{ height: "4rem" }}>

                        <p className="col-1 m-0 font-bold">ID</p>
                        <p className="col-3 m-0 font-bold">BOOkName</p>
                        <p className="col-2 m-0 font-bold">Author</p>
                        <p className="col-2 m-0 font-bold">Expected Submit</p>
                        <p className="col-2 m-0 font-bold">Status</p>
                        <p className="col-2 m-0 font-bold">Action</p>

                    </li>
                </ul>

                <ul className="list-group mt-2 ">
                    {
                        val.map((val,index)=>
                            <li className="list-group-item   d-flex align-items-center justify-content-between text-center p-1"  style={{ height: "4rem" }}>
                            <p className="col-1 m-0 lh-lg  " name='bookid' contenteditable="false"  >{val.bookid}</p>
                            <p className="col-3 m-0 lh-lg " name='bookname' contenteditable="false" >{val.bookname}</p>
                            <p className="col-2 m-0 lh-lg " name='author' contenteditable="false ">{val.author}</p>
                            <p className="col-2 m-0 lh-lg  " name='expecteddate' contenteditable="false" >{val.expecteddate}</p>
                            <p className="col-2 m-0  lh-lg  " name='status' contenteditable="false" >{val.status}</p>
                            <button className="col-2  btn btn-success" onClick={()=>{
                                onsubmiting(val)
                            }} >Submit</button>
                        </li>
                     
                     )
            }
            </ul>
    </div>


</div>
     )
}