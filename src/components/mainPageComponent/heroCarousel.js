import Carousel from 'react-bootstrap/Carousel'
import {useState} from 'react'

import Banner2 from '../../img/banner2.jpg'
import Banner3 from '../../img/banner3.jpg'

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
            src={Banner3}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner2}
           
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner3}
          />
        </Carousel.Item>
      </Carousel>
    );
  }
