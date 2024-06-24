import React from 'react';
import HeaderComponent from "../components/HeaderComponent";
import AboutComponent from "../components/AboutComponent";
import ServiceComponent from '../components/ServiceComponent';


function HomePage(){
  return (
    <div>
      <HeaderComponent />
      <AboutComponent />
      <ServiceComponent />
      <div>Home Page</div>
    </div>
  )
}

export default HomePage