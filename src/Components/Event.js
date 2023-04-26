import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


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


<section className="upcoming-events">
  <div className="container">
    <h2 className="text-center mb-5">Upcoming Events</h2>
    <div className="row">
      <div className="col-md-6">
        <div className="card mb-4">
          <div className="card-body">
            <h3 className="card-title">Seminar on Machine Learning</h3>
            <p className="card-text"><i className="far fa-calendar-alt"></i> Wednesday, May 12, 2023</p>
            <p className="card-text"><i className="far fa-clock"></i> 6:00 PM - 8:00 PM</p>
            <p className="card-text"><i className="fas fa-map-marker-alt"></i> 123 Main St, Suite 200, Anytown, USA</p>
            <a href="#" className="btn btn-primary btn-block">RSVP Now</a>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card mb-4">
          <div className="card-body">
            <h3 className="card-title"> Workshop on React </h3>
            <p className="card-text"><i className="far fa-calendar-alt"></i> Thursday, June 15, 2023</p>
            <p className="card-text"><i className="far fa-clock"></i> 9:00 AM - 12:00 PM</p>
            <p className="card-text"><i className="fas fa-map-marker-alt"></i> 456 Market St, Suite 300, Anytown, USA</p>
            <a href="#" className="btn btn-primary btn-block">RSVP Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="upcoming-events">
  <div className="container">
    <h2 className="text-center mb-5">Past Events</h2>
    <div className="row">
      <div className="col-md-6">
        <div className="card mb-4">
          <div className="card-body">
            <h3 className="card-title">Networking Mixer</h3>
            <p className="card-text"><i className="far fa-calendar-alt"></i> Wednesday, May 12, 2023</p>
            <p className="card-text"><i className="far fa-clock"></i> 6:00 PM - 8:00 PM</p>
            <p className="card-text"><i className="fas fa-map-marker-alt"></i> 123 Main St, Suite 200, Anytown, USA</p>
            {/* <a href="#" className="btn btn-primary btn-block">RSVP Now</a> */}
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card mb-4">
          <div className="card-body">
            <h3 className="card-title">Team Building Workshop</h3>
            <p className="card-text"><i className="far fa-calendar-alt"></i> Thursday, June 15, 2023</p>
            <p className="card-text"><i className="far fa-clock"></i> 9:00 AM - 12:00 PM</p>
            <p className="card-text"><i className="fas fa-map-marker-alt"></i> 456 Market St, Suite 300, Anytown, USA</p>
            {/* <a href="#" className="btn btn-primary btn-block">RSVP Now</a> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</section>



 
    </>
  )
}