import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';
import '../css/carousel.css';



class BannerCarousel extends Component{
  render(){
    return(
      <Carousel className = "bannerCarousel">
          <Carousel.Item className = "carouselItem">
            <a href = "#"><Image
            className="d-block w-100"
              src={banner1}
            /></a>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className = "carouselItem">
            <a href = "#"><Image
            className="d-block w-100"
              src={banner2}
            /></a>

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className = "carouselItem">
            <a href = "#"><Image
            className="d-block w-100"
              src={banner3}
            /></a>

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
      )
  }
}


export default BannerCarousel;