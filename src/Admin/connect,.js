
import axios from "axios"
import { json } from "react-router";
const link="http://localhost:8081"
export const addingbook=async(props)=>{
   var add=await axios.post(`${link}/add`,props);
      return alert(add.data)
 
}
export  const  listAll =async()=>{
  let listedval=await axios.get(`${link}/listALL`)
  return listedval;

}
export const Update=async(props)=>{
  let updateall=await axios.put(`${link}/updateadmin`,props)
  return (updateall.data)
}
export const Delete=async(props)=>{
  let Deleteid=await axios.delete( `${link}/deleteid/${props}`);
  return Deleteid.data;
  }

export const studentlist=async()=>{
  let lst=await axios.get( `${link}/viewbooks/`)
  return lst.data;
}
export const getingbook=async(props)=>{
  let get=await  axios.put(`${link}/getbook`,props);
  alert(get.data);
  window.location.assign("/Studenhome")
  return get.data;
}

export const liststudentcarts=async(props)=>{
   let listcart= await axios.get(`${link}/listcardsbystudent/${props}`);
   return listcart.data;
}

export const addstudentuser=async(prop)=>{
  alert(JSON.stringify(prop));
  let user=await axios.post(`${link}/addstudentuser`,prop)
  return alert(user.data);
}
export const submitbooks=async(val,today)=>{
  const monthdays = [1,2,3,4,5,6,7,8,9,10,11,12];
  const date=new Date;
  var month=date.getMonth();
  var year=date.getFullYear();
  const value=val.bookid;
  const todays=today
 let succesmsg = await axios.get(`${link}/submitbook/${value}/${todays+"-"+monthdays[month]+"-"+year}`)
 return succesmsg.data;
}
export const fetchnotification=async()=>{
  let notifyvalues=await axios.get(`${link}/getnotifications`)
  return notifyvalues.data;
}
export const acceptbookreq=async(id)=>{
  let accptreq=await axios.delete(`${link}/removebookonaccept/${id}`)
  
}
export const login=async(user,type)=>{
  if(type==="admin"){
    let adminuserdetail=await axios.post(`${link}/adminlogin`,user)
    if(adminuserdetail.data!=0){
      var getadminuserdetail=await axios.get(`${link}/getadmindetail/${adminuserdetail.data}`);
      var admin=JSON.stringify(getadminuserdetail.data);
      sessionStorage.setItem("adminuser",admin)  
      return "admin";}
    else{
      return "false"
    }  
  }
  else if(type==="student"){
    let userdetail=await axios.post(`${link}/login`,user)
    if(userdetail.data!=0){
      var getstudentdetail=await axios.get(`${link}/getstudentdetail/${userdetail.data}`);
      var student=JSON.stringify(getstudentdetail.data);
      sessionStorage.setItem("studentuser",student);
  
      return "student"
    }
    else{
      return "false"
  } 
  }
  
else{
  alert("please enter valid values")
}
}

