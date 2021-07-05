import React from 'react'
import Image from './f.webp'
import './Footer.css'
import {Twitter, Facebook, Instagram, Linkedin} from 'react-feather'/*icons*/
const Footer = () => {
    return (
        <footer id='contact'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-xs-12'>
                        <div className='f-logo'>
                            <img src={Image}alt='im'/>
                        </div>
                        <p className='f-text'>Land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning laboris nisi ufsit aliquip.</p>
                        <div className='icons'>
                            <Facebook className='icon'/>
                            <Instagram className='icon'/>
                            <Linkedin className='icon'/>
                            <Twitter className='icon'/>
                        </div>
                    </div>

                    <div className='col-lg-2 col-md-6 col-xs-12'>
                        <h3 className='f-heading'>Navigation</h3>
                        <div className='f-nav'>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Blog</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-lg-2 col-md-6 col-xs-12'>
                    <h3 className='f-heading'>Services</h3>
                        <div className='f-nav'>
                            <ul>
                                <li>Blackforest</li>
                                <li>Bodhubon</li>
                                <li>Rongdhonu</li>
                                <li>Meghrong</li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6 col-xs-12'>
                    <h3 className='f-heading'>Contact us</h3>
                    <p className='pa'>76/A, Green Lane, Dhanmondi, NYC</p>
                    <p className='pa'>demomail89@gmail.com</p>
                    <p className='f-number'>+10 (78) 738-9083</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='copyright'>
                <p >Copyright 2021Design by:<br/> <span className='name-d'> Majd Mohammed Salameh</span></p>
            </div>
          
        </footer>
    )
}

export default Footer
