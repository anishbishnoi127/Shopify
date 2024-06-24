import React from 'react'
import NavBar from './components/NavBar'
import MainSection from './components/MainSection'
import ExploreCategories from './components/ExploreCategories'
import FeaturedProducts from './components/FeaturedProducts'
import Gallery from './components/Gallery'
import BenifitSection from './components/BenifitSection'
import DescriptionSection from './components/DescriptionSection'
import FooterSection from './components/FooterSection'
import Usage from './components/Usage'

const HomePage = ({addToCart, cart}) => {
  console.log("cart from homepage", cart)
  
  return (
    <>

    <NavBar cart={cart} />
    <MainSection />
    <ExploreCategories />
    <Gallery/>
    <Usage />
    <FeaturedProducts addToCart={addToCart}/>
    <BenifitSection/>
    <DescriptionSection/>
    <FooterSection/>


    </>
  )
}

export default HomePage
