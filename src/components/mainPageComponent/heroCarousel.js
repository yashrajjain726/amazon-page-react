import Carousel from 'react-bootstrap/Carousel'
import {useState} from 'react'
import HeroBanner from '../../img/heroBanner.jpg'

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={HeroBanner}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={HeroBanner}
           
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={HeroBanner}
          />
        </Carousel.Item>
      </Carousel>
    );
  }
