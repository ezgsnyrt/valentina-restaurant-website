import React from 'react';
// import NavbarComponent from "../components/NavbarComponent";
import HeaderComponent from "../components/HeaderComponent";
import AboutComponent from "../components/AboutComponent";


function HomePage(){
  return (
    <div>
      <HeaderComponent />
      <AboutComponent />
      <div>Home Page</div>
    </div>
  )
}

export default HomePage