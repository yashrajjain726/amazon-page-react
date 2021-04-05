import React, { Component } from 'react';
import LowerBanner from '../components/mainPageComponent/lowerBanner';
import NavBar from '../components/NavBar'
import HeroCarousel from '../components/mainPageComponent/heroCarousel'
import CatergorySection from '../components/mainPageComponent/CategorySection'
import FeatureSection from '../components/mainPageComponent/featureSection'
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