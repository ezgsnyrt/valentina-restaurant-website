import React from 'react';
import HeaderComponent from "../components/HeaderComponent";
import AboutComponent from "../components/AboutComponent";
import ServiceComponent from '../components/ServiceComponent';
import ChefComponent from '../components/ChefComponent';
import SpecialitiesComponent from '../components/SpecialitiesComponent';
import { useState } from 'react';


function HomePage(){
  const [articles,setArticles] = useState([
    {
      "img_src": ".././assets/service-image-one.jpg"
    },
    {
      "img_src": ".././assets/service-image-two.jpg"
    },
    {
      "img_src": ".././assets/service-image-three.jpg"
    }
  ])


  return (
    <div>
      <HeaderComponent />
      <AboutComponent />
      <ChefComponent />
      <SpecialitiesComponent articles={articles} />
      <ServiceComponent />
      <div>Home Page</div>
    </div>
  )
}

export default HomePage