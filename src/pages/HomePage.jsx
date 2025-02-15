import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import AboutComponent from "../components/AboutComponent";
import ServiceComponent from "../components/ServiceComponent";
import ChefComponent from "../components/ChefComponent";
import SpecialitiesComponent from "../components/SpecialitiesComponent";
import ReservationComponent from "../components/ReservationComponent";
import ContactComponent from "../components/ContactComponent";
import { useState } from "react";
import NavbarComponent from "../components/NavbarComponent";

function HomePage() {
    const [articles, setArticles] = useState([
        {
            img_src: ".././assets/specialities-image-one.jpg",
        },
        {
            img_src: ".././assets/specialities-image-two.jpg",
        },
        {
            img_src: ".././assets/specialities-image-three.jpg",
        },
        {
            img_src: ".././assets/specialities-image-four.jpg",
        },
        {
            img_src: ".././assets/specialities-image-six.jpg",
        },
        {
            img_src: ".././assets/specialities-image-seven.jpg",
        },
        {
            img_src: ".././assets/specialities-image-eight.jpg",
        },
    ]);

    return (
        <>
            <div style={{ position: "sticky", top: "0", zIndex: "1050" }}>
                <NavbarComponent />
            </div>
            <header id="home">
                <HeaderComponent />
            </header>
            <section id="about">
                <AboutComponent />
            </section>
            <section id="chefs">
                <ChefComponent />
            </section>
            <section id="menu">
                <SpecialitiesComponent articles={articles} />
            </section>
            <section id="services">
                <ServiceComponent />
            </section>
            <section id="reservation">
                <ReservationComponent />
            </section>
            <section id="contact">
                <ContactComponent />
            </section>
            <div className="pt-5 ps-2 pe-2" style={{ backgroundColor: "#000000", color: "#ffffff", fontSize: "1.2rem"}}>
                <p className="mb-0 pb-4 mt-5 text-md-center">Designed and created by Ezgi Senyurt-Erturk © 2024. All rights reserved.</p>
            </div>
        </>
    );
}

export default HomePage;

//<a href="https://www.vecteezy.com/free-photos/elegant-food">Elegant Food Stock photos by Vecteezy</a>
//<a href="https://www.vecteezy.com/free-photos/elegant-food">Elegant Food Stock photos by Vecteezy</a>
//<a href="https://www.vecteezy.com/free-photos/chef">Chef Stock photos by Vecteezy</a>
//Photo by <a href="https://unsplash.com/@nahimaaparicio?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nahima Aparicio</a> on <a href="https://unsplash.com/photos/a-white-plate-topped-with-french-toast-covered-in-fruit-HO7RFYSsFfw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
//<a href="https://www.vecteezy.com/free-photos/nature-photography">Nature Photography Stock photos by Vecteezy</a>
//<a href="https://www.vecteezy.com/free-photos/veg">Veg Stock photos by Vecteezy</a>
//<a href="https://www.vecteezy.com/free-photos/dish">Dish Stock photos by Vecteezy</a>
//<a href="https://www.vecteezy.com/free-photos/ai-generated">Ai Generated Stock photos by Vecteezy</a>
//<a href="https://www.vecteezy.com/free-photos/ai">Ai Stock photos by Vecteezy</a>