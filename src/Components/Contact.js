import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MainButton } from './MainButton';

export const Contact = () => {

  const handle_submit = values => {
    console.log(values);
  }

  const validate_formik_form = Yup.object().shape({
    email: Yup.string()
      .required("Email required")
      .email("Invalid email"),
    name: Yup.string()
      .required("Name Required")
      .min(3, "Too short")
      .max(32, "Too long"),
    message: Yup.string()
      .required("Message required")
      .min(5, "Too short")
      .max(2000, "Too long")
  });

  return (
    <div className="contact" id="contact">
      <h3>Get in touch</h3>
      <p>If you need to contact me, please use this form or send me an email. You can also connect with me on social networks.</p>
      <div className="contact__form">
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: ""
          }}
          onSubmit={handle_submit}
          validationSchema={validate_formik_form}
        >
          {
            formikProps => (
              <>
              
              <Field 
                onChange={formikProps.handleChange}
                type="text"
                name="name"
                placeholder="John Doe"
                className="formik__field"
              />
              //error 
              <Field 
                onChange={formikProps.handleChange}
                type="email"
                name="email"
                placeholder="John_Doe@gmail.com"
                className="formik__field"
              />

              <MainButton preicon="fa fa-share" text="Send"/>
              </>
            )
          }
        </Formik>
      </div>
      <div className="contact__mainpane">

      </div>
    </div>
  )
}
