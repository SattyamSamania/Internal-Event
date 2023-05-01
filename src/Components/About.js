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

    <div className="feat bg-gray pt-5 pb-5">
    <div className="container">
      <div className="row">
        <div className="section-head col-sm-12">
          <h4><span>Why Choose</span> Us?</h4>
          <p>When you choose us, you'll feel the benefit of 10 years' experience of Web Development. Because we know the digital world and we know that how to handle it. With working knowledge of Cyber Security, Web and App Development.</p>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_one"><i className="fa fa-globe"></i></span>
            <h6>Modern Design</h6>
            <p>We use latest technology for the latest world because we know the demand of people.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_two"><i className="fa fa-anchor"></i></span>
            <h6>Creative Design</h6>
            <p>We are always creative and always listen our customers and we mix these two things and make best design.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_three"><i className="fa fa-hourglass-half"></i></span>
            <h6>24 x 7 User Support</h6>
            <p>If our customer has any problem and any query we are always happy to help them.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_four"><i className="fa fa-database"></i></span>
            <h6>Business Growth</h6>
            <p>Everyone wants to live on top of mountain, but all the happiness and growth occurs while you're climbing it</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_five"><i className="fa fa-upload"></i></span>
            <h6>Market Strategy</h6>
            <p>Holding back technology to preserve broken business models is like allowing blacksmiths to veto internal combustion engine in order to protect their horseshoes.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_six"><i className="fa fa-camera"></i></span>
            <h6>Affordable cost</h6>
            <p>Love is a special word, and I use it only when I mean it. You say the word too much and it becomes cheap.</p>
          </div>
        </div>
      </div>
    </div>
  </div>



    </>
  )
}
export default About;