import React from 'react'
import Slider from 'react-slick'
import imageP from './p.webp'
import './Customers.css'
/*Slider settings*/
const Customers = () => {
    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        responsive: [
          {/* width 1024px*/
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
              speed: 3000,
              autoplaySpeed: 3000,
              
            }
          },
          {/*width <600px*/
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              speed: 3000,
             autoplaySpeed: 3000,
            }
          },
          {/*width <480*/
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 3000,
              autoplaySpeed: 3000,
            }
          }
        ]
      };
    return (
        
        <div className='customers text-center' id='custom'>
            <div className='container'>
                <Slider {...settings}>
                    <div className='box-cust'>
                        <h3 className='title-c'>What customers say</h3>
                        <p>Let’s start your journey with us, your dream will come true. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='img-box'>
                            <img className='img-pro'  src={imageP} alt='text'/>
                            <span className='name'>Mark Anthony</span>
                            <span className='job'>CEO</span>
                        </div>
                    </div>

                    <div className='box-cust'>
                        <h3 className='title-c'>What customers say</h3>
                        <p>Let’s start your journey with us, your dream will come true. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='img-box'>
                            <img className='img-pro' src={imageP} alt='text'/>
                            <span className='name'>Mark Anthony</span>
                            <span className='job'>CEO</span>
                        </div>
                    </div>

                    <div className='box-cust'>
                        <h3 className='title-c'>What customers say</h3>
                        <p>Let’s start your journey with us, your dream will come true. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='img-box'>
                            <img className='img-pro'  src={imageP} alt='text'/>
                            <span className='name'>Mark Anthony</span>
                            <span className='job'>CEO</span>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Customers
