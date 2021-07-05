import React from 'react'
import Slider from 'react-slick'
import {Slide} from '../../InfoFolder/Slide'
import './SlideImg.css'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom';
const SlideImg = () => {
    var settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 1000,
              speed: 1000,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
             autoplaySpeed: 2000,
             speed: 1000,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplaySpeed: 2000,
              speed: 1000,
            }
          }
        ]
      };
      return (
        <div className='slider'>
         <div className='container'>
            <div className='box-slide text-center'>
               <Fade left><p className='title'>Check Our Best Promotional Tour</p></Fade> 
                <Zoom top><h1 className='heading'>Upcoming Events</h1></Zoom>
            </div>
          <Slider {...settings}>
            {Slide.map(item=>{
                return(
                    <div className='card-slide'>
                        <img className='image-slide' src={item.image} alt='im'/>
                        <div className='slide-text'>
                            <h5 className='heading-slide'>{item.title}</h5>
                            <span className='amount'>{item.amount}</span>
                            <p className='date'>{item.date}</p>
                            <span className='time'>{item.time}</span>
                        </div>
                    </div>
                )
            })}
          </Slider>
         </div>
        </div>
      );
}

export default SlideImg
