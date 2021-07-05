import React from 'react'
import './ImageHome.css'
import Image from './car.png'
const ImageHome = () => {
    return (
        <div className='img-home'>
            <div className='container'>
                <div className='image'>
                    <img src={Image} alt='im'/>
                </div>
            </div>
        </div>
    )
}

export default ImageHome
