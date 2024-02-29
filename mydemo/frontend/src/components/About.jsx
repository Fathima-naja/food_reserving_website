import React from 'react'
import {Link} from "react-router-dom"
import {HiOutlineArrowRight} from 'react-icons/hi'

const About = () => {
  return (
   <section className='about' id='about'>

    <div className="container">
        <div className="banner">
            <div className="top">
                <h1 className='heading'>ABOUT US</h1>
                <p>the only thing we're serious about is food</p>
            </div>

            <p className='mid'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nihil debitis optio adipisci error odit accusantium natus veniam temporibus ad? Aut, incidunt! Quod officia eum, similique porro rerum inventore quisquam.
            </p>
            <Link to={"/"}>Explore Menu <span>
                <HiOutlineArrowRight/>
                </span></Link>
        </div>
        <div className="banner">
            <img src='/about.png' alt='about'/>
        </div>
    </div>

   </section>
  )
}

export default About