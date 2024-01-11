import { useEffect, useState } from "react"
import { acceptbookreq, fetchnotification } from "./connect,";

export const Notifiaction=()=>{
    const [notfications,setnotifications]=useState([]);

    const acccptbook=(val)=>{
        acceptbookreq(val)
    }

    useEffect(()=>{
       const val= fetchnotification();
       val.then((msg)=>setnotifications(msg));
    },[])
    return(
        <div>
            <div className="container-fluid"> 
       <div className="row align-items-center justify-content-center " style={{height:"6rem"}}>
          <div className="row align-items-center justify-content-center col-12">
                <div className="col"></div>
                <input className="form-control form-control-lg col ms-1" list="titles" placeholder="tittle"></input>
                <datalist id="titles">
                    <option>list1</option>
                    <option>list1</option>
                    <option>list1</option>
                </datalist>
                <input className="form-control form-control-lg col ms-1" placeholder="value"></input>
                <button className="btn btn-success  btn-lg col ms-1">Search</button>
          </div > 
       </div>
       <div >
        <ul className="list-group  ">
        <li className="list-group-item ">
                <div className="row  text-center align-items-center"style={{height:"3rem"}}>
                  <p className="col m-0 font-bold">BOOK ID</p>
                  <p className="col m-0 font-bold">BOOkName</p>
                  <p className="col m-0 font-bold">Author</p>
                  <p className="col m-0 font-bold">Expected Submit</p>
                  <p className="col m-0 font-bold">Submited date</p>
                  <p className="col m-0 font-bold">Student name</p>
                  <p className="col m-0 font-bold">Reg no</p>
                  <p className="col m-0 font-bold">ReQuest</p>
                  </div>
            </li>
        </ul>
        <ul className="list-group mt-3 ">
           {
            notfications.map((val)=>
                <li className="list-group-item ">
                <div className="row  text-center align-items-center"style={{height:"3rem"}}>
                  <p className="col m-0  ">{val.bookid}</p>
                  <p className="col m-0 ">{val.bookname}</p>
                  <p className="col m-0 ">{val.author}</p>
                  <p className="col m-0 ">{val.expecteddate}</p>
                  <p className="col m-0 ">{val.submiteddate}</p>
                  <p className="col m-0 ">{val.studentname}</p>
                  <p className="col m-0 ">{val.studentid}</p>
                   <div className="col d-flex column">
                   <button className="btn btn-primary col" 
                   
                   onClick={()=>{
                    acccptbook(val.bookid)
                   }}
                   > accept</button>
                   <button className="btn btn-danger col"> addfine</button>

                   </div>
                  </div>
            </li>
            )
           }
          
        </ul>
       </div>
     </div>
        </div>
    )
}