import React, { Component } from 'react';
import LowerBanner from '../../img/lowerBanner.jpg'
class HeroSection extends Component {
    state = {  }
    render() { 
        return ( 
       
                <div  style={{marginTop:'1%'}}>
                                
              <img src={LowerBanner}style={{width:'100%'}} alt="" ></img>
            </div>
         );
    }
}
 
export default HeroSection;
