import React,{useState,useEffect} from 'react'
import Navbar from './components/Navbar';
import Product from './components/Product';
import { BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  const [category,setcategory] =useState([]);
  const getCategory =async ()=>{
     let fetchcat = await fetch('https://dummyjson.com/products/categories');
     let parsedata = await fetchcat.json();
     setcategory(parsedata.splice(0,7));
     
  }

  useEffect(()=>{
     getCategory();
 },[]);

  
  return (
    <>
    <div className='container'>
    <BrowserRouter>
      <Navbar/>
      <h1 className='text-center'>Ganpati Goods</h1>
      <Routes>
      {category.map((element)=>{
        return (<Route key={element} path={`/${element}`} element={<Product category={element}/>}> </Route>)
      })}
      </Routes>
      </BrowserRouter> 
     
    </div>
    </>
  );
}

export default App;
