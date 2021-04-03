import React, { Component } from 'react';
import heroBanner from '../img/heroBanner.jpg'
class HeroSection extends Component {
    state = {  }
    render() { 
        return ( 
       
                            <div className="heroSection">
                                
              <img src={heroBanner}style={{width:'100%'}} alt="" ></img>
            </div>
         );
    }
}
 
export default HeroSection;