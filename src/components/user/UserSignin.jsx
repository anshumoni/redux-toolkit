import React, { useState } from 'react'
import InputControl from './../InputControl/InputControl'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from './../../firebase'

const UserSignin = () => {
    const [user,setUser]=useState({
        username:"",
        email:"",
        password:""
    })
  const [error,setError]=useState(""); 
  const [islogin,setIslogin]=useState(false);

    const submitform =(e)=>{
        if(user.username==="" || user.email==="" ||user.password==="" ){
          setError("Please fill all detail")
        }
        setError("");
        setIslogin(false);
        createUserWithEmailAndPassword(auth,user.email,user.password).then(
            (res)=>{
                console.log("response",res)
                setIslogin(true);
                const userdisplay = res.user;
                updateProfile(userdisplay,{
                displayName:user.username
                })
            }
        ).catch(error=>{
            console.log("error",error)
            setError("Firebaseerror")
        })

    }
     /*   e.preventDefault();
        const {fname,lname,email,phone,username,password} = user;
        const response = await fetch("https://react-cart-b4418-default-rtdb.firebaseio.com/userdata.json",
                         {
                            method:"POST",
                          headers:{
                            "Content-Type":"application/json"
                          },
                          body:JSON.stringify({
                           fname,
                           lname,
                           email,
                           phone,
                           username,
                           password
                          })
                        });
        if(response){
            alert("Data store");
            setUser({
                fname:"",
                lname:"",
                email:"",
                phone:"",
                username:"",
                password:""
            })

        }                 
        */      
        
    
  return (
    <>
<div className="container">
    
    <div className='row'>
    <div className="col">
        <InputControl type="text" className="form-control my-3"
         placeholder="Name" name="username" value={user.name} 
         onChange={(event)=>setUser((prev)=>({...prev,username:event.target.value}))}/>
         </div>
    </div>
    <div className='row'>
    <div className="col">
    <InputControl type="text" className="form-control my-3" 
    placeholder="Email" name="email" value={user.email}
    onChange={(event)=>setUser((prev)=>({...prev,email:event.target.value}))}/>
   </div>
   </div>
    <div className='row'>

    <div className="col">
    <InputControl type="password" className="form-control my-3" 
    placeholder="Password" name="password" value={user.password}
    onChange={(event)=>setUser((prev)=>({...prev,password:event.target.value}))}/>
    </div>
    </div>
    <div className='row'>
        <h4 style={{color:'red'}}>{error!==''?error:''}</h4>
    </div>
    <div className='row my-5'>
    <div className="col text-center">
        <button className='btn btn-primary' disabled={islogin} onClick={submitform}>Submit</button></div>

    </div>
    
</div>
    </>
  )
}

export default UserSignin
