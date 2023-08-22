import React, { useEffect } from 'react'
import "./sidebar.css";
import pdfResume from "../../assets/img/Mubashir Rahman -- Senior Mern Stack Engineer's Resume.pdf";
import mubashirAvatar from "../../assets/img/mubashir-avatar.jpg";

function Sidebar() {
    useEffect(() => {
            window.addEventListener('scroll', handleSticky);

            return () => {
                window.removeEventListener('scroll', () => handleSticky);
            }
   });

   const handleSticky = () => {
    if(window.outerWidth >= 1200) {
        const sidebar = document.querySelector('.prt-sidebar');
        const scrollPosition = window.scrollY;
        const sidebarOffset = sidebar.offsetHeight

        if(scrollPosition + 500  >= sidebarOffset) {
            sidebar.classList.add('sidebar-fixed');
        } else {
            sidebar.classList.remove('sidebar-fixed');
        }
    }
   }

  return (
    <div>
        <aside className="prt-sidebar">
            <h3 className="title">Professional Details</h3>
            <div className="user-avatar">
                <img src={mubashirAvatar} className="img-fluid" alt="user-image" />
            </div>
            <div className="user-info">
                <ul>
                <li>
                    <p>Name:</p>
                    <span>Mubashir</span>
                </li>

                <li>
                    <p>Age:</p>
                    <span>25 year</span>
                </li>
                <li>
                    <p>Location:</p>
                    <span>Lahore</span>
                </li>
                <li>
                    <p>Experience:</p>
                    <span>4+ Years</span>
                </li>
                <li>
                    <p>Degree:</p>
                    <span>MCS</span>
                </li>
                <li>
                    <p>Phone:</p>
                    <span>+92 305 4424271</span>
                </li>
                <li>
                    <p>Email:</p>
                    <span>mubashirrahman503@gmail.com</span>
                </li>
                </ul>
            </div>
            <h3 className="title">Attachments</h3>
            <div className="attach">
                <ul>
                    <li>
                        <p>
                            <img src="word-icon.jpg" className="attach-icon" alt="attach-icon" />
                            <span className="attach-name">Mubashir's Resume.docx</span>
                            <a href={pdfResume} title='dowload' download><ion-icon name="cloud-download-outline"></ion-icon></a>
                        </p>
                    </li>

                    <li>
                        <p>
                            <img src="pdf-icon.jpg" className="attach-icon" alt="attach-icon" />
                            <span className="attach-name">Mubashir's Resume.pdf</span>
                            <a href={pdfResume} title='dowload' download><ion-icon name="cloud-download-outline"></ion-icon></a>
                        </p>
                    </li>
                </ul>
            </div>

            <h3 className="title">Social Profile</h3>
            <div className='social-icon'>
            <ul>
                <li> 
                <a href="https://www.facebook.com/Itsmubashir.rahman/"> 
                    <ion-icon name="logo-facebook"></ion-icon>
                    </a> 
                </li>
                <li> 
                <a href="mailto:mubashirrahman503@gmail.com"> 
                    <ion-icon name="mail"></ion-icon>
                </a> 
                </li>
                <li> 
                <a href="https://twitter.com/@Mobi_5ays">
                    <ion-icon name="logo-twitter"></ion-icon>
                </a> 
                </li>
                <li> 
                    <a href="https://www.linkedin.com/in/mrcode-wizard/">
                    <ion-icon name="logo-linkedin"></ion-icon>
                    </a> 
                </li>
                <li> 
                <a href="skype:mubashirrahman503?chat"> 
                    <ion-icon name="logo-skype"></ion-icon>
                </a> 
                </li>
            </ul>
            </div>
        </aside>
    </div>
  )
}

export default Sidebar