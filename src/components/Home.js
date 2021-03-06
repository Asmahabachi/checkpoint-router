import React from 'react'
import {Carousel} from 'react-bootstrap'

function Home() {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/5725972/pexels-photo-5725972.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/5686475/pexels-photo-5686475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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
      src="https://images.pexels.com/photos/9980465/pexels-photo-9980465.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Home
