import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import '../../App.css';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';

function Home() {
    return (
        <div>
            <HeroSection />
            <Cards />
            <Footer/>
        </div>
    )
}

export default Home;
