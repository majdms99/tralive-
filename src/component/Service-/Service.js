import React from 'react'
import {ServiceInfo} from '../../InfoFolder/ServiceInfo'
import './Service.css'
import {Plus} from 'react-feather'
import image from './about2.png.webp'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

const Service = () => {
    return (
        <div className='service' id='service'> 
             <div className='container'>
                <div className='box-service text-center'>
                <Zoom top cascade> <p className='title'>FAQ</p> </Zoom>
                    <Fade right ><h1 className='heading'>Full range of travel service</h1></Fade>
                </div>
               <div className='row'>
                   <div className='col-lg-5 col-xs-12'>
                        {ServiceInfo.map(item => {
                           return(
                            <Bounce right > <p> <Plus className='icon'/>{item.title}</p> </Bounce>
                           )
                        })}
                   </div>
                   <div className='col-lg-6 col-xs-12'>
                   <Zoom right> <img src={image} alt='im'/></Zoom>
                   </div>
               </div>
               <Zoom top> <span className='link-btn-ys'>Book Your Destination </span></Zoom>
            </div>
        </div>
    )
}

export default Service
