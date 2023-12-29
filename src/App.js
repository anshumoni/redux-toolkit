import React,{useState,useEffect} from 'react'
import Navbar from './components/Navbar';
import Product from './components/Product';
import { nanoid } from '@reduxjs/toolkit';

import { BrowserRouter,Route,Routes} from "react-router-dom";
import {auth} from './firebase'

function App() {
  const [category,setcategory] =useState([]);
  const getCategory =async ()=>{
     let fetchcat = await fetch('https://dummyjson.com/products/categories');
     let parsedata = await fetchcat.json();
     setcategory(parsedata.splice(0,7));
     
  }
  const [loginuser,setLoginuser]=useState(null);
  useEffect(()=>{
     getCategory();
     auth.onAuthStateChanged(user=>{
      console.log("user",user);
      if(user){
        setLoginuser(user.displayName)
        
      }else{
        setLoginuser(null)
      }
      console.log(user.displayName);
     })
 },[]);

  
  return (
    <>
    <div className='container'>
    <BrowserRouter>
      <Navbar user={loginuser}/>
      <h1 className='text-center'>Ganpati Goods</h1>
      <Routes>

      {category.map((element)=>{
        return (<Route key={nanoid()} path={element} element={<Product category={element}/>}> </Route>)
      })}
      <Route key={nanoid()} path='/' element={<Product category='skincare'/>}> </Route>
      </Routes>
      </BrowserRouter> 
     
    </div>
    </>
  );
}

export default App;
