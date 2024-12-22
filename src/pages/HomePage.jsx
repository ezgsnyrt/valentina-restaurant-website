import React from 'react';
import HeaderComponent from "../components/HeaderComponent";
import AboutComponent from "../components/AboutComponent";
import ServiceComponent from '../components/ServiceComponent';
import ChefComponent from '../components/ChefComponent';
import SpecialitiesComponent from '../components/SpecialitiesComponent';
import ReservationComponent from '../components/ReservationComponent';
import { useState } from 'react';


function HomePage(){
  const [articles,setArticles] = useState([
    {
      "img_src": ".././assets/specialities-image-one.jpg"
    },
    {
      "img_src": ".././assets/specialities-image-two.jpg"
    },
    {
      "img_src": ".././assets/specialities-image-three.jpg"
    },
    {
      "img_src": ".././assets/specialities-image-four.jpg"
    },
    {
      "img_src": ".././assets/specialities-image-five.jpg"
    },
    {
      "img_src": ".././assets/specialities-image-six.jpg"
    },
    {
      "img_src": ".././assets/specialities-image-seven.jpg"
    },
    {
      "img_src": ".././assets/specialities-image-eight.jpg"
    },
    {
      "img_src": ".././assets/specialities-image-nine.jpg"
    }
  ])


  return (
    <div>
      <HeaderComponent />
      <AboutComponent />
      {/* <ChefComponent />
      <SpecialitiesComponent articles={articles} />
      <ServiceComponent />
      <ReservationComponent /> */}
    </div>
  )
}

export default HomePage


//<a href="https://www.vecteezy.com/free-photos/elegant-food">Elegant Food Stock photos by Vecteezy</a>
//<a href="https://www.vecteezy.com/free-photos/elegant-food">Elegant Food Stock photos by Vecteezy</a>
//<a href="https://www.vecteezy.com/free-photos/chef">Chef Stock photos by Vecteezy</a>
//Photo by <a href="https://unsplash.com/@nahimaaparicio?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nahima Aparicio</a> on <a href="https://unsplash.com/photos/a-white-plate-topped-with-french-toast-covered-in-fruit-HO7RFYSsFfw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
//<a href="https://www.vecteezy.com/free-photos/nature-photography">Nature Photography Stock photos by Vecteezy</a>
//<a href="https://www.vecteezy.com/free-photos/veg">Veg Stock photos by Vecteezy</a>
//<a href="https://www.vecteezy.com/free-photos/dish">Dish Stock photos by Vecteezy</a>
//<a href="https://www.vecteezy.com/free-photos/ai-generated">Ai Generated Stock photos by Vecteezy</a>
//<a href="https://www.vecteezy.com/free-photos/ai">Ai Stock photos by Vecteezy</a>