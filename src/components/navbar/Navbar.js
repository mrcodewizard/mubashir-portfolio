import React, { useEffect } from 'react'
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom"
import "./navbar.css";

function Menubar() {
   useEffect(() => {
        window.addEventListener('scroll', handleSticky);

        return () => {
            window.removeEventListener('scroll', () => handleSticky);
        }
   });

   const handleSticky = () => {
        const navbar = document.querySelector('.prt-nav');
        const scrollPosition = window.scrollY;
        if(scrollPosition  >= navbar.offsetTop + 10 ) {
            navbar.classList.add('navbar-fixed');
        } else {
            navbar.classList.remove('navbar-fixed');
        }
   }

  return (
    <div className="prt-nav">
        <Container>
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand>
                    <img src="mubashirlogo-light.png" alt="mubashir-logo" />
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                      <Nav>
                        <Nav.Link as={NavLink} to="/">
                            <i className="icon">
                                <ion-icon name="person-outline"></ion-icon>
                            </i>
                            <span>About Me</span>
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/resume">
                            <i className="icon">
                                <ion-icon name="book-outline"></ion-icon>
                            </i>
                            <span>Resume</span>
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/portfolio">
                            <i className="icon">
                                <ion-icon name="rocket-outline"></ion-icon>
                            </i>
                            <span>Portfolio</span>
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/blog">
                            <i className="icon">
                                <ion-icon name="create-outline"></ion-icon>
                            </i>
                            <span>Blog</span>
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">
                            <i className="icon">
                                <ion-icon name="call-outline"></ion-icon>
                            </i>
                            <span>Contact Me</span>
                        </Nav.Link>
                      </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    </div>
  )
}

export default Menubar