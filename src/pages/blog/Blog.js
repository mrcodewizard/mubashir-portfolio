import React from 'react'
import { Container, Row, Col  } from 'react-bootstrap';
import Sidebar from '../../components/sidebar/Sidebar';
import blogImageOne from "../../assets/img/blog-img-1.jpg";
import "./blog.css";
import Newsletter from '../../components/newsletter/Newsletter';

function Blog() {
  return (
    <div>
         <Container>
          <Row>
            <Col md={12} lg={4}>
              <Sidebar />
            </Col>
            <Col md={12} lg={8}>
              <section className="blog-section">
                <h3 className="title">Blog</h3>

                <div className="blog-inner">
                  <article> <img class="img-responsive" src={blogImageOne} alt="blog-image" />
                      <div class="post-info">
                        <div class="post-in">
                          <div class="extra"> 
                            <span><i><ion-icon name="calendar-outline" /></i>Aug 29, 2015</span> 
                            <span class="margin-left-15"><i><ion-icon name="person-outline" /></i> Admin</span> 
                            <span class="margin-left-15"><i><ion-icon name="chatbubbles-outline"/></i>Featured</span>
                          </div>
                          <a href="#." class="tittle-post"> ENJOYING THE SMALL THINGS </a>
                          <p>t's time to play the music. It's time to light the lights. It's time to meet the Muppets on the Muppet Show tonight! Boy the way Glen Miller played Songs the hit parade. Guys like us we had it made. Those were the days. These Happy Days are yours and mine Happy Days.</p>
                          <a href="#." class="btn-1">Read MOre <i class="fa fa-angle-right"></i></a> </div>
                      </div>
                    </article>

                    <article> <img class="img-responsive" src={blogImageOne} alt="blog-image" />
                      <div class="post-info">
                        <div class="post-in">
                          <div class="extra"> 
                            <span><i><ion-icon name="calendar-outline" /></i>Aug 29, 2015</span> 
                            <span class="margin-left-15"><i><ion-icon name="person-outline" /></i> Admin</span> 
                            <span class="margin-left-15"><i><ion-icon name="chatbubbles-outline"/></i>Featured</span>
                          </div>
                          <a href="#." class="tittle-post"> ENJOYING THE SMALL THINGS </a>
                          <p>t's time to play the music. It's time to light the lights. It's time to meet the Muppets on the Muppet Show tonight! Boy the way Glen Miller played Songs the hit parade. Guys like us we had it made. Those were the days. These Happy Days are yours and mine Happy Days.</p>
                          <a href="#." class="btn-1">Read MOre <i class="fa fa-angle-right"></i></a> </div>
                      </div>
                    </article>

                    <article> <img class="img-responsive" src={blogImageOne} alt="blog-image" />
                      <div class="post-info">
                        <div class="post-in">
                          <div class="extra"> 
                            <span><i><ion-icon name="calendar-outline" /></i>Aug 29, 2015</span> 
                            <span class="margin-left-15"><i><ion-icon name="person-outline" /></i> Admin</span> 
                            <span class="margin-left-15"><i><ion-icon name="chatbubbles-outline"/></i>Featured</span>
                          </div>
                          <a href="#." class="tittle-post"> ENJOYING THE SMALL THINGS </a>
                          <p>t's time to play the music. It's time to light the lights. It's time to meet the Muppets on the Muppet Show tonight! Boy the way Glen Miller played Songs the hit parade. Guys like us we had it made. Those were the days. These Happy Days are yours and mine Happy Days.</p>
                          <a href="#." class="btn-1">Read MOre <i class="fa fa-angle-right"></i></a> </div>
                      </div>
                    </article>
                </div>
            </section>

            <Newsletter />
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Blog