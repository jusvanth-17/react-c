import React,{useState,useEffect} from 'react'

import  axios from 'axios'
export const CRUD = () => {
    const[post,setPost]=useState([])
    const[id,setId]=useState()
    const[name,setName]=useState('')
    const[age,setAge]=useState()
    useEffect(()=>{
        axios.get('http://localhost:3001/Students')
        .then(res=>setPost(res.data))
        .catch(err=>console.log(err))
    })
    const handleSubmit=()=>{
        if(id == null || name == null || age == null)
        alert("Enter valid Data")
    else
        axios.post(`http://localhost:3001/Students`,{"id":id,"name":name,"age":age})
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    const handleDelete=(id) => {
        axios.delete(`http://localhost:3001/Students/${id}`)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    const[popup,setPopup]=useState(false)
    const[id1,setId1]=useState()
    const[name1,setName1]=useState('')
    const[age1,setAge1]=useState()

    const openpopup=(datas)=>{
        setPopup(true)
        setId1( datas.id)
        setName1( datas.name)
        setAge1(datas.age)
    }
    let handleupdate = () =>{
        axios.put(`http://localhost:3001/Students/${id1}`,{
            "id":id1,
            "name":name1,
            "age":age1})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>ID:</label>
            <input type="number" value={id} onChange={(e)=>setId(e.target.value)}/><br></br>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br></br>
            <label>Age</label>
            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}/><br></br>
            <button type='submit'>submit</button>

        </form >
        <table>
             <thead>
                   <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                   </tr>
             </thead>
             <tbody>
                {post.map(x=>(
                <tr>
                      <td>{x.id}</td>
                      <td>{x.name}</td>
                      <td>{x.age}</td>
                      <td>
                        <button onClick={()=>{
                            openpopup(x)
                        } 
                        }>Update</button>  
                        <button onClick={()=>handleDelete(x.id)}>Delete</button>
                      </td>
                   </tr>
                   ))}
             </tbody>
         </table>
         {popup && 
         <div>  
            <form>
            <button onClick={()=>{setPopup(false)}}>X</button>
            <label>ID:</label>
            <input type="number" value={id1} onChange={(e)=>setId1(e.target.value)}/><br></br>
            <label>Name:</label>
            <input type="text" value={name1} onChange={(e)=>setName1(e.target.value)}/><br></br>
            <label>Age</label>
            <input type="number" value={age1} onChange={(e)=>setAge1(e.target.value)}/><br></br>
            <button type='submit' onClick={handleupdate}>submit</button>
        </form >
        </div>}    
    </div>
  )
}
