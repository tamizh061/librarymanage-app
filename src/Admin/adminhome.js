import'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { Delete, Update, addingbook, listAll} from './connect,'




export const Adminhome=()=>{
    const [addbook,setaddbook]=useState(false)   
    const [alldetails,setalldetailes]=useState([]);
    const [reload,setreload]=useState(false);
    const[bookdetails,setbookdetails]  =useState(
        {
            "bookname":"",
            "author":"",
            "status":"available"
        }
    )
    const[updatebookdetails,setupdatebookdetails]  =useState(
        {  
        }
    )
    const calladd=async()=>{

      
        const val=await addingbook(bookdetails)

       setaddbook(false);
       setingreload();


}
  const setingreload=()=>{
    if(reload==false){
        setreload(true);
    }
    else{
        setreload(false)
    }
  }
   
    const setdetail=async()=>{
      
    const val=await listAll().then((d)=>d.data)

     return setalldetailes(val)
}
 
const setbook=(temp)=>{
    let {name,value}=temp.target
    return(
      setbookdetails((old)=>{
       return{
        ...old,
        [name]:value
       }
     }
     ))
    
}


    var increaser=0;
    var call=0;
    const edit=(e,vall,index)=>{
            let iD=e.target.id;
            let child=document.getElementById(iD);
            let parent=document.getElementById(child.parentElement.getAttribute("id"));
            let child1= parent.childNodes[0];
            let child2= parent.childNodes[1];
            let child3= parent.childNodes[2];
            let child4= parent.childNodes[3];
            let child5= parent.childNodes[4];
            let child6= parent.childNodes[5];
            let child7= parent.childNodes[6];
            let child8= parent.childNodes[7];
       
        if(vall===1 && child7.innerHTML=="edit"){
            setupdatebookdetails(alldetails[index]);
            increaser++;
            for (let i=0;i<parent.children.length-2;i++){
                if(i==1 || i==2 ){
                    parent.childNodes[i].setAttribute("contentEditable","true");
                    parent.childNodes[i].className+=" border  border-2  border-primary  rounded ";
                    parent.childNodes[i].style="outline:0px"; 
                }
               
             }        

            child7.className=" btn btn-success col-1 "
            child8.className=" btn btn-warning col-1"
            child7.innerHTML="OK"
            child8.innerHTML="CANCEL";

        }
        else if(vall===1 && child7.innerHTML=="OK" ){
            increaser=0;

            for (let i=0;i<parent.children.length-2;i++){
                parent.childNodes[i].setAttribute("contentEditable","false");
                parent.childNodes[i].classList.remove("border", "border-2", "border-primary", "rounded");
                parent.childNodes[i].style="outline:0px";
             }        
  
            setupdatebookdetails((old)=>{
                let name1=child1.getAttribute("name");
                let value1=parseInt(child1.innerHTML);
                let name2=child2.getAttribute("name");
                let value2=child2.innerHTML;
                let name3=child3.getAttribute("name");
                let value3=child3.innerHTML;
                let name4=child6.getAttribute("name");
                let value4=child6.innerHTML;
                        return{
                             ...old,
                            [name1]:value1,
                            [name2]:value2,
                            [name3]:value3,
                            [name4]:value4,
                            
                         } 
                     }
                     )
            child7.className="btn btn-primary col-1 "
            child8.className="btn btn-danger col-1"
            child7.innerHTML="edit"
            child8.innerHTML="dl"
            setingreload();
    }

        else if(vall===2 && child8.innerHTML=="CANCEL") {

               for (let i=0;i<parent.children.length-2;i++){
                  parent.childNodes[i].setAttribute("contentEditable","false");
                  parent.childNodes[i].classList.remove("border", "border-2", "border-primary", "rounded");
                  parent.childNodes[i].style="outline:0px";
               }           
               
               child7.className="btn btn-primary col-1 "
               child8.className="btn btn-danger col-1"
               child7.innerHTML="edit"
               child8.innerHTML="dl"

               setingreload();

        }  
        else if(vall==2 & child8.innerHTML=="dl"){
            let dlt=parseInt(child.parentElement.getAttribute("id"));
            let deletedval=Delete(dlt);
            alert("id "+dlt+" is deleted successfully");
            setingreload();
            
        }
        else{
           return "fail"
        }

    }
   
    useEffect(()=>{
        setdetail();
    },[reload])

    useEffect(()=>{
        const updating=Update(updatebookdetails);
    },[updatebookdetails])


   

return(
 
(addbook)?

<div className="container-fluid  bg-secondary row align-items-center justify-content-center " style={{height:"92.3vh"}} > 
   <div className=' border border-dark rounded-4 bg-white col-6' style={{height:"300px"}}>
      
      <label className='form-label mt-2 col-2' for="bookname">BOOK NAME</label>
      <input className='col-10 form-control mt-1' name='bookname' value={bookdetails.bookname}  id='bookname'
      onChange={setbook}
      
      />

      <label className='form-label  mt-2'for="author"> AUTHOR</label>
      <input className='col-12 form-control mt-1' name='author' value={bookdetails.author} id='author' onChange={setbook}/>
      <div className='col-12 row justify-content-around mt-4'>
      <button className='btn btn-3 btn-success col-4'
      onClick={()=>calladd()}
       >ADD</button>
      <button className='btn btn-3 btn-danger col-4'  onClick={()=>setaddbook(false)}>Cancel</button>
      </div>
   </div>

</div>


:<div className="container-fluid position-relative" > 
 <div className="row align-items-center justify-content-center " style={{height:"6rem"}}>
    <div className="row align-items-center justify-content-center col-12">
          <div className="col">
              <button className="btn btn-success  btn-lg d-block  col-6 ms-1" onClick={()=>setaddbook(true)}>addbook</button>
              </div>
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

  <div>
  <ul className="list-group  ">
  <li className="list-group-item   d-flex align-items-center justify-content-center p-1  text-center"  style={{height:"4rem"}}>
         
            <p className="col-1 m-0 font-bold">ID</p>
            <p className="col-3 m-0 font-bold">BOOkName</p>
            <p className="col-2 m-0 font-bold">Author</p>
            <p className="col-1 m-0 font-bold">Delivered Date</p>
            <p className="col-1 m-0 font-bold">Expected Submit</p>
            <p className="col-2 m-0 font-bold">Status</p>
            <p className="col-2 m-0 font-bold">Action</p>
           
      </li>
  </ul>
 
  <ul className="list-group mt-2 ">
        {
          alldetails.map((val,index)=>
            <li className="list-group-item   d-flex align-items-center justify-content-between text-center p-1" key={val.bookid}   id={val.bookid}  style={{height:"4rem"}}>
            <p className="col-1 m-0 lh-lg  "    name='bookid'          contenteditable="false"  >{val.bookid}</p>
            <p className="col-2 m-0 lh-lg "     name='bookname'        contenteditable="false" >{val.bookname}</p>
            <p className="col-2 m-0 lh-lg "     name='author'          contenteditable="false ">{val.author}</p>
            <p className="col-1 m-0 lh-lg  "    name='delivereddate'     contenteditable="false" >{val.delivereddate}</p>
            <p className="col-1 m-0 lh-lg "     name='expecteddate'      contenteditable="false" >{val.expecteddate}</p>
            <p className="col-2 m-0  lh-lg  "   name='status'           contenteditable="false" >{val.status}</p>
    
       <button className="col-1  btn btn-primary "  id={"btn1"+val.bookid} 
       onClick={
         (e)=>{
           
             edit(e,1,index)  ;
             
               
                } }
         
       >edit</button>
       <button className="col-1  btn btn-danger" id={"btn2"+val.bookid}    onClick={
         (e)=>{
           
             edit(e,2)  ;
             
               
                } }
                >dl</button> 
       
       </li>

          )
          
        }
   
        </ul>
         
   
  
 </div>
</div>
</div>
)
}