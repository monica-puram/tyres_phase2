import React from 'react';
import { Formik} from 'formik';
import * as Yup from 'yup';
//import "../css/contactForm.css";
import {Form} from 'react-bootstrap';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().min(3, <p className="errField">Must have atleast 3 characters</p>).max(255, <p className="errField">Must be shorter than 255 characters</p>).required(<p className="errField">First name is mandatory</p>),
  lastName: Yup.string().min(1, <p className="errField">Must have atleast a character</p>).max(255, <p className="errField">Must be shorter than 255 characters</p>).required(<p className="errField">Last name is mandatory</p>),
  email: Yup.string().email(<p className="errField">Must be a valid email address</p>).max(255, <p className="errField">Must be shorter than 255 characters</p>).required(<p className="errField">Email address is mandatory</p>),
  contact: Yup.string().matches(/^[0-9]*$/).min(10, <p className="errField">Must be atleast 10 digit number</p>).max(15, <p className="errField">Cannot be greater than 15 digits, which includes extension and area code</p>).required(<p className="errField">Contact is mandatory</p>),
  country: Yup.string().min(4, <p className="errField">Country should at least be 4 characters</p>).max(255, <p className="errField">Must be shorter than 74 characters</p>),
  comments:Yup.string().max(1024, <p className="errField">Comments cannot be longer than 1024 characters</p>)
})

const ContactForm = () => (
  <div>
    <Formik
      initialValues={{ firstName: '', lastName:'', email: '', contact: '', country:'', comments: ''}}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <div className = "entireForm">
        <Form className="contactUsForm" onSubmit={handleSubmit}>
          <h1 className = "formHeading">Please submit your enquires :</h1>
          <Form.Group className = "fieldGroup"> 
            <Form.Label htmlFor="firstName" className = "formLabels">FirstName</Form.Label>
            <Form.Control
            
            name="firstName"
            onChange={handleChange}
            
            value={values.firstName}
            placeholder="Enter FirstName"
            className={errors.firstName && touched.firstName ? "has-error" : "inputs"}
          />
            
          {errors.firstName && touched.firstName && errors.firstName}
          </Form.Group>
         
          <Form.Group className = "fieldGroup">
            <Form.Label htmlFor="lastName" className = "formLabels">LastName</Form.Label>
            <Form.Control 
              type="lastName"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              placeholder="Enter LastName"
              className={errors.lastName && touched.lastName ? "has-error" : "inputs"}
            />
              
            {errors.lastName && touched.lastName && errors.lastName}
          </Form.Group>

          <Form.Group className = "fieldGroup">
            <Form.Label htmlFor="email" className = "formLabels">Email</Form.Label>
            <Form.Control 
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Enter your email address"
              className={errors.email && touched.email ? "has-error" : "inputs"}
            />
            {errors.email && touched.email && errors.email}
          </Form.Group>

          <Form.Group className = "fieldGroup">
            <Form.Label htmlFor="contact" className = "contactInfo">Contact#</Form.Label>
            <Form.Control 
              type="contact"
              name="contact"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.contact}
              placeholder="Enter contact number"
              className={errors.contact && touched.contact ? "has-error" : "inputs"}
            />
            {errors.contact && touched.contact && errors.contact}
          </Form.Group>

          <Form.Group className = "fieldGroup">
            <Form.Label htmlFor="country" className = "formLabels">Country</Form.Label>
            <Form.Control 
              type="country"
              name="country"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.country}
              placeholder="Enter your nationality"
              className={errors.country && touched.country ? "has-error" : "inputs"}
            />
            {errors.country && touched.country && errors.country}
          </Form.Group>

          <Form.Group className = "fieldGroup">
            <Form.Label htmlFor="comments" className = "formLabels">Comments</Form.Label>
            <Form.Control 
              as = "textarea"
              name="comments"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.comments}
              placeholder="Enter your comments here"
              className={errors.comments && touched.comments ? "has-error" : "inputs"}/>
              
            {errors.comments && touched.comments && errors.comments}
          </Form.Group>

         
        <div className= "submitBtn">
        <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </div>
          
        </Form>
        
        </div>
      )}
    </Formik>
   </div>
);

export default ContactForm;