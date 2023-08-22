import React, { useState, useTransition } from 'react'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

import Sidebar from '../../components/sidebar/Sidebar';
import Newsletter from '../../components/newsletter/Newsletter';
import "./about.css";

function About() {
  const[collapsed, setCollapse] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleCollapse = (num) => {
      startTransition(() => {
          setTimeout(() => {
            if(collapsed === num) {
              setCollapse(null);
            } else {
              setCollapse(num);
            }
          }, 200);
      });
  }
  return (
    <div>
        <Container>
            <Row>
               <Col md={12} lg={4}>
                  <Sidebar />
               </Col>
               <Col md={12} lg={8}>
                   <main className="prt-content">
                      <section className="prof-summary">
                          <h3 className="title">Professional Summary</h3>
                          <div className="content-inner">
                            <p className="content mt-3">I am a professional full stack developer with 4+ years of expertise. I specialize in React, Next.js, Node.js, Express, TypeScript, and databases like MongoDB and MySQL. From dynamic frontend UIs to robust backend APIs, my skills span the entire development cycle. 
                            I'm dedicated to delivering efficient, user-friendly, and modern solutions that drive impactful results.</p>
                            <p>I've had the privilege of collaborating with top e-commerce giants, including notable names like Movado, MVMT, and Olivia Burton. Through these experiences, I've gained insights into creating effective digital commerce solutions that cater to diverse customer needs and drive business success.
                            </p>
                            <p>My portfolio encompasses a diverse range of projects, spanning from business websites to judicial platforms and e-commerce sites. This breadth of experience reflects my ability to adapt and excel in varied domains, delivering tailored solutions that meet unique project requirements.</p>
                            
                          </div>
                      </section>

                      <section className="services">
                          <h3 className="title">Services</h3>

                          <div className="service-content content-inner">
                              <div className="row">
                                  <div className="col-12 col-sm-6 col-md-4">
                                      <div className="service-column">
                                          <div className="service-icon">
                                              <i class="i-service">
                                                <ion-icon name="logo-whatsapp"></ion-icon>
                                              </i>
                                          </div>
                                          <div className="service-body">
                                            <h4 className="service-title">WEB DEVELOPMENT</h4>
                                            <p>I provide web development services using React and Node.js to build responsive and user-friendly interfaces.</p>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-12 col-sm-6 col-md-4">
                                      <div className="service-column">
                                          <div className="service-icon">
                                              <i class="i-service">
                                                <ion-icon name="brush-outline"></ion-icon>
                                              </i>
                                          </div>
                                          <div className="service-body">
                                            <h4 className="service-title">E-COMMERCE SOlUTION</h4>
                                            <p>With 4+ years of diverse expereince, I will  develop specialized e-commerce solutions tailored to specific business needs.</p>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-12 col-sm-6 col-md-4">
                                      <div className="service-column">
                                          <div className="service-icon">
                                              <i class="i-service">
                                                <ion-icon name="bug-outline"></ion-icon>
                                              </i>
                                          </div>
                                          <div className="service-body">
                                            <h4 className="service-title">BUG FIXING</h4>
                                            <p>I will help to resolve frustrating bugs, glitches, or unexpected errors in your application. I'm here to assist you identify, diagnose, and resolve these issues swiftly and efficiently. </p>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-12 col-sm-6 col-md-4">
                                      <div className="service-column">
                                          <div className="service-icon">
                                              <i class="i-service">
                                                <ion-icon name="color-palette"></ion-icon>
                                              </i>
                                          </div>
                                          <div className="service-body">
                                            <h4 className="service-title">UNIQUE DESIGN</h4>
                                            <p>With a keen eye for design, I can seamlessly integrate creative elements that enhance your application's visual appeal and user engagement.</p>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-12 col-sm-6 col-md-4">
                                      <div className="service-column">
                                          <div className="service-icon">
                                              <i class="i-service">
                                                <ion-icon name="apps"></ion-icon>
                                              </i>
                                          </div>
                                          <div className="service-body">
                                            <h4 className="service-title">TRIAL PERIOD</h4>
                                            <p>To demonstrate the effectiveness of my services, I offer a trial period where you can witness firsthand the improvements I can bring to your software's functionality and aesthetics.</p>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-12 col-sm-6 col-md-4">
                                      <div className="service-column">
                                          <div className="service-icon">
                                              <i class="i-service">
                                                <ion-icon name="code-working"></ion-icon>
                                              </i>
                                          </div>
                                          <div className="service-body">
                                            <h4 className="service-title">CONSULATIONS & TRAINING</h4>
                                            <p>I offer consultation services for clients looking to start MERN stack projects, including architecture design and technology recommendations.</p>
                                          </div>
                                      </div>
                                  </div>

                              </div>
                          </div>
                      </section>

                      <section className="skills">
                          <h3 className="title">Skills</h3>

                          <div className='accordion-group skills-accordion'>
                                <div className="accordion accordion-default">
                                      <Row>
                                          <Col sm={4}>
                                          <div class="accordion-heading">
                                              <h4 class="accordion-title"> 
                                                  <a class={`${ collapsed === 1 ? "collapsed": ""}`} aria-expanded="false" onClick={ () => handleCollapse(1 )}> 
                                                      <i className="toggle-icon"><ion-icon name={`${ collapsed === 1 ? "remove": "add"}`}></ion-icon></i>
                                                      <span>HTML</span></a> 
                                              </h4>
                                            </div>
                                          </Col>
                                          <Col sm={8}>
                                                <div className={`accordion-body ${ collapsed === 1 ? "collapsed": ""}`}>
                                                       <ProgressBar now={90} />
                                                       {
                                                        <p>Craft visually appealing and structurally sound HTML layouts that form the foundation of your web applications.</p>
                                                       }
                                                </div>
                                                
                                          </Col>
                                      </Row>

                                      <Row>
                                          <Col sm={4}>
                                          <div class="accordion-heading">
                                              <h4 class="accordion-title"> 
                                                  <a class={`${ collapsed === 2 ? "collapsed": ""}`} aria-expanded="false" onClick={ () => handleCollapse(2)}> 
                                                      <i className="toggle-icon"><ion-icon name={`${ collapsed === 2 ? "remove": "add"}`}></ion-icon></i>
                                                      <span>CSS</span></a> 
                                              </h4>
                                            </div>
                                          </Col>
                                          <Col sm={8}>
                                                <div className={`accordion-body ${ collapsed === 2 ? "collapsed": ""}`}>
                                                       <ProgressBar now={95} />
                                                       {
                                                        <p>I design stunning user interfaces with CSS that create a harmonious blend of aesthetics and user experience.</p>
                                                       }
                                                </div>
                                                
                                          </Col>
                                      </Row>

                                      <Row>
                                          <Col sm={4}>
                                          <div class="accordion-heading">
                                              <h4 class="accordion-title"> 
                                                  <a class={`${ collapsed === 3 ? "collapsed": ""}`} aria-expanded="false" onClick={ () => handleCollapse(3)}> 
                                                      <i className="toggle-icon"><ion-icon name={`${ collapsed === 3 ? "remove": "add"}`}></ion-icon></i>
                                                      <span>Javascript</span></a> 
                                              </h4>
                                            </div>
                                          </Col>
                                          <Col sm={8}>
                                                <div className={`accordion-body ${ collapsed === 3 ? "collapsed": ""}`}>
                                                       <ProgressBar now={90} />
                                                       {
                                                        <p>My excellent JavaScript skills to helps me to create interactive features, enhance user interactions, and manage frontend and backend scripting..</p>
                                                       }
                                                </div>
                                                
                                          </Col>
                                      </Row>

                                      <Row>
                                          <Col sm={4}>
                                          <div class="accordion-heading">
                                              <h4 class="accordion-title"> 
                                                  <a class={`${ collapsed === 4 ? "collapsed": ""}`} aria-expanded="false" onClick={ () => handleCollapse(4 )}> 
                                                      <i className="toggle-icon"><ion-icon name={`${ collapsed === 4 ? "remove": "add"}`}></ion-icon></i>
                                                      <span>ReactJS</span></a> 
                                              </h4>
                                            </div>
                                          </Col>
                                          <Col sm={8}>
                                                <div className={`accordion-body ${ collapsed === 4 ? "collapsed": ""}`}>
                                                       <ProgressBar now={97} />
                                                       {
                                                        <p>With over four years of dedicated experience in React.js development, I am here to provide you with cutting-edge solutions that bring your ideas to life and enhance user experiences.</p>
                                                       }
                                                </div>
                                                
                                          </Col>
                                      </Row>

                                      <Row>
                                          <Col sm={4}>
                                          <div class="accordion-heading">
                                              <h4 class="accordion-title"> 
                                                  <a class={`${ collapsed === 5 ? "collapsed": ""}`} aria-expanded="false" onClick={ () => handleCollapse(5)}> 
                                                      <i className="toggle-icon"><ion-icon name={`${ collapsed === 5 ? "remove": "add"}`}></ion-icon></i>
                                                      <span>NodeJS</span></a> 
                                              </h4>
                                            </div>
                                          </Col>
                                          <Col sm={8}>
                                                <div className={`accordion-body ${ collapsed === 5 ? "collapsed": ""}`}>
                                                       <ProgressBar now={96} />
                                                       {
                                                        <p>Design and develop RESTful APIs using Node.js, ensuring smooth communication between frontend and backend..</p>
                                                       }
                                                </div>
                                                
                                          </Col>
                                      </Row>
                                </div> 

                          </div>
                      </section>
                   </main>
                   <Newsletter />
               </Col>
            </Row>
        </Container>
    </div>
  )
}

export default About