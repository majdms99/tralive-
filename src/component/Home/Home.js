import React from 'react'
import './Home.css'
/* => animation*/
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom';
/*-----*/
const Home = () => {
    return (
        <div className='home' di='home'>
            <div className='container'>
                <div className='text'>
                    <Fade right> <h1 className='heading'>Lifelong memories just a <br/><span>few seconds away </span></h1></Fade>
                    <Fade left>  <p>Let's start your jorney with us, your dream will come true</p></Fade>
                     <Zoom top><span className='link-btn-blue'>Explre Destinations </span></Zoom> 
                </div>
            </div>
        </div>
    )
}

export default Home
