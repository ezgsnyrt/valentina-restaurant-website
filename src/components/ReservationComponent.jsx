
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { date, number, object, string } from 'yup';

let reservationSchema = object({
  name: string().required('Please enter a name!'),
  phone: string().required('Please enter a phone number!'),
  email: string().email('Please enter an email address!'),
  numberOfPeople: number().required('Please insert number of people!').moreThan(0, 'Number of people should be greater than or equal to 1'),
  date: date().required('Please select a date!'),
  time: string().required('Please select time!')
})

const ReservationComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    number_of_people: 2,
    date: '',
    time: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    phone: '',
    number_of_people: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    console.log(`name: ${name}, value: ${value}`)
    if (name === 'numberOfPeople') {
      if (value === '')
        value = 0;
      else
        value = Number(value);
    }
    console.log(`type: ${typeof value}`)
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (validateForm()) {
    //   console.log('Reservation Data:', formData);
    //   // Form submission logic here
    //   // axios.post
    // } else {
    //   console.log('Form validation failed');
    // }
  };

  return (
    <section id="section-reservation">
      <div className="inner-section-container">
        <h2 className="section-title">Reservations</h2>
      </div>
      <Container>
        <h2>Reservation</h2>
        <Formik
          initialValues={formData}
          validationSchema={reservationSchema}
          onChange={handleChange}
          onSubmit={values => {
            console.log("values: ", values)
          }}
        >
          {({ handleChange, handleSubmit, values, errors }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name and Surname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name and surname"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  isInvalid={errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formPeople">
                <Form.Label>Number of People</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter number of people"
                  name="numberOfPeople"
                  value={values.numberOfPeople}
                  onChange={handleChange}
                  isInvalid={errors.numberOfPeople}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.numberOfPeople}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={values.date}
                  onChange={handleChange}
                  isInvalid={errors.date}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.date}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formTime">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="time"
                  name="time"
                  value={values.time}
                  onChange={handleChange}
                  isInvalid={errors.time}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.time}
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </section>
  );
};

export default ReservationComponent;
