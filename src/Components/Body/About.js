import React, {  } from 'react';
import OurPartner from '../Footer/OurPartner';
import '../allData/glass'
import './About.css'

const About = () => {

    return (
        <div className="about">
    <div class="curve">
        <svg xmlns="../../assets/cd.jpg" viewBox="0 0 1440 319"><path fill="#ffffffe9" fill-opacity="1" d="M0,64L60,69.3C120,75,240,85,360,106.7C480,128,600,160,720,181.3C840,203,960,213,1080,197.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>


    </div>
    

  

        <div className="container-fluid sec5 ">
          <div className="container glass " >
            <div className="row " >
            <div data-tilt data-tilt-glare data-tilt-max-glare="0.3" class=" animate hook2 cards">
             
            <img src={require ("../../assets/de 02.gif")} alt="" />
             <h4>Steve Roche</h4>
             <p>
               Steve has worked in IT, web design, development, desktop
               publishing, graphic art, document managment and Intranets. Steve
               grew with the industry, and has a passion for the future of
               technology: A.I and Robots
             </p>
           </div>

              <div  data-tilt data-tilt-glare data-tilt-max-glare="0.3" className=" animate hook2 cards">
                <img src={require ("../../assets/delevery 02.gif")} alt="" />
                <h4>Meleah Roche</h4>
                <p>
                  Meleah has worked in emergency triage treatment rooms and has
                  had a fascination how robotics have been transforming her
                  industry. With this background Meleah is able to use her
                  skill-set to understand the application of robots for almost
                  every occasion.
                </p>
              </div>
            </div>
  
            <div className="row py-5">
                <h3>Our Partner</h3>
                <OurPartner></OurPartner>
              <h4>So, What are you waiting for?</h4>
              <p>
                Our robots are built to last, so you can be sure you're getting
                the best possible products. Contact us today to learn more about
                our robotic solutions!
              </p>
              <a href="contact.html#cform">Get Started Now</a>
            </div>
          </div>
        </div>
  
      </div>
    );
};

export default About;