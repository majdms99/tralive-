import {Link} from 'react-scroll'
import './Navbar.css'
import Logo from './logo.png.webp';
import {PhoneCall} from 'react-feather'
import { useState } from 'react'
import {AlignJustify, X} from 'react-feather'
const Navbar = () => {
//create state[fixed] for scroll//
    const [fixed, setFixed] = useState(false);
    const changeBackGround = () => {
        if(window.scrollY >= 30) {
            setFixed(true);
        }
        else {
            setFixed(false)
        }
    }
    window.addEventListener('scroll', changeBackGround);
//create state for mobile navigation //
    const [click, setClick] = useState(false);
    const changeClick =() => {
        setClick(!click)
    }
    return (
        <div className={fixed? 'nav-bar fixed' : 'nav-bar'}>
            <div className='container'>
                <div className='logo'>
                    <img src={Logo}alt='ige'/>
                </div>
                <div className='links'>
                    <ul className={click? 'nav-ul active' : 'nav-ul'}>
                        <li><Link to='home'> Home</Link></li>
                        <li><Link to='about'> About</Link></li>
                        <li><Link to='service'> Service</Link></li>
                        <li><Link to='custom'> Blog</Link></li>
                        <li><Link to='contact'> Contact</Link></li>
                    </ul>
                </div>
                <div className='number'>
                    <span> <PhoneCall/> +10 (67) 678 2567</span>
                </div>
                {/* toggle icons for navigation */}
                <div onClick={changeClick} className='nav-icon'>
                        {click? <X/> : <AlignJustify/>}
                </div>
            </div>
        </div>
    )
}

export default Navbar
