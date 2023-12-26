import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {removefromcart} from './../store/cartSlice'

const Minicart = (props) => {
    const dispatch = useDispatch();
    const cartdata = useSelector(state=>state.cart)
    const removefromcartHandler=(id)=>{
     dispatch(removefromcart(id))
 }

  return (
    <>
     <div className="dropdown">
     <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">        Cart Item
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartdata.length>1?cartdata.length-1:0}
            <span className="visually-hidden">unread messages</span>
        </span>
        </button>
        <ul className="dropdown-menu">
          {cartdata.map((prod)=>{
                  return (<li><div key={prod.id} style={{display:'flex'}} className='mx-2 my-2'>
                    <img src={prod.thumbnail} className="card-img-top" alt="..." style={{width:'80px'}}/>
                    <a className="dropdown-item" href="/">{prod.brand}</a>
                    <button className='btn btn-danger' onClick={()=>removefromcartHandler(prod.id)}>X</button></div></li>)
           })}
          <li><a className="dropdown-item" href="/">Another action</a></li>
          <li><a className="dropdown-item" href="/">Something else here</a></li>
        </ul>
      </div>
    <div>
        
    </div>
    </>
  )
}

export default Minicart
