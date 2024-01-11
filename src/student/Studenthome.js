import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { getingbook, studentlist } from '../Admin/connect,'
import { json } from 'react-router'
export const Studenthome = () => {
    const [expecteddate,setexpecteddate]=useState()
    const day=(month,year)=>{
        return new Date(month,year,0).getDate();

    }
    const date=new Date;
    var month=date.getMonth();
    var year=date.getFullYear();
    let days= day(month,year);
    let today=date.getDate();
    let plus7=today+7;
    const expectdate=()=>{
     
       if(plus7<=days){
        setexpecteddate(plus7+"/"+month+"/"+year);
       }
       else{
        let nextmonth=month+1
        setexpecteddate(plus7-days+"/"+nextmonth+"/"+year);
       }
     

    }
    const [val,setval]=useState([ ])
    useEffect(()=>{
        studentlist().then((msg)=>setval(msg));
        expectdate();

    },[])
    const studentdetail=sessionStorage.getItem("studentuser");

    const get=(ind)=>{
        const oneval = sessionStorage.getItem("studentuser");
        const student=JSON.parse(oneval);
        var  obj={
            "bookid":val[ind].bookid,
            "status":"out of stack",
            "expecteddate":expecteddate,
            "studentid":student.regnumber,
            "delivereddate":today+"/"+month+"/"+year,
            "bookname":val[ind].bookname,
            "author":val[ind].author,
        }
        getingbook(obj);

        }
        
        
      

    return (

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
                            <p className="col-2 m-0 lh-lg  " name='expecteddate' contenteditable="false" >{expecteddate}</p>
                            <p className="col-2 m-0  lh-lg  " name='status' contenteditable="false" >{val.status}</p>
                            <button className="col-2  btn btn-primary " onClick={()=>get(index)} >Get</button>
                        </li>
                     
                     )
            }
            </ul>
    </div>


</div>

            )
}