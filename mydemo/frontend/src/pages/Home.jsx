import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import WhoAreWe from '../components/WhoAreWe'
import Team from '../components/Team'
// import Reseevation from '../components/Reseevation'
import Reservation from '../components/Reservation'
import Footer from '../components/Footer'



const Home = () => {
  return (
<div>
<HeroSection/>
  <About/>
  <Qualities/>
  <Menu/>
  <WhoAreWe/>
  <Team/>
  {/* <Reseevation/> */}
  <Reservation/>
  <Footer/>
  
</div>
  )
}

export default Home