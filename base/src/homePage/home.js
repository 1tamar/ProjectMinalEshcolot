import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import im1 from '../Pictures/הזמנה.jpg';
import im2 from '../Pictures/IMG_0024.JPG';
import im3 from '../Pictures/IMG_0020.png';
import "./home.css";



export default function Home() {
  return <>
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={im1}
          alt="First slide"
        // height='200px'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={im2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={im3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div class="aaaa">
      <img src={im1} class="circle">צפיה בפעילויות </img>
      <div class="circle">הוספת פעילות</div>
      <div class="circle">הסרת פעילות</div>
    </div>
  </>

}