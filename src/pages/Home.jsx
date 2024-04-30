import React from 'react'
import HeroSection1 from '../components/HeroSection1'
import HeroSection2 from '../components/HeroSection2'
import MapSection from '../components/MapSection'
import Help from '../components/Help'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import MapSection from '../components/MapSection'


const Home = () => {
  return (
    <div className='bg-black  text-white w-full overflow-hidden flex place-content-center'>
    <div className='p-12 max-w-4xl'>
    <div className='flex flex-col '>
    <Navbar/>
            <HeroSection1/>
            <HeroSection2/>
            <MapSection/>
            <Help/>
            
            {/* <Faculty/>     */}
    </div>
    
    <Footer/>
    </div>
    
    </div>
  )
}

export default Home