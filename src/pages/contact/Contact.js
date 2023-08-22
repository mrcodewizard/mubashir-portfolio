import React, { useState } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebase/index";
import { contactSchema } from '../../validation/contact';
import Sidebar from '../../components/sidebar/Sidebar';
import "./contact.css";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
    const [values, setValues] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

  const handleChange = (event) => {
      const { name, value } = event.target;
      setValues(prevState => ({
        ...prevState,
        [name]: value
      }));
  };

  const handleSubmit =async  (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    try {
        await contactSchema.validate(values, { abortEarly: false });
        const docRef = await addDoc(collection(db, "contact-us"), {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message
        });
        console.log("Data added", docRef);
        toast.success("Your query has been sent successfully. We will reach out to you soon!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
    } catch(error) {
      if (error.name === 'ValidationError') {
          const validationErrors = {};
          error.inner.forEach(err => {
              validationErrors[err.path] = err.message;
          });
          setErrors(validationErrors);
          setLoading(false);
          setHasError(true);
      } else {
        setHasError(true);
        // Handle other errors
        console.error('Error adding data:', error);
      }
    }
    finally {
      setLoading(false);
      setValues({ email: '', name: '', subject: "", message: ""});
    }
  }
  
  return (
    <div>
          <ToastContainer />
         <Container>
          <Row>
            <Col md={12} lg={4}>
              <Sidebar />
            </Col>
            <Col md={12} lg={8}>
              <section className="portfolio">
                <h3 className="title">Contact Me</h3>
                <div className="portfolio-contact">
                      <Row>
                            <Col sm={12} md={6} lg={4}>
                                <div className="icon-box text-center">
                                      <div className="ib-icon">
                                            <span>
                                              <ion-icon name="headset-outline"></ion-icon>
                                            </span>
                                      </div>
                                      <div className="ib-info">
                                          <p className='mb-0'>+92 305 4424271</p>
                                          <p className='mb-0'>+92 313 6238460</p>
                                      </div>
                                </div>
                            </Col>

                            <Col sm={12} md={6} lg={4}>
                                <div className="icon-box text-center">
                                      <div className="ib-icon">
                                            <span>
                                              <ion-icon name="mail-outline"></ion-icon>
                                            </span>
                                      </div>
                                      <div className="ib-info">
                                        <p class="mb-0"><a href="#.">mubashirrahman503@gmail.com</a></p>
                                        <p class="mb-0"><a href="#.">mubashirlancerr@gmail.com</a></p>
                                      </div>
                                </div>
                            </Col>

                            <Col sm={12} md={6} lg={4}>
                                <div className="icon-box text-center">
                                      <div className="ib-icon">
                                            <span>
                                              <ion-icon name="home-outline"></ion-icon>
                                            </span>
                                      </div>
                                      <div className="ib-info">
                                          <p>12 Commercial broadway, Paragon City, Lahore</p>
                                      </div>
                                </div>
                            </Col>
                      </Row>
                </div>
              </section>

              <section className="portfolio-two">
                <h3 className="title">Say Hello</h3>
                <div className="portfolio-form">
                      <Row>
                          <Col md={12}>
                                <form role="form" name="contact-form" className='contact-form'
                                onSubmit={handleSubmit}>
                                      <div className="form-group">
                                          { errors.name ? <span className='error'>{errors.name}</span>: ""}
                                          <label htmlFor="">
                                            <input type="text" className={`form-control ${errors.name ? "is-invalid": ""}`} name="name" id="name_1"
                                            placeholder="NAME" value={values.name}  
                                            onChange={handleChange}/>
                                          </label>
                                      </div>

                                      <div className="form-group">
                                        { errors.email ? <span className='error'>{errors.email}</span>: ""}
                                          <label htmlFor="">
                                            <input type="email" className={`form-control ${errors.email ? "is-invalid": ""}`} name="email" id="name_1" 
                                            placeholder="EMAIL" value={values.email}
                                            onChange={handleChange}
                                            />
                                          </label>
                                      </div>

                                      <div className="form-group">
                                          { errors.subject ? <span className='error'>{errors.subject}</span>: ""}
                                          <label htmlFor="">
                                            <input type="text" className={`form-control ${errors.subject ? "is-invalid": ""}`} name="subject" id="name_1"
                                            placeholder="SUBJECT" value={values.subject}
                                            onChange={handleChange} />
                                          </label>
                                      </div>

                                      <div className="form-group">
                                      { errors.message ? <span className='error'>{errors.message}</span>: ""}
                                        <label>
                                            <textarea className={`form-control ${errors.message ? "is-invalid": ""}`} name="message" id="message_1" rows="5"
                                            placeholder="CONTENT..."
                                            value={values.message} onChange={handleChange}></textarea>
                                          </label>
                                      </div>

                                      <div className="button-group">
                                          <button type="submit" disabled={loading}>
                                              { loading ? <Spinner size='sm' /> : "Submit"}
                                          </button>
                                      </div>

                                </form>
                          </Col>
                      </Row>
                </div>
              </section>

            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Contact