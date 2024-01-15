import React from 'react'
import "./Home.css"
import SliderHeader from '../../Components/SliderHeader/SliderHeader'
import ShowCategory from '../../Components/ShowCategory/ShowCategory'
import TrendingProducts from '../../Components/TrendingProducts/TrendingProducts'
import Suggestions from '../../Components/Suggestions/Suggestions'
import DiscountOfTheDay from '../../Components/DiscountOfTheDay/DiscountOfTheDay'
import Brands from '../../Components/Brands/Brands'
import NewProducts from '../../Components/NewProducts/NewProducts'
import Newsletter from '../../Components/NewsLetter/Newsletter'

export default function Home() {
  return (
    <>
    <SliderHeader/>
    <ShowCategory/>
    <TrendingProducts/>
    <br /><br />
    <Suggestions/>
    <br /><br /><br />
    <DiscountOfTheDay/>
    <br />
    {/* <Brands/> */}
    <br />
    <NewProducts/>
    <br /><br />
    <Newsletter/>
    <br />
    </>
  )
}
