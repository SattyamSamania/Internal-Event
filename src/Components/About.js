import React from 'react';
// import IEMS from './IEMS.webp';
import About_img from './aboutImg.jpg';

const About = () => {
  return (
    <>

    

      <section className="about-us shadow" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="para">"Streamline Your Events: Simplify Planning with Our Internal Event Management System"</h1>
              <br />

              <p>The Internal Event Management System typically includes features such as event registration and attendance tracking, venue management, budget management, scheduling, marketing and promotion, as well as post-event reporting and analytics. This system can be used by various departments within an organization such as HR, marketing, and facilities management.</p>
              <br />
              <br />



              <div className="col-md-6">
                <img className="about-img" src={About_img} alt="about-img" />

              </div>
            </div>
          </div>
        </div>
      </section>

    <br/>




    </>
  )
}
export default About;