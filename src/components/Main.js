import React, { Component } from 'react';
import HeroSection from './heroSection';
import NavBar from './NavBar'
class Main extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <NavBar/>
                <HeroSection/>
            </div>
          );
    }
}
 
export default Main;