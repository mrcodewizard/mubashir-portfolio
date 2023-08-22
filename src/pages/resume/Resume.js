import React, { useState, useTransition } from 'react'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

import Sidebar from '../../components/sidebar/Sidebar';
import "./resume.css";
import dgapsLogo from "../../assets/img/dgaps-logo.png";
import innovadelLogo  from "../../assets/img/innovadel-logo.png";

function Resume() {
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
            <div className="resume">
              <section className="bio-section">
                <h3 className="title">Bio & Skills</h3>
                <div className="bio-info">
                  <p>
                      Mubashir is  a passionate software developer with a robust background in both frontend and backend technologies. I've honed my skills through diverse experiences, including a transformative six-month internship at Digital Applications to being a well reputed full stack developer having a great industory expereince. My expertise encompasses creating captivating websites using HTML, CSS, and JavaScript, along with cutting-edge technologies like React.js, Node.js, and MongoDB. Proficient in Agile methodologies and collaboration tools, 
                  </p>
                  <p>
                  I thrive on turning innovative ideas into responsive and user-centric web solutions. Let's collaborate to bring your digital vision to life.
                  </p>
                </div>
              </section>

              <section className="skills">
                <h3 className="title">Soft Skills</h3>
                <div className="accordion-group skills-accordion">
                  <div className="accordion accordion-default">
                    <Row>
                      <Col sm={4}>
                        <div class="accordion-heading">
                          <h4 class="accordion-title">
                            <a
                              class={`${collapsed === 1 ? "collapsed" : ""}`}
                              aria-expanded="false"
                              onClick={() => handleCollapse(1)}
                            >
                              <i className="toggle-icon">
                                <ion-icon
                                  name={`${collapsed === 1 ? "remove" : "add"}`}
                                ></ion-icon>
                              </i>
                              <span>Adaptability</span>
                            </a>
                          </h4>
                        </div>
                      </Col>
                      <Col sm={8}>
                        <div
                          className={`accordion-body ${
                            collapsed === 1 ? "collapsed" : ""
                          }`}
                        >
                          <ProgressBar now={90} />
                          {
                            <p>
                              Navigating evolving technologies and requirements with agility, delivering adaptive solutions that meet changing project needs.
                            </p>
                          }
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={4}>
                        <div class="accordion-heading">
                          <h4 class="accordion-title">
                            <a
                              class={`${collapsed === 2 ? "collapsed" : ""}`}
                              aria-expanded="false"
                              onClick={() => handleCollapse(2)}
                            >
                              <i className="toggle-icon">
                                <ion-icon
                                  name={`${collapsed === 2 ? "remove" : "add"}`}
                                ></ion-icon>
                              </i>
                              <span>Attention to detail</span>
                            </a>
                          </h4>
                        </div>
                      </Col>
                      <Col sm={8}>
                        <div
                          className={`accordion-body ${
                            collapsed === 2 ? "collapsed" : ""
                          }`}
                        >
                          <ProgressBar now={94} />
                          {
                            <p>
                              Demonstrating meticulous attention to detail in code quality, design implementation, and user experience refinement.
                            </p>
                          }
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={4}>
                        <div class="accordion-heading">
                          <h4 class="accordion-title">
                            <a
                              class={`${collapsed === 3 ? "collapsed" : ""}`}
                              aria-expanded="false"
                              onClick={() => handleCollapse(3)}
                            >
                              <i className="toggle-icon">
                                <ion-icon
                                  name={`${collapsed === 3 ? "remove" : "add"}`}
                                ></ion-icon>
                              </i>
                              <span>Problem Solving</span>
                            </a>
                          </h4>
                        </div>
                      </Col>
                      <Col sm={8}>
                        <div
                          className={`accordion-body ${
                            collapsed === 3 ? "collapsed" : ""
                          }`}
                        >
                          <ProgressBar now={90} />
                          {
                            <p>
                              Employing a strategic mindset to dissect challenges and architect innovative solutions that address core project objectives.
                            </p>
                          }
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>

                <div class="ethical-skills">
                  <h6>Follow ethical work practices</h6>
                  <a href="#.">Prioritize Learning Tasks</a>
                  <a href="#.">Make Ethical Choices</a>
                  <a href="#.">Social Work</a> 
                  <a href="#.">Community Work</a>
                </div>
              </section>
            </div>
            
            <div>
              <section className="experience">
                    <h3 className="title">Professional Experience</h3>

                    <div class="exp-item">
                      <div class="exp-left"> <span class="sun">2018 - 2020</span> </div>
                        <div class="exp-body">
                          <div className="company-details">
                            <h6>Associate Software Engineer</h6>
                            <p>Digital Applications</p>
                            <p>Khanewal </p>
                            <p class="margin-top-10">  I began my professional journey as an Associate Software Engineer at Digital Applications, where I cultivated a strong foundation in web development. Through this role, I gained expertise in essential technologies such as HTML, CSS, JavaScript, Bootstrap, and React. This experience has empowered me with a solid understanding of frontend technologies, enabling me to create engaging and responsive web interfaces. (...) <a href="#.">Read More</a> </p>
                          </div>
                          <div class="company-logo"> 
                            <img src={dgapsLogo} alt="company-logo" /> 
                          </div>
                        </div>
                      </div>

                      <div class="exp-item">
                      <div class="exp-left"> <span class="sun">2020 - 2022</span> </div>
                        <div class="exp-body">
                          <div className="company-details">
                            <h6>Senior Software Engineer</h6>
                            <p>Innovadel Technologies</p>
                            <p>Lahore</p>
                            <p class="margin-top-10">At Innoavdel,  I immersed myself in e-commerce and honed my skills in the MERN stack. This encompassed ECMAScript 6, jQuery, React.js, Node.js, Express, MongoDB, GraphQL, CSS3, SCSS, Bootstrap, and HTML. 
                            I embraced the latest React.js features like hooks and Redux, and gained deployment experience on platforms like Heroku and Digital Ocean. I transformed product designs into responsive web and mobile interfaces, 
                            maintained code standards, and collaborated with colleagues to implement ideas into full stack applications. Agile methodologies and modern tools like Jira, Bitbucket, Confluence, and Sourcetree became familiar allies in my journey. (...) <a href="#.">Read More</a> </p>
                          </div>
                          <div class="company-logo"> 
                            <img src={innovadelLogo} alt="company-logo" /> 
                          </div>
                        </div>
                      </div>
                </section>
            </div>

            <div>
              <section className="experience acedamics">
                    <h3 className="title">Academics Background</h3>

                    <div class="exp-item">
                      <div class="exp-left"> <span class="sun">2016 - 2018</span> </div>
                        <div class="exp-body">
                          <div className="company-details">
                            <h6>Masters in Computer Science</h6>
                            <p>Bahauddin Zakariya University</p>
                            <p>Multan, PAkistan</p>
                            <p class="margin-top-10"> I hold a master's degree in Computer Science from Bahauddin Zakariya University, solidifying my academic foundation in addition to my practical experience. With a proficiency in both coding and collaboration, I'm poised to contribute to your digital projects in a dynamic and results-driven manner (...) <a href="#.">Read More</a> </p>
                          </div>
                          <div class="company-logo"> 
                            <span class="diploma">
                               <i><ion-icon name="book"></ion-icon></i> Download Diploma
                            </span>
                          </div>
                        </div>
                      </div>

                      <div class="exp-item">
                      <div class="exp-left"> <span class="sun">2014 - 2016</span> </div>
                        <div class="exp-body">
                          <div className="company-details">
                            <h6>Bachelors in Computer Science</h6>
                            <p>Bahauddin Zakariya University</p>
                            <p>Multan, Pakistan</p>
                            <p class="margin-top-10"> My bachelor's degree in Computer Science, with majors in Physics and Mathematics, further underscores my well-rounded education. I learned basics of programming, advanced study of digital logics, mathematics which help me to lift up my career (...) <a href="#.">Read More</a> </p>
                          </div>
                          <div class="company-logo"> 
                            <span class="diploma">
                              <i><ion-icon name="book"></ion-icon></i> Download Diploma
                              </span>
                          </div>
                        </div>
                      </div>
                </section>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Resume