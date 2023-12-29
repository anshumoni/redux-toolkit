import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Minicart from './Minicart';

const Navbar = (props) => {
  let location = useLocation();
    const [category,setcategory] =useState([]);
     const getCategory =async ()=>{
        let fetchcat = await fetch('https://dummyjson.com/products/categories');
        let parsedata = await fetchcat.json();
        setcategory(parsedata.splice(0,7));
        
     }

     useEffect(()=>{
        getCategory();
    },[location]);
  
  const capitalize=(word)=>{
      let wordlower = word.toLowerCase();
      return wordlower.charAt(0).toUpperCase()+wordlower.slice(1);
  } 
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Ganapati goods</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {category.map((element)=>
             (<li className="nav-item" key={element}>
              <Link className={`nav-link ${location.pathname}==='/'${element}?"active":""`} aria-current="page" to={element}>{capitalize(element)}</Link>
          </li>))
        }
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <Minicart user={props.user}/>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar