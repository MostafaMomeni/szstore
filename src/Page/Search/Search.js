import React from 'react'
import "./Search.css"
import CartBox from "../../Components/CartBox/CartBox"
import { useParams } from 'react-router-dom'

export default function Search() {

    const param = useParams().key

  return (
    <>
    <div className='top-search-parent'>
        <h3 className='text-left-product-info'>جست و جو برای {param}</h3>
        <p className='text-left-product-info'>15 نتیجه یافت شد</p>
    </div>
    <div className='main-search-parent'>
    <CartBox category="هدفون" cover="headphone-2.png" price={180000} title="هدفون فلان" off={150000} numberOff={20}/>
        <CartBox category="هدفون" cover="headphone-3.png" price={200000} title="هدفون فلان 2"/>
        <CartBox category="هدفون" cover="headphone-4.png" price={18000} title="هدفون فلان 3"/>
        <CartBox category="موبایل" cover="ipad-1.png" price={150000} title="آیپد"/>
        <CartBox category="موبایل" cover="mobile-2.png" price={350000} title="موبایل"/>
        <CartBox category="موبایل" cover="mobile-3.png" price={100000} title="موبایل فلان"/>
        <CartBox category="پردازنده" cover="cpu-3.png" price={250000} title="پردازنده" off={200000} numberOff={20}/>
        <CartBox category="پردازنده" cover="cpu-2.png" price={160000} title="پردازنده فلان"/>
    </div>
    </>
  )
}
