import'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
export const Homepage=()=>{
    const [data,setdate]=useState({
        "id":"1",
        "bookname":"2",
        "author":"3"
    })
    const [values,setvalues]=useState([])


    const set=(temp)=>{
        const{name,value}=temp.target
        setdate((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }
    const addit=()=>{
        alert(JSON.stringify(values))
        setvalues((old)=>{return[...old,data]})
    }

           
    return(
       <div className='container '>
          <div className='btn btn-primary d-block ' data-bs-toggle="collapse" data-bs-target="#colapse" >ADD</div>
           <div className='row mt-2 collapse show' id="colapse" > 
            <input className='form-control col ' name= "id"  placeholder='id' onChange={set}/>
            <input className='form-control col' name="bookname"  placeholder='bookname' onChange={set} />
            <input className='form-control col'name='author'     placeholder='author' onChange={set}/>
            <button className='btn btn-danger col' 
            onClick={addit}>Add it</button>    
           </div>
           <div>
            <table className='table table-primary table-stripped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>BOOK name</th>
                        <th>author</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        values.map((val)=>(
                            <>
                            <tr  className='bg-dark'>
                            <td>{val.id}</td>
                            <td>{val.bookname}</td>
                            <td>{val.author}</td>
                            </tr></>
                        )
                          
                        )
                    }
                </tbody>
            </table>
           </div>

       </div>
       
        
    )
}