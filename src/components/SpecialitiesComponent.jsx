// import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import React, { useRef, useState, useEffect } from 'react';


function SpecialitiesComponent ({articles}) {

  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef([]);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.className = index === activeIndex ? 'image-card active' : 'image-card';
      }
    });
  }, [activeIndex]);

  return (
    <section id="section-specialities">
      <div className="inner-section-container">
        <h2 className="section-title">Our Specialities</h2>
      </div>
      <Container>
        <Row>
          <Col>1 of 1</Col>
        </Row>
        <Row className="bottom-row">
          <Col className="bottom-col">
            {articles.map((article, index) => (
              <article
                key={index}
                className="image-card"
                onClick={() => handleClick(index)}
                ref={(el) => (cardsRef.current[index] = el)}
              >
                <Image
                  className="individual-image"
                  src={article.img_src}
                  alt="chef"
                />
                <div className="image-card-details">
                  <div className="card-profile">
                    <Image src=".././assets/service-image-two.jpg" alt="user" fluid />
                  </div>
                  <div className="card-profile-info">
                    <h2>Food Name</h2>
                    <p>Image description here</p>
                  </div>
                </div>
              </article>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}






// function SpecialitiesComponent ({articles}) {

//   const handleClick = (event)  => {
//     console.log(event)
//     if (event.currentTarget.className !== 'image-card active') {
//       event.currentTarget.className = 'image-card active';
//     } else {
//       event.currentTarget.className = 'image-card'
//     }
//   };



//   return (
//     <section id="section-specialities">
//       <div className="inner-section-container">
//         <h2 className="section-title">Our Specialities</h2>
//       </div>
//       <Container>
//           <Row>
//             <Col>1 of 1</Col>
//           </Row>
//           <Row className="bottom-row">
//             <Col className="bottom-col">
//               {
//                 articles.map((article) => (
//                   <article className="image-card" onClick={handleClick}>
//                     <Image
//                       className="individual-image"
//                       src=".././assets/service-image-three.jpg"
//                       alt="chef" />
//                     <div className="image-card-details">
//                       <div className="card-profile">
//                         <Image src=".././assets/service-image-two.jpg"  alt="user" fluid />
//                       </div>
//                       <div className="card-profile-info">
//                         <h2>Food Name</h2>
//                         <p>Image description here</p>
//                       </div>
//                     </div>
//                   </article>
//                 ))
//               }
//             </Col>
//           </Row>
//       </Container>
//     </section>
//   )
// }

export default SpecialitiesComponent;