import React from 'react'
import "./BrandsBox.css"

export default function BrandsBox(props) {
  return (
    <>
    <a href="#" className='a-brand-box-parent'>
    <div className='brands-box-parent'>
    <img src={`./Assets/${props.cover}`} className='img-brands-box' alt="" />
    </div>
    </a>
    </>
  )
}
