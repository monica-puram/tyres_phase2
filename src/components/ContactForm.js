import React from 'react';
import { Formik} from 'formik';
import * as Yup from 'yup';
import "../css/contactForm.css";

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
          setSubmitting(true);
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
        <form className="contactUsForm" onSubmit={handleSubmit}>
          <h1 className = "formHeading">Please submit your enquires :</h1>
          <div className = "fieldGroup"> 
            <label htmlFor="firstName" className = "formLabels">FirstName</label>
            <input
             type="firstName"
            name="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
            placeholder="Enter FirstName"
            className={errors.firstName && touched.firstName ? "has-error" : "inputs"}
          />
          {errors.firstName && touched.firstName && errors.firstName}
          </div>
         
          <div className = "fieldGroup">
            <label htmlFor="lastName" className = "formLabels">LastName</label>
            <input 
              type="lastName"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              placeholder="Enter LastName"
              className={errors.lastName && touched.lastName ? "has-error" : "inputs"}
            />
            {errors.lastName && touched.lastName && errors.lastName}
          </div>

          <div className = "fieldGroup">
            <label htmlFor="email" className = "formLabels">Email</label>
            <input 
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Enter your email address"
              className={errors.email && touched.email ? "has-error" : "inputs"}
            />
            {errors.email && touched.email && errors.email}
          </div>

          <div className = "fieldGroup">
            <label htmlFor="contact" className = "contactInfo">Contact#</label>
            <input 
              type="contact"
              name="contact"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.contact}
              placeholder="Enter contact number"
              className={errors.contact && touched.contact ? "has-error" : "inputs"}
            />
            {errors.contact && touched.contact && errors.contact}
          </div>

          <div className = "fieldGroup">
            <label htmlFor="country" className = "formLabels">Country</label>
            <input 
              type="country"
              name="country"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.country}
              placeholder="Enter your nationality"
              className={errors.country && touched.country ? "has-error" : "inputs"}
            />
            {errors.country && touched.country && errors.country}
          </div>

          <div className = "fieldGroup">
            <label htmlFor="comments" className = "formLabels">Comments</label>
            <textarea 
              type="text-area"
              name="comments"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.comments}
              placeholder="Enter your comments here"
              className={errors.comments && touched.comments ? "has-error" : "inputs"}>
              </textarea>
            {errors.comments && touched.comments && errors.comments}
          </div>

         
        <div className= "submitBtn">
        <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </div>
          
        </form>
        
        </div>
      )}
    </Formik>
   </div>
);

export default ContactForm;