import React, {useState, useEffect} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MainButton } from './MainButton';
import config from '../config.json';
import emailjs from 'emailjs-com';
import emailconfig from '../emailconfig.json';

export const Contact = () => {
  const [sentEC, setSendEC] = useState(0);
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    fetch(`${config.dburl}social.json`, {mode: 'cors', header: {'Access-Control-Allow-Origin':'*'}})
      .then(res => {return res.json()})
      .then(stuff => setSocials(stuff))
      .catch(err => {
        console.log(err);
      })
  }, );

  const handle_submit = values => {
    emailjs
      .send(emailconfig.protocol, emailconfig.templateid, values, emailconfig.userid)
      .then(res => setSendEC(res.status))
      .then( () => {
        setTimeout( () => {
          setSendEC(0);
        }, 3000)
      })
      .catch(err => {
        setSendEC(err.status);
        setTimeout( () => {
          setSendEC(0);
        }, 3000)
      });
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
      <div className="contact__whole__container">
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
                <Form className="formik__form--container" onSubmit={formikProps.handleSubmit}>  
                  <h4>Name</h4>
                  <Field 
                    onChange={formikProps.handleChange}
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="formik__field"
                  />
                  <ErrorMessage name="name" component="div" className="error error-message"/>
                  <h4>Email</h4>
                  <Field 
                    onChange={formikProps.handleChange}
                    type="email"
                    name="email"
                    placeholder="John_Doe@gmail.com"
                    className="formik__field"
                  />
                  <ErrorMessage name="email" component="div" className="error error-message"/>
                  <h4>Message</h4>
                  <textarea 
                    onChange={formikProps.handleChange}
                    type="text"
                    name="message"
                    placeholder=""
                    className="formik__field"
                  />
                  <ErrorMessage name="message" component="div" className="error error-message"/>
                  <MainButton type="Submit" preicon="fa fa-share" text="Send"/>
                  {
                    sentEC > 0 ? sentEC === 200 ? <span className="emailResult__valid">Your message has been sent!</span> : <span className="emailResult__invalid">There was an error sending your message</span> : null
                  }
                </Form>
              )
            }
          </Formik>
        <div className="contact__mainpane">
            <h4>Email</h4>
            <p>acarbajal721@live.com</p>
            <h4>Phone</h4>
            <p>(503) 683-1721</p>
            <h4>Social</h4>
            <div className="social__container">
              {
                socials.map((item, i) => {
                  return (
                    <a key={i} href={item.to}><i className={item.icon}></i></a>
                  )
                })
              }
            </div>
        </div>
      </div>
    </div>
  )
}
