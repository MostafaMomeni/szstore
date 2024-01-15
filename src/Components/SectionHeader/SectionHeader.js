import React from 'react'
import "./SectionHeader.css"
import {AiOutlineArrowLeft} from "react-icons/ai"
import { Link } from 'react-router-dom'

export default function SectionHeader(props) {
  return (
    <div className='section-header-parent'>
        <h3 className='text-section-header'>{props.text}</h3>
        {props.button && (
          <Link className='btn-section-header' to={props.link}>{props.button} <AiOutlineArrowLeft/></Link>
        )}
    </div>
  )
}
