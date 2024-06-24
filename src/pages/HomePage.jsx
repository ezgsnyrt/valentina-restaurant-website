import React from 'react';
import HeaderComponent from "../components/HeaderComponent";
import AboutComponent from "../components/AboutComponent";
import ServiceComponent from '../components/ServiceComponent';
import ChefComponent from '../components/ChefComponent';


function HomePage(){
  return (
    <div>
      <HeaderComponent />
      <AboutComponent />
      <ChefComponent />
      <ServiceComponent />
      <div>Home Page</div>
    </div>
  )
}

export default HomePage