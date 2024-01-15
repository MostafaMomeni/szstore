import React from 'react'
import "./ShowCategory.css"
import ShowCategoryBox from './ShowCategoryBox/ShowCategoryBox'

export default function ShowCategory() {
  return (
    <>
    <div className="show-category-parent row m-auto">
    <ShowCategoryBox cover="Headphones.png" title="هدفون" count={2} link="هدفون"/>
    <ShowCategoryBox cover="mobile.png" title="موبایل" count={5} link="موبایل"/>
    <ShowCategoryBox cover="cpu.png" title="پردازنده" count={3} link="پردازنده"/>
    <ShowCategoryBox cover="Smart-Watch.png" title="ساعت هوشمند" count={1} link="ساعت-هوشمند"/>
    </div>
    </>
  )
}
