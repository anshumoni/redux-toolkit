import React from 'react'
import style from './InputControl.module.css'

const InputControl = (props) => {
  return (
    <>
    <div className={style.container}>
      {props.label && <label>{props.name}</label>}
      <input {...props} />
     </div>
    
      
    </>
  )
}

export default InputControl
