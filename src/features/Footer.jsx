import React from 'react'
import '../Styling/Footer.css'
export default function Footer() {
  return (
 
  <section className='footer-section'>
    <footer className='footer-items'>
      <div className='footer-logo'>
         <figure>
          <img src='/logo-light.png'/>
         </figure>
         <p>
           Ampex Web is a one step solution for all your digital marketing needs. We provide all kinds of digital marketing services to help you grow your businesses. Mail us for your first Quote!!
         </p>
      </div>
      <div className='major-links'>
        <h4>Major Links</h4>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='/about'>About Us</a></li>
          <li><a href='#'>Courses</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </div>
      <div className='social-links'>
      <h4>Social</h4>
        <ul>
          <li><a href='https://www.facebook.com/ampexweb1' target='_blank'><i class="bi bi-facebook"></i></a></li>
          <li><a href='https://www.instagram.com/ampexweb/?igshid=YmMyMTA2M2Y%3D' target='_blank'><i class="bi bi-instagram"></i></a></li>
          <li><a href='https://in.pinterest.com/ampexweb/?invite_code=192ac6afeba847d2916efa3c9e3a550d&sender=739364601233323424' target='_blank'><i class="bi bi-pinterest"></i></a></li>
          <li><a href='https://twitter.com/ampexweb' target='_blank'><i class="bi bi-twitter-x"></i></a></li>
        </ul>
      </div>
      <div className='contact-details'>
      <h4>Contact Details</h4>
        <ul>
       <li> <a href="mailto:#">info@ampexweb.com</a>  </li> 
       <li> <a href="#">www.ampexweb.com</a>        </li> 
        <li>Battarahalli, Bengaluru-560049, Karnataka, India</li>       
        <li>+91-8746031372</li>
        </ul>
      </div>
    </footer>
    {/* footer end */}
   <div className='footer-end bg-dark '>
      <div className="copyright-content"> 
        <p >All Rights Reserved. &copy; 2025 <a href="#">GreatSEO</a> Design By : Ampex Dev Team</p>
      </div>
    </div>
  </section>
    
  
    
  )
}
