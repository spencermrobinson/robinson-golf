import React, { Component } from 'react';
import Slider from 'react-slick';
import  one  from './carousel-assets/1.jpg'
import  two  from './carousel-assets/2.jpg'

class Carousel extends Component{


    render(){
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
          };
        return(
            <div>
            <Slider {...settings}>
            <div>
                <img src={one} alt=""/>
            </div>
            <div>
                <img src={two} alt=""/>
            </div> 
        
        </Slider>
        </div>
        )
    }
}
export default Carousel;