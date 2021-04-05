import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import SubCategory from '../components/categoryPageComponent/subCategory'
class Categories extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <NavBar/>
            <SubCategory/>
            </div>
         );
    }
}
 
export default Categories;