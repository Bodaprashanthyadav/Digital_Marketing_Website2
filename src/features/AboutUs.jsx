import React, { useRef } from 'react'
import  '../Styling/About.css'
import {motion} from 'framer-motion'
import { useInView } from 'framer-motion';

export default function AboutUs() {
  const aboutRef = useRef(null);
    const corevalueRef = useRef(null);
    const missionRef = useRef(null);
    const studentFeedbackRef = useRef(null);

    const isAboutVisible = useInView(aboutRef, { once: true });
    const isCorevalueVisible = useInView(corevalueRef, { once: true });
    const isMissionVisible = useInView(missionRef, { once: true });
    const isStudentFeedbackVisible = useInView(studentFeedbackRef, { once: true });

  return (
    <section className='container'>
          {/* section:1 About section  */}

       <motion.div 
            ref={aboutRef}
            initial={{ opacity: 0, x: -100 }}
            animate={isAboutVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="about-heading"
            >
            <figure style={{padding:'20px'}}>
                <img src='/web-trainings-academy3-1-2048x1536.jpg' alt='' width={'600px'} height={'400px'}/>
            </figure>
            <div className='about-content'>
            <h2>About Us</h2>
            <p>Welcome to Ampex Web is a digital marketing Institute , Bangalore’s premier institute for cutting-edge education in Digital Marketing and Web Designing Since our inception in 2015, we’ve been committed to providing high-quality, practical training that prepares students for the demands of the modern job market. Our specialized courses, taught by industry experts, blend theory and hands-on experience to ensure our students gain the skills necessary to excel in today’s competitive digital and tech industry. With an emphasis on real-world applications, we focus on enhancing employability, delivering placements, and empowering the next generation of professionals.</p>
            <p>Ampex Web Training  is a dedicated training academy for digital marketing and web technologies. We are pioneers in training for digital marketing and web technologies in Bangalore. We provide training for students and business owners from India and abroad. We started from a home office with a goal to provide real time training and growing ever since with support of our trainers, students and associates. We are thankful to everyone who has been a part of our journey.</p>

            </div>
        </motion.div>
        {/* section:2 core values */}
        <motion.div 
                ref={corevalueRef}
                initial={{ opacity: 0, x: 100 }}
                animate={isCorevalueVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
        <div className='about-end'>
            <figure>
                <img src='/home-img-1.jpg' alt='' height={'650px'}/>
            </figure>
            <div className='core-values'>
                <h2>Our Core Values</h2>
                <div >
                    <div className='content'>
                       <i class="bi bi-patch-check-fill" style={{color: '#0070ff ', marginInline:'20px',alignContent:'center'}}></i>
                       <h4 >Quality of Training as per International Standards.</h4>
                    </div>
                    <div className='content'>
                       <i class="bi bi-patch-check-fill" style={{color: '#0070ff ', marginInline:'20px',alignContent:'center'}}></i>
                       <h4 >Provide Real time Training with Live Examples.</h4>
                    </div>               
                    <div className='content'>
                       <i class="bi bi-patch-check-fill" style={{color: '#0070ff ', marginInline:'20px',alignContent:'center'}}></i>
                       <h4 >Business ethics is more important than money.</h4>
                    </div>                  
                       <div className='content'>
                       <i class="bi bi-patch-check-fill" style={{color: '#0070ff ', marginInline:'20px',alignContent:'center'}}></i>
                    <h4 >Help students to reach their true potential with Personality Development.</h4>
                    </div>  
                    </div>                  
                    <div className='content'>
                       <i class="bi bi-patch-check-fill" style={{color: '#0070ff ', marginInline:'20px',alignContent:'center'}}></i>
                       <h4 >Help students to become entrepreneurs with motivation and support.</h4> 
                    </div>
            </div>
        </div>
        </motion.div>
        {/* section:3 mission-vision */}
        <motion.div 
                ref={missionRef}
                initial={{ opacity: 0, y: 100 }}
                animate={isMissionVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                   
            >
        <div className='mission-vision'>
        <div className='vision'>
            <figure>
              <img src='/vision-webtrainings.jpg' alt='visionlogo' width={'100px'}  />
            </figure>
            <h3>Vision </h3>
            <p>To create innovative training methodologies and products to make education useful in practical life.</p>
        </div>
        <div className='mission'> 
            <figure >
              <img src='/missin-web-trainings.jpg' alt='missionlogo' width={'100px'}/>
            </figure>
            <h3>Mission </h3>
            <p>To provide training in real-time standards and help student achieve their true potential.</p>
        </div>
        </div>
</motion.div>
  {/* section:4 student-feedback */}
   <motion.div 
        ref={studentFeedbackRef}
        initial={{ opacity: 0, x: -100 }}
        animate={isStudentFeedbackVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }} 
    >       
        <div className='student-feedback'>
      <h2> What Our Students Say</h2>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <p> "Ampex Web provided an excellent learning experience! The instructors were highly knowledgeable, and the hands-on training helped me gain real-world skills. Thanks to their support, I landed my first job in digital marketing!" <i>– Rahul S.</i>.</p>
    </div>
    <div class="carousel-item">
      <p> "The practical approach to teaching made a huge difference for me. I especially appreciated the live projects, which gave me confidence in handling real-world challenges. Highly recommended!" <i>– Sneha M.</i></p>
    </div>
    <div class="carousel-item">
      <p>"I had no prior experience in web development, but the structured training at Ampex Web helped me become job-ready. The mentorship and guidance from trainers were top-notch!" <i>– Ankit K.</i></p>
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

     </div>
  </motion.div>
</section>
  )
}
