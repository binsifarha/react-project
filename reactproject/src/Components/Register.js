import React,{usestate} from "react"
import {useHistory} from 'react-router-dom'

function Register()
{  
     const [name,setName]=usestate("");
     const [password,setPaswaord]=usestate("");
     const [email,setEmail]=usestate("");
     const history=useHistory();

     async function Signup()
     {
         let item={name,password,email}
         console.warn(item)

         let result =await fetch("https://randomuser.me/api/0.8/?results=20",{
             method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/jSON",
                "Accept":"application/jSON",
            }

         })
         result =await result.json()
         localStorage.setitem("user-info",JSON.stringify(result))
         history.push("/Home")
     }
    return(
        <div>
            <h1>Signup page</h1>
            <input type="text" value={name} onChange ={(e)=>setName(e.target.value)} classname="formcontrol" placeholder="name" />
            <br />
            <input type="password" value={password} onChange ={(e)=>setPaswaord(e.target.value)} classname="formcontrol" placeholder="password" />
            <br />
            <input type="text"  value={email} onChange ={(e)=>setEmail(e.target.value)} classname="formcontrol" placeholder="email" />
            <br />
            <button onClick={Signup} classname="btn btn-primary">Signup</button>
        </div>
    )
}

export default  Register