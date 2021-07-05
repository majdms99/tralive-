import React from 'react'
import image from './about.png.webp'
/*=>animation*/
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';
import Roll from 'react-reveal/Roll';
/*-- */
const About = () => {
    return (
       <div className='about' id='about'>
            <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-xs-12'>
                    <Fade left><img src={image} alt='about-'/></Fade>
                </div>
                <div className='col-lg-5 col-xs-12 about-box'>
                <Roll left> <p className='title'>About Us</p></Roll>
                    <Zoom right> <h1 className='heading'>Get ready for real time adventure</h1></Zoom>
                    <Fade right> <p className='text-p'>Let’s start your journey with us, your dream will come true. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p></Fade>
                    <RubberBand> <span className='link-btn-y'>Book Your Destination </span> </RubberBand>
                 </div>
            </div>
        </div>
       </div>
    )
}

export default About
