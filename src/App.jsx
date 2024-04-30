import React, { useState } from 'react'
import styles from './Style'
import Navbar from './components/Navbar'
import HeroSection1 from './components/HeroSection1'
import HeroSection2 from './components/HeroSection2'
import MapSection from './components/MapSection'
import Help from './components/Help'
import Footer from './components/Footer'
import Faculty from './pages/Faculty'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Popup from './components/Popup'
import Academics from './pages/Academics'


const App = () => {
  // const [isLoggedIn  ,setIsLoggedIn]  = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
    {showPopup && <Popup onClose={handleClosePopup} />}
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/faculties' element={<Faculty/>}/>
            <Route path='/students' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/academics' element={<Academics/>}/>
            </Routes>  
           </div>
           
    //   </div>


    // </div>
  )
}

export default App