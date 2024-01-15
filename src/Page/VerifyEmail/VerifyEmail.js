import React from 'react'
import "./VerifyEmail.css"
import { Link } from 'react-router-dom'

export default function VerifyEmail() {

  const onInput = (e) =>{
    if(e.target.nextSibling){
      e.target.nextSibling.focus()
    }else{
      //fetch
    }
  }

  return (
   <>
   <div className='verify-email'>
    <div className='top-verify-email'>
        <h6 className='link-color'>رمز ارسال شده به ایمیل خود را وارد کنید</h6>
        <input type="text" maxLength={1} className='input-verify-email' onChange={(e)=> onInput(e)}/>
        <input type="text" maxLength={1} className='input-verify-email' onChange={(e)=> onInput(e)}/>
        <input type="text" maxLength={1} className='input-verify-email' onChange={(e)=> onInput(e)}/>
        <input type="text" maxLength={1} className='input-verify-email' onChange={(e)=> onInput(e)}/>
        <input type="text" maxLength={1} className='input-verify-email' onChange={(e)=> onInput(e)}/>
        <input type="text" maxLength={1} className='input-verify-email' onChange={(e)=> onInput(e)}/>
    </div>
    <button className='button-register'>برسی کد</button>
    <span className='back-link-verify-email'>ارسال دوباره رمز</span>
    <Link to="/login" className='back-link-verify-email'>بازگشت</Link>
   </div>
   </>
  )
}
