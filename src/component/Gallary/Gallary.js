import React from 'react'
import Slider from 'react-slick'
import {ImageGallary} from '../../InfoFolder/ImageGallary'
import './Gallary.css'
const Gallary = () => {
    var settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
              speed: 1000,
              autoplaySpeed: 1000,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1,
              speed: 2000,
             autoplaySpeed: 2000,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              speed: 2000,
              autoplaySpeed: 2000,
            }
          }
        ]
      };
    return (
        <div className='gallary'>
              <Slider {...settings}>
                  {ImageGallary.map(item => {
                      return (
                        <div>
                           {/* import images from fille    */}
                        <img src={item.image}alt='im'/>            
                    </div>
                      )
                  })}
                 
              </Slider>
        </div>
    )
}

export default Gallary
