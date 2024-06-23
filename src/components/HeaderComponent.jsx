import React from "react";
import NavbarComponent from "./NavbarComponent";
import Carousel from "react-bootstrap/Carousel";

function HeaderComponent() {
  return (
    <header>
      <NavbarComponent />
      <Carousel data-bs-theme="dark">
        <Carousel.Item interval={6000}>
          <img
            className="d-block w-100"
            src=".././assets/header-image-one.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={6000}>
          <img
            className="d-block w-100"
            src=".././assets/header-image-two.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={6000}>
          <img
            className="d-block w-100"
            src=".././assets/header-image-three.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
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
