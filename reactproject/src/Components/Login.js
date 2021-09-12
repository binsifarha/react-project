import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'   
import Home from './Components/Home';

function Login()
{
    const [password,setPaswaord]=usestate("");
    const [email,setEmail]=usestate("");
    const history=useHistory();
    useEffect(() => {
        if (localstorage.getitem("userinfo"))
        {
            history.push("")
        }
    }, [])
     
    async function Login()
    {
        let item={password,email};
        console.warn(item)

        let result =await fetch("https://randomuser.me/api/0.8/?results=20",{
            method:'POST',
            headers:{
               "Content-Type":"application/jSON",
               "Accept":"application/jSON",
           },
           body:JSON.stringify(item),

        });
        result = await result.json();
        localStorage.setitem("user-info",JSON.stringify(result))
        history.push("/Home")
     return(
        <div>
            <Home />
            <h1>Login page</h1>
        <div>
            <input type="password" value={password} onChange ={(e)=>setPaswaord(e.target.value)} classname="formcontrol" placeholder="password" />
            <br />
            <input type="text" value={email} onChange ={(e)=>setEmail(e.target.value)} classname="formcontrol" placeholder="email" />
            <br />
            <button onClick={Login} classname="btn btn-primary">Login</button>
        </div>
     </div>
     )
    }
    export default Login;
