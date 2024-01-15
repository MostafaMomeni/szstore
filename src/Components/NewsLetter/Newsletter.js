import React from 'react'
import "./Newsletter.css"

export default function Newsletter() {
  return (
    <>
    <div className='news-letter-parent'>
        <div className='text-news-letter'>عضویت در خبرنامه</div>
        <div className='text-box-news-letter'>
            <input type="text" className='input-news-letter' placeholder='ایمیل خود را بنویسید' />
            <button className='btn-news-letter'>ارسال</button>
        </div>
    </div>
    </>
  )
}
