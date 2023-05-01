import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer(){
  

return (

  
  <>

    

<footer className="bg-dark text-white pt-5 pb-4">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h4>About Us</h4>
        <p>We are a comprehensive internal event management system that streamlines and simplifies event planning for organizations, enabling them to focus on creating exceptional experiences for their attendees.</p>
      </div>
      <div className="col-md-3">
        <h4>Contact Us</h4>
        <ul className="list-unstyled">
          <li><i className="fas fa-map-marker-alt"></i></li>
           <a href="+91 9427-372629" className="fa fa-phone"></a>
           <a href="+91 9427-372629" className="fa fa-whatsapp"></a>
          
{/*           <li><i className="fas fa-envelope"></i> info@company.com</li> */}
        </ul>
      </div>
      <div className="col-md-3">
        <h4>Follow Us</h4>
        <ul className="list-unstyled">
          <a href="https://www.linkedin.com/in/sannibh-technologies-4a05a6134/" className="fa fa-linkedin"></a>

          <a href="https://www.facebook.com/SannibhTechnologies" className="fa fa-facebook"></a>
          
        </ul>
      </div>
      <br/>
    </div>
    <div className="row mt-4">
      <div className="col-md-12 text-center">
        <p>&copy; 2023 Internal Event Management System. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
  </>
    )
}

export default Footer;