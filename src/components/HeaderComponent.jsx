import React from "react";
import NavbarComponent from "./NavbarComponent";
import Carousel from "react-bootstrap/Carousel";

function HeaderComponent() {
  return (
    <header>
      <NavbarComponent />
      <Carousel data-bs-theme="dark">
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src=".././assets/header-image-one.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Valentina Restaurant</h5>
            <p>Where culinary artistry meets extraordinary dining experiences</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={6000}>
          <img
            className="d-block w-100"
            src=".././assets/header-image-two.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={6000}>
          <img
            className="d-block w-100"
            src=".././assets/header-image-three.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={6000}>
          <img
            className="d-block w-100"
            src=".././assets/header-image-four.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    </header>
  );
}

export default HeaderComponent;

// Photo by <a href="https://unsplash.com/@lepalacemarrakech?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Le Palace Marrakech</a> on <a href="https://unsplash.com/photos/a-woman-sitting-at-a-table-with-wine-glasses-iR7i9klCjnQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@jaywennington?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jay Wennington</a> on <a href="https://unsplash.com/photos/dish-on-white-ceramic-plate-N_Y88TWmGwA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@angelopantazis?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Angelo Pantazis</a> on <a href="https://unsplash.com/photos/white-and-brown-bread-on-gray-round-plate-XHuU_xVaNHg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@impatrickt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Patrick Tomasso</a> on <a href="https://unsplash.com/photos/brown-themed-bar-GXXYkSwndP4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@alexhaney?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alex Haney</a> on <a href="https://unsplash.com/photos/woman-in-white-shirt-eating-CAhjZmVk5H4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by Expect Best: https://www.pexels.com/photo/wine-glasses-and-wine-bottles-on-top-of-brown-wooden-table-1243337/
// Photo by <a href="https://unsplash.com/@jimiburg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jimi Filipovski</a> on <a href="https://unsplash.com/photos/white-ceramic-plate-0VRwj7rYnQI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@wonderland8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Oleksii S</a> on <a href="https://unsplash.com/photos/clear-drinking-glasses-on-table-85QELRMFdBM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@vasil_korzh?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Vasil Korzh</a> on <a href="https://unsplash.com/photos/wine-bottle-and-wine-glass-on-table-cr1Ej9coMDc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
