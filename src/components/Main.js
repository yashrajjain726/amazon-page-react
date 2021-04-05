import React, { Component } from 'react';
import LowerBanner from './lowerBanner';
import NavBar from './NavBar'
import HeroCarousel from './heroCarousel'
import CatergorySection from './CategorySection'
import FeatureSection from './featureSection'
class Main extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <NavBar/>
                
                <CatergorySection/> 
                <HeroCarousel/>
                <LowerBanner/>
                <FeatureSection/>
               
            </div>
          );
    }
}
 
export default Main;