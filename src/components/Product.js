import React from 'react'
import { useEffect,useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux'
import {addtocart,removefromcart} from '../store/cartSlice'

const Product = (props) => {
   console.log("prop",props);
   const dispatch=useDispatch()
    const getstore = useSelector(state=>state.cart);
    const [products,setproducts] =useState([]);

   const getProduct =async ()=>{
    let fetchproducts = await fetch(`https://dummyjson.com/products/category/${props.category}/?limit=12`);
    console.log(`https://dummyjson.com/products/category/${props.category}/?limit=12`);
    let parsedata = await fetchproducts.json();
    console.log("data",parsedata);
    setproducts(parsedata.products)
  }
  useEffect(()=>{
    getProduct();
  },[])

   const addToCartHandler=(product)=>{
       dispatch(addtocart(product))
   }

   const removefromcartHandler=(id)=>{
    dispatch(removefromcart(id))
   }
   const checkitemincart=(id)=>{
      let checkprod  = getstore.filter(prod=>prod.id===id);
       if(checkprod.length>0)
        return true;
      else
        return false;
   }
  return (
    <>
   <div className="row">
   {products && products.map((prod)=>{
        return (<div className="card mx-2 my-2" style={{width:'18rem'}} key={prod.id+prod.brand}>
        <img src={prod.thumbnail} className="card-img-top" alt="..."/>
       <div className="card-body">
           <h5 className="card-title">{prod.brand}</h5>
           <p className="card-text">{prod.description}</p>
           <p className="card-text">Price {prod.price}</p>
           <div className="btn-group" role="group" aria-label="Basic mixed styles example">
           {checkitemincart(prod.id)? (<button className="btn btn-danger mx-2" onClick={()=>removefromcartHandler(prod.id)}>Remove</button>
): (<button className="btn btn-warning mx-2" onClick={()=>addToCartHandler(prod)}>Add</button>)}
           <a href="/" className="btn btn-primary mx-2">View</a>
   
           </div>
   
       </div>
       </div>)
    })}
    </div>
    </>
      )
}

export default Product
