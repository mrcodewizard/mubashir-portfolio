import React, { useState, useTransition } from 'react'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import Sidebar from '../../components/sidebar/Sidebar';
import movado from "../../assets/img/movado_com.jpg";
import mvmt from "../../assets/img/mvmt_com.jpg";
import oliviaburton from "../../assets/img/olivia_burton.jpg";
import itnoa from "../../assets/img/itnoadevs_com.jpg";
import decra from "../../assets/img/decra_com.jpg";
import castingpax from "../../assets/img/castingpax_com.jpg";
import portfolioOne from "../../assets/img/portfolio-one.jpg";
import portfolioTwo from "../../assets/img/portfolio-two.jpg";
import UserAvatar from "../../assets/img/avatar.jpg";
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
                    autoPlay={true}
                    interval={1500}
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    infiniteLoop={true}

                    >
                      <Row>
                          <Col sm={4}>
                                <div style={{"backgroundImage": `url(${UserAvatar})`}} className='testi-avatar'/>
                          </Col>
                          <Col sm={8} className='testi-column'>
                              <div className="testi-icon">
                                    <i className="quote-left"></i>
                              </div>
                              <div className="testi-body">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus debitis, 
                                  dolorum voluptatum id, aliquam tenetur iste doloremque</p>

                                  <h4 className="testi-user">Alex Joseph</h4>
                                  <p className='testi-prof'>Senior Product Designer</p>
                              </div>
                          </Col>
                      </Row>

                      <Row>
                        <Col sm={4}>
                              <div style={{"backgroundImage": `url(${UserAvatar})`}} className='testi-avatar'/>
                        </Col>
                        <Col sm={8} className='testi-column'>
                             <div className="testi-icon">
                                  <i className="quote-left"></i>
                             </div>
                            <div className="testi-body">
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus debitis, 
                                dolorum voluptatum id, aliquam tenetur iste doloremque</p>

                                <h4 className="testi-user">Adam Grande</h4>
                                <p className='testi-prof'>Senior Product Designer</p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={4}>
                              <div style={{"backgroundImage": `url(${UserAvatar})`}} className='testi-avatar'/>
                        </Col>
                        <Col sm={8} className='testi-column'>
                             <div className="testi-icon">
                                  <i className="quote-left"></i>
                             </div>
                            <div className="testi-body">
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus debitis, 
                                dolorum voluptatum id, aliquam tenetur iste doloremque</p>

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