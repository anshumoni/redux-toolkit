import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {removefromcart} from './../store/cartSlice'
import shopingicon from './../assets/images/shopping-cart-297750_1280.webp' 
import UserSignin from './user/UserSignin'

const Minicart = (props) => { console.log("minicart",props);
    const dispatch = useDispatch();
    const cartdata = useSelector(state=>state.cart)
    const removefromcartHandler=(id)=>{
     dispatch(removefromcart(id))
 }

  return (
    <>
     <div className="dropdown">
     <img src={shopingicon} className="dropdown-toggle" data-bs-toggle="dropdown" alt="..." style={{width:"40px"}}/>
     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{marginLeft:"-102px"}}>
            {cartdata.length>1?cartdata.length-1:0}
            <span className="visually-hidden">unread messages</span>
        </span>
        <ul className="dropdown-menu" style={{marginLeft:'-30px'}}>
          {cartdata.map((prod)=>{
                  return (<li><div key={prod.id} style={{display:'flex'}} className='mx-2 my-2'>
                    <img src={prod.thumbnail} className="card-img-top" alt="..." style={{width:'80px'}}/>
                    <a className="dropdown-item" href="/">{prod.brand}</a>
                    <button className='btn btn-danger' onClick={()=>removefromcartHandler(prod.id)}>X</button></div></li>)
           })}
          
        </ul>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{marginLeft:"30px"}}>
          {props.user?`${props.user}`:`SignUp`}
     </button>
        
      </div>
    <div>
        
    </div>
    
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">User SignUp</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       <UserSignin/>
      </div>
      <div className="modal-footer">
        <h5 className="text-center">Already Existing User  Login</h5>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Minicart
