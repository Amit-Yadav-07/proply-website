import React from 'react'
import Carousel from './Carousel'
// import PropertyProMegaNav from './PropertyProMegaNav'
// import ProfessionalMegaMenu from './ProfessionalMegaMenu'
import EnhancedTwoSectionNavbar from './EnhanceNavbar'
import TabbedCardList from './TabbedCardList'
import ThreeDImageListSlider from './ThreeDImageListSlider'
import ServicesCardList from './ServiceCardList'
import Footer from './Footer'
import Testimonials from './Testimonials'

const Home = () => {
    return (
        <>

            <EnhancedTwoSectionNavbar />
            <Carousel />
            <TabbedCardList />
            <ThreeDImageListSlider />
            <ServicesCardList />
            <Testimonials />
            <Footer />





        </>
    )
}

export default Home