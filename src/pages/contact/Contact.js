import React, { useState, useRef } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import emailjs from '@emailjs/browser';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/index";
import { contactSchema } from "../../validation/contact";
import Sidebar from "../../components/sidebar/Sidebar";
import "./contact.css";

function Contact() {
  const formRef = useRef();
	const [loading, setLoading] = useState(false);
	const [values, setValues] = useState({
		user_name: "",
		user_email: "",
		user_subject: "",
		user_message: "",
	});
	const [errors, setErrors] = useState({
		user_name: "",
		user_email: "",
		user_subject: "",
		user_message: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setValues((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setErrors({
			user_name: "",
			user_email: "",
			user_subject: "",
			user_message: "",
		});

		try {
		await contactSchema.validate(values, { abortEarly: false });
			
      // service_72ja1mm
      // template_p22char
      // public_key: YSD5LxQ4Kub2qmdsO

      // send email to me
      const result = await emailjs.sendForm('service_72ja1mm', 'template_p22char', formRef.current, "YSD5LxQ4Kub2qmdsO")
      if(!result){
        console.log("Error sending");
      } else {
        console.log("Email sent succesfully", result);
      }

		const docRef = await addDoc(collection(db, "contact-us"), {
			name: values.user_name,
			email: values.user_email,
			subject: values.user_subject,
			message: values.user_message,
		});

      // console.log("Data added", docRef);

			toast.success(
				"Your query has been sent successfully. We will reach out to you soon!",
				{
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				}
			);
			setLoading(false);
			setValues({ user_email: "", user_name: "", user_subject: "", user_message: "" });
		} catch (error) {
			if (error.name === "ValidationError") {
				const validationErrors = {};
				error.inner.forEach((err) => {
					validationErrors[err.path] = err.message;
				});
				setErrors(validationErrors);
				setLoading(false);
			} else {
				// Handle other errors
				console.error("Error adding/sending email data:", error);
			}
		}
	};

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
												<p className="mb-0">+92 305 4424271</p>
												<p className="mb-0">+92 313 6238460</p>
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
												<p className="mb-0">
													<a href="#.">mubashirrahman503@gmail.com</a>
												</p>
												<p className="mb-0">
													<a href="#.">mubashirlancerr@gmail.com</a>
												</p>
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
										<form
											name="contact-form"
											className="contact-form"
											onSubmit={handleSubmit}
                      				ref={formRef}
										>
											<div className="form-group">
												{errors.user_name ? (
													<span className="error">{errors.user_name}</span>
												) : (
													""
												)}
												<label htmlFor="">
													<input
														type="text"
														className={`form-control ${
															errors.user_name ? "is-invalid" : ""
														}`}
														name="user_name"
														id="user_name"
														placeholder="NAME"
														value={values.user_name}
														onChange={handleChange}
													/>
												</label>
											</div>

											<div className="form-group">
												{errors.user_email ? (
													<span className="error">{errors.user_email}</span>
												) : (
													""
												)}
												<label htmlFor="">
													<input
														type="email"
														className={`form-control ${
															errors.user_email ? "is-invalid" : ""
														}`}
														name="user_email"
														id="user_email"
														placeholder="EMAIL"
														value={values.user_email}
														onChange={handleChange}
													/>
												</label>
											</div>

											<div className="form-group">
												{errors.user_subject ? (
													<span className="error">{errors.user_subject}</span>
												) : (
													""
												)}
												<label htmlFor="">
													<input
														type="text"
														className={`form-control ${
															errors.user_subject ? "is-invalid" : ""
														}`}
														name="user_subject"
														id="name_1"
														placeholder="SUBJECT"
														value={values.user_subject}
														onChange={handleChange}
													/>
												</label>
											</div>

											<div className="form-group">
												{errors.user_message ? (
													<span className="error">{errors.user_message}</span>
												) : (
													""
												)}
												<label>
													<textarea
														className={`form-control ${
															errors.user_message ? "is-invalid" : ""
														}`}
														name="user_message"
														id="message_1"
														rows="5"
														placeholder="CONTENT..."
														value={values.user_message}
														onChange={handleChange}
													></textarea>
												</label>
											</div>

											<div className="button-group">
												<button type="submit" disabled={loading}>
													{loading ? <Spinner size="sm" /> : "Submit"}
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
	);
}

export default Contact;
