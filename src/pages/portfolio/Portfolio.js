import React from 'react'
import { Container, Row, Col  } from 'react-bootstrap';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import Sidebar from '../../components/sidebar/Sidebar';
import movado from "../../assets/img/movado_com.jpg";
import mvmt from "../../assets/img/mvmt_com.jpg";
import oliviaburton from "../../assets/img/olivia_burton.jpg";
import itnoa from "../../assets/img/itnoadevs_com.jpg";
import decra from "../../assets/img/decra_com.jpg";
import castingpax from "../../assets/img/castingpax_com.jpg";
import UserAvatar from "../../assets/img/avatar.jpg";
import NomanAvt from "../../assets/img/noman.jpeg";
import WomenAVT from "../../assets/img/women-ceo.jpg";
import "./portfolio.css";

function Portfolio() {
    return (
      <Container>
        <Row>
          <Col md={12} lg={4}>
            <Sidebar />
          </Col>
          <Col md={12} lg={8}>
            <section className="portfolio">
            <h3 className="title">Portfolio</h3>
              <div className="portfolio-info">
                  <Row>
                      <Col md={4}>
                        <article class="portfolio-item mix pf-web-design" data-inter-pos-x="0" data-inter-pos-y="0" data-final-pos-x="0" data-final-pos-y="0" data-bound="true">
                          <div class="portfolio-image"> 
                              <a href="#."> 
                                <img class="img-responsive" alt="Open Imagination" src={movado} />
                              </a>
                            <div class="portfolio-overlay style-4">
                              <div class="detail-info">
                                <div class="position-center-center">
                                  <h3 class="no-margin">Movado</h3>
                                  <span><a href="#.">Jewellary / E-commerce</a></span> 
                                  <div className="bottom-action">
                                    <a href="#." class="go"><i><ion-icon name="search"></ion-icon></i></a>
                                    <a href="https://movado.com" class="go"><i><ion-icon name="link"></ion-icon></i></a> 
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </Col>

                      <Col md={4}>
                        <article class="portfolio-item mix pf-web-design" data-inter-pos-x="0" data-inter-pos-y="0" data-final-pos-x="0" data-final-pos-y="0" data-bound="true">
                          <div class="portfolio-image"> 
                              <a href="#."> 
                                <img class="img-responsive" alt="Open Imagination" src={mvmt} />
                              </a>
                            <div class="portfolio-overlay style-4">
                              <div class="detail-info">
                                <div class="position-center-center">
                                  <h3 class="no-margin">MVMT</h3>
                                  <span><a href="#.">Jewellary / Ecommerce</a></span> 
                                  <div className="bottom-action">
                                    <a href="#." class="go"><i><ion-icon name="search"></ion-icon></i></a>
                                    <a href="https://mvmt.com" class="go"><i><ion-icon name="link"></ion-icon></i></a> 
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </Col>

                      <Col md={4}>
                        <article class="portfolio-item mix pf-web-design" data-inter-pos-x="0" data-inter-pos-y="0" data-final-pos-x="0" data-final-pos-y="0" data-bound="true">
                          <div class="portfolio-image"> 
                              <a href="#."> 
                                <img class="img-responsive" alt="Open Imagination" src={oliviaburton} />
                              </a>
                            <div class="portfolio-overlay style-4">
                              <div class="detail-info">
                                <div class="position-center-center">
                                  <h3 class="no-margin">Olivia Burton</h3>
                                  <span><a href="#.">Fashion / E-commerce</a></span> 
                                  <div className="bottom-action">
                                    <a href="#." class="go"><i><ion-icon name="search"></ion-icon></i></a>
                                    <a href="https://oliviaburton.com" class="go"><i><ion-icon name="link"></ion-icon></i></a> 
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </Col>

                      <Col md={4}>
                        <article class="portfolio-item mix pf-web-design" data-inter-pos-x="0" data-inter-pos-y="0" data-final-pos-x="0" data-final-pos-y="0" data-bound="true">
                          <div class="portfolio-image"> 
                              <a href="#."> 
                                <img class="img-responsive" alt="Open Imagination" src={itnoa} />
                              </a>
                            <div class="portfolio-overlay style-4">
                              <div class="detail-info">
                                <div class="position-center-center">
                                  <h3 class="no-margin">ITNOA Devs</h3>
                                  <span><a href="#.">Business / Software</a></span> 
                                  <div className="bottom-action">
                                    <a href="#." class="go"><i><ion-icon name="search"></ion-icon></i></a>
                                    <a href="https://itnoadevs.com" class="go"><i><ion-icon name="link"></ion-icon></i></a> 
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </Col>

                      <Col md={4}>
                        <article class="portfolio-item mix pf-web-design" data-inter-pos-x="0" data-inter-pos-y="0" data-final-pos-x="0" data-final-pos-y="0" data-bound="true">
                          <div class="portfolio-image"> 
                              <a href="#."> 
                                <img class="img-responsive" alt="Open Imagination" src={decra} />
                              </a>
                            <div class="portfolio-overlay style-4">
                              <div class="detail-info">
                                <div class="position-center-center">
                                  <h3 class="no-margin">Decra Metal Roofing</h3>
                                  <span><a href="#.">Business / Consruction</a></span> 
                                  <div className="bottom-action">
                                    <a href="#." class="go"><i><ion-icon name="search"></ion-icon></i></a>
                                    <a href="https://decra.com" class="go"><i><ion-icon name="link"></ion-icon></i></a> 
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </Col>

                      <Col md={4}>
                        <article class="portfolio-item mix pf-web-design" data-inter-pos-x="0" data-inter-pos-y="0" data-final-pos-x="0" data-final-pos-y="0" data-bound="true">
                          <div class="portfolio-image"> 
                              <a href="#."> 
                                <img class="img-responsive" alt="Open Imagination" src={castingpax} />
                              </a>
                            <div class="portfolio-overlay style-4">
                              <div class="detail-info">
                                <div class="position-center-center">
                                  <h3 class="no-margin">Casting Pax</h3>
                                  <span><a href="#.">Payroll / Film</a></span> 
                                  <div className="bottom-action">
                                    <a href="#." class="go"><i><ion-icon name="search"></ion-icon></i></a>
                                    <a href="https://castingpax.com" class="go"><i><ion-icon name="link"></ion-icon></i></a> 
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </Col>
                  </Row>
              </div>
            </section>

            <section className='testimonial'>
              <h3 className="title">Testimonials</h3>

              <div className="testimonial-body">
                    <Carousel 
                    autoPlay={false}
                    interval={1500}
                    showArrows={false}
                    showStatus={false}
                    showIndicators={true}
                    infiniteLoop={true}

                    >
                      <Row>
                          <Col sm={4} className='testi-image-col'>
                              <div style={{"backgroundImage": `url(${UserAvatar})`, backgroundSize: 'cover', maxHeight: '180px', marginTop: 40}} className='testi-avatar'/>
                          </Col>
                          <Col sm={8} className='testi-column'>
                              <div className="testi-icon">
                                    <i className="quote-left"></i>
                              </div>
                              <div className="testi-body">
                                <p>I was incredibly impressed with Mubashir's work on developing our website at Movado. Their expertise in creating a responsive design, ensuring error-free functionality, and building a robust backend structure was invaluable.  Mubashir's dedication and collaborative spirit, along with the team's efforts, led to a significant increase in our brand sales</p>

                                  <h4 className="testi-user">Sean Willians</h4>
                                  <p className='testi-prof'>Senior Product Designer</p>
                              </div>
                          </Col>
                      </Row>

                      <Row>
                        <Col sm={4} className='testi-image-col'>
                          <div style={{"backgroundImage": `url(${NomanAvt})`, backgroundSize: 'cover', maxHeight: '180px', marginTop: 40}} className='testi-avatar'/>
                        </Col>
                        <Col sm={8} className='testi-column'>
                             <div className="testi-icon">
                                  <i className="quote-left"></i>
                             </div>
                            <div className="testi-body">
                              <p>I had the pleasure of working with Mubashir on our web development team, and I highly recommend him as a Fullstack developer. Mubashir consistently demonstrated a deep understanding of React, delivering high-quality code that enhanced the user experience of our projects. His attention to detail and problem-solving skills were evident in every task he undertook.</p>

                                <h4 className="testi-user">Noman Ahmad</h4>
                                <p className='testi-prof'>CEO, ITNOA Devs Ltd.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={4} className='testi-image-col'>
                              <div style={{"backgroundImage": `url(${WomenAVT})`, backgroundSize: 'cover', maxHeight: '180px'}} className='testi-avatar'/>
                        </Col>
                        <Col sm={8} className='testi-column'>
                             <div className="testi-icon">
                                  <i className="quote-left"></i>
                             </div>
                            <div className="testi-body">
                              <p>Mubashir has been incredible in building our roofing website. His has some solid skills in design & coding to turn our ideas to reality. Highyly recommended</p>

                                <h4 className="testi-user">Hailey Mathews</h4>
                                <p className='testi-prof'>Senior Product Designer</p>
                            </div>
                        </Col>
                    </Row>
                  </Carousel>
              </div>
            </section>
          </Col>
          </Row>
        </Container>
  );
}

export default Portfolio