import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import event3 from './event3.jpeg'
import event4 from './event4.jpeg'
import event5 from './event5.jpeg'
import event8 from './event8.jpeg'
import scroll4 from './scroll4.webp'
import scroll10 from './scroll10.webp'
import scroll5 from './scroll5.webp'
import event7 from './event7.jpeg'
import { Helmet } from "react-helmet"


export default function Event(){
  return(

    

    <>
    
{/*       
   <div className="container">
  <h1 className="fs-1 text-uppercase text-center m-3 p-3">Add Events</h1>
     <br/>
  <form>
    <div className="form-group mt-5 pt-5 mx-auto">
      <label for="eventName">Event Name:</label>
      <input type="text" className="form-control" id="eventName" placeholder="Enter event name"/>
    </div>
    <div className="form-group pt-3">
      <label for="eventDate">Event Date:</label>
      <input type="date" className="form-control" id="eventDate"/>
    </div>
    <div className="form-group pt-3">
      <label for="eventTime">Event Time:</label>
      <input type="time" className="form-control" id="eventTime"/>
    </div>
    <div className="form-group pt-3">
      <label for="eventLocation">Event Location:</label>
      <input type="text" className="form-control" id="eventLocation" placeholder="Enter event location"/>
    </div>
    <div className="form-group pt-3">
      <label for="eventDescription">Event Description:</label>
      <textarea className="form-control" id="eventDescription" rows="5"></textarea>
    </div>
    <div className="form-group text-center pt-3 pb-5">
      <button type="submit" className="btn btn-primary btn-block">Add Event</button>
    </div>
  </form>
</div> */}


{/* <!-- Event Section 1 --> */}
<section id="event1" class="bg-light py-5">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">Upcoming Events</h2>
        <h3 class="section-subheading text-muted">Check out our upcoming event here</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <img class="card-img-top" src={event3} alt="event3"/>
          <div class="card-body">
            <h4 class="card-title">Event 1</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien eu augue faucibus dignissim.</p>
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
          <div class="card-footer text-muted">Date: 01/05/2023</div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <img class="card-img-top" src={event4} alt="event4"/>
          <div class="card-body">
            <h4 class="card-title">Event 2</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien eu augue faucibus dignissim.</p>
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
          <div class="card-footer text-muted">Date: 07/05/2023</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* <!-- Event Section 2 --> */}
<section id="event2" class="bg-light py-5">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">Technical Events</h2>
        <h3 class="section-subheading text-muted">Check out our upcoming events here</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <img class="card-img-top" src={event5} alt="event5"/>
          <div class="card-body">
            <h4 class="card-title">Event 3</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien eu augue faucibus dignissim.</p>
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
          <div class="card-footer text-muted">Date: 15/05/2023</div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <img class="card-img-top" src={scroll5} alt="scroll5"/>
          <div class="card-body">
        <h4 class="card-title">Event 4</h4>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien eu augue faucibus dignissim.</p>
        <a href="#" class="btn btn-primary">Learn More</a>
      </div>
      <div class="card-footer text-muted">Date: 21/05/2023</div>
    </div>
  </div>
</div>
</div>
</section>
{/* <!-- Event Section 3 --> */}
<section id="event3" class="bg-light py-5">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">Non Technical Events</h2>
        <h3 class="section-subheading text-muted">Check out our upcoming events here</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <img class="card-img-top" src={event7} alt="event7"/>
          <div class="card-body">
            <h4 class="card-title">Event 5</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien eu augue faucibus dignissim.</p>
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
          <div class="card-footer text-muted">Date: 01/06/2023</div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <img class="card-img-top" src={scroll10} alt="scroll10"/>
          <div class="card-body">
            <h4 class="card-title">Event 6</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien eu augue faucibus dignissim.</p>
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
          <div class="card-footer text-muted">Date: 15/06/2023</div>
        </div>
      </div>
    </div>
  </div>
</section>





 
    </>
  )
}