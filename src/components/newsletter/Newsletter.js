import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { collection, addDoc } from "firebase/firestore"; 
import { subscribeSchema } from '../../validation/subscribe';
import { db } from "../../firebase/index";
import "./newsletter.css";
import Loader from '../loader/Loader';
function Newsletter() {
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
        name: "",
        email: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        email: ""
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
        setErrors({ name: '', email: ''});

        try {
            await subscribeSchema.validate(values, { abortEarly: false });
            const docRef = await addDoc(collection(db, "subscribers"), {
              name: values.name,
              email: values.email
            });
            console.log("Data added", docRef);
            // Data added successfully

            toast.success("You've subscribed successfully !", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
           });
          } catch (error) {
            if (error.name === 'ValidationError') {
              // Handle validation errors
              const validationErrors = {};
              error.inner.forEach(err => {
                validationErrors[err.path] = err.message;
              });
              setErrors(validationErrors);
            } else {
              // Handle other errors
              console.error('Error adding data:', error);
            }
          } finally {
            setLoading(false);
            setValues({ email: '', name: ''});
          }
    }


  return (
    <div className='newsletter-section' id="newsletter">
        <h3 className="title">Newsletter</h3>
        {/* Use toast container to show message */}
        <ToastContainer />

        <Container>
            <Row>
                <Col sm={12}>
                    <div className='newsletter-column'>
                         <p>Want all the new content, tips and news from Mubashir, <em>Subscribe to the newsletter</em> </p>

                        { loading ? "Loading": "" }

                        <form onSubmit={handleSubmit}>
                            <Row>
                                 <Col md={5}>
                                        <label htmlFor="inputName">Name:</label>
                                        <input type="text" name="name" className={`form-control ${errors.name ? "is-invalid": ""}`}
                                        value={values.name} onChange={(e) =>handleChange(e)}/>

                                        { errors.name ? <span className='error'>{errors.name}</span>: ""}
                                 </Col>

                                 <Col md={5}>
                                        <label htmlFor="inputEmail">Email:</label>
                                        <input type="email" name="email" className={`form-control ${errors.email ? "is-invalid": ""}`}
                                        value={values.email} onChange={(e) => handleChange(e)} />

                                        { errors.email ? <span className='error'>{errors.email}</span>: ""}
                                 </Col>

                                 <Col md={2}>
                                        <button type="sbmit" className='btn btn-newsletter' disabled={loading}>
                                                { loading ? <Loader /> : "Submit" }
                                        </button>
                                 </Col>
                            </Row>
                        </form>

                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Newsletter