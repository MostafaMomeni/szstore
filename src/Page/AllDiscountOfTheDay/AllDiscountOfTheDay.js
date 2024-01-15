import React from 'react'
import "./AllDiscountOfTheDay.css"
import OfferCartBox from '../../Components/OfferCartBox/OfferCartBox'

export default function AllDiscountOfTheDay() {
  return (
    <>
    <div className='all-discount-of-the-day-parent'>
    <h2 className='text-left-product-info'>تخفیف محدود</h2>
    <div className='cart-all-discount-of-the-day-parent'>
    <OfferCartBox title="پردازنده فلان" shortName="پردازنده-فلان" cover="cpu-3.png" price={9000000} category="پردازنده" currentDate="2024/12/7"/>
    <OfferCartBox title="هدفون فلان" shortName="هدفون-فلان" cover="headphone-3.png" price={753000} category="هدفون" currentDate="2024/12/10" off={500000}/>
    <OfferCartBox title="موبایل سامسونگ" shortName="موبایل-سامسونگ" cover="mobile-3.png" price={1560000} category="موبایل" currentDate='2024/12/20'/>
    <OfferCartBox title="پردازنده اینتل" shortName="پردازنده-اینتل" cover="cpu-2.png" price={5400000} category="پردازنده" currentDate="2024/12/15"/>
    <OfferCartBox title="هدفون ایسوز" shortName="هدفون-ایسوز" cover="headphone-4.png" price={2000000} category="هدفون" currentDate="2024/12/6"/>
    <OfferCartBox title="موبایل اپل" shortName="موبایل-اپل" cover="mobile-2.png" price={180000} category="موبایل" currentDate="2024/12/2"/>
    </div>
    </div>
    </>
  )
}
