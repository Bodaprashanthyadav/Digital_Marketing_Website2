import '../Styling/forms.css'
import '../Styling/ContactUs.css'
import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion"

export default function ContactUs() {
    const reachRef = useRef(null);
    const faqRef = useRef(null);
    const formRef = useRef(null);
    const locationRef = useRef(null);

    const isReachVisible = useInView(reachRef, { once: true });
    const isFaqVisible = useInView(faqRef, { once: true });
    const isFormVisible = useInView(formRef, { once: true });
    const isLocationVisible = useInView(locationRef, { once: true });

  return (
      
  <section>
        {/* section-1 */}
        <motion.div 
            ref={reachRef}
            initial={{ opacity: 0, x: -100 }}
            animate={isReachVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="reach-us"
            >
                <div class="container">
                    <div class="contact-us">
                        <div class="call-num">
                            <p><b>contact us</b></p>
                            <a href="tel:+918746031372">+91 8746031372</a>
                        </div>
                        <div class="call-cnt">
                            <p><b>get a call back from us</b></p>
                            <p>we love to solve your queries!</p>
                        </div>
                        <div class="form-group input-btn">
                            <button class="frmtrigger">Enquire Now</button>
                        </div>
                    </div>
                </div>
                </motion.div>
        
<div className='contactus'>
        {/* Section 2: FAQ Accordion */}
        <motion.div 
            ref={faqRef}
            initial={{ opacity: 0, x: 100 }}
            animate={isFaqVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
                
        >
        <div class="accordion" id="accordionExample">
          <h2 style={{margin:'40px'}}>Frequently Asked Questions</h2>

           <div class="accordion-item">
             <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                 <b>What Are The Pre Requisites?</b>
              </button>
             </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            There are no Pre-requisites attached to our training program. But, to attain a full time employment in this field, one must be a graduate (in any stream).
          </div>
       </div>
  </div>
   <div class="accordion-item">
      <h2 class="accordion-header">
       <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <b> Do You Provide Placement Assistance?</b>
       </button>
      </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
           YES ! we do provide 360 degree placement assistance from building your resume to successfully cracking interview in your dream company.      </div>
        </div>
    </div>
    <div class="accordion-item">
       <h2 class="accordion-header">
         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <b>What The Delivery Modes Classroom Or Online?</b>
         </button>
        </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
       <div class="accordion-body">
          We have both class room training and live training with dedicated trainers.      </div>
       </div>
    </div>
    <div class="accordion-item">
       <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            <b> Who Can Learn This Course?</b>
         </button>
        </h2>
      <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
         There is no age or educational barrier to learn any of these courses. ANYONE CAN LEARN      </div>
        </div>
      </div>
    </div>
</motion.div>

     {/* Section 3: Contact Form */}
    <motion.div 
            ref={formRef}
            initial={{ opacity: 0, y: 100 }}
            animate={isFormVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="form-box"
        >
        <form class="form"   >
            <span class="title"><h2>Get in Touch </h2></span>
            <span class="subtitle"><p>Have a inquiry or some feedback for us? Fill out the form below to contact our team.</p>
            </span>
         <div class="form-container">
            <input type="text" class="input" name='username' placeholder="Full Name" required/>
			<input type="Email" class="input"   name='email' placeholder="Email" required/>
			<input type="number" class="input"   name='number' placeholder="Mobile no." required min={'1000000000'} max={'9999999999'}/>
         </div>
           <button>Request Call Back</button>
        </form>
    </motion.div>
</div>

 {/* Section 4: Location */}
    <motion.div 
        ref={locationRef}
        initial={{ opacity: 0, x: -100 }}
        animate={isLocationVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="location"
    >       
         <h2 className='m-4'>LOCATION</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1517604201895!2d77.6930239!3d13.026006100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae118a3c186ce3%3A0xaa73e4c52cc7a286!2sAmpex%20Web!5e0!3m2!1sen!2sin!4v1740998444322!5m2!1sen!2sin" height={'400px'} width={'800px'} title='institute location'>
          </iframe>
    </motion.div>

    </section>
    
  )
}
