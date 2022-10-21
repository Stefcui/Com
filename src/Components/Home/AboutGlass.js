import React from 'react';
import OurPartner from '../Footer/OurPartner';

const AboutGlass = () => {
    return (
        <div className='about'>
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

export default AboutGlass;