import React from 'react';
import event1 from './event1.jpg'
import { Link } from 'react-router-dom';
import '../App.css'

const Home = () => {
  return(
    <>

<img className='event1'  src={event1} alt="event1" />
<section className="home-section">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h1>Welcome to the Internal Event Management System</h1>
        <p className="lead">This is the go-to place for managing all your internal events. From scheduling and organizing events to inviting attendees and tracking RSVPs, our system makes event planning a breeze.</p>
        <div className="row">
          <div className="col-md-6">
            {/* <a href="/events" className="btn btn-primary btn-lg btn-block"><i className="fas fa-calendar-alt"></i> View Events</a> */}
          </div>
          <div className="col-md-6">
            {/* <a href="/create-event" className="btn btn-success btn-lg btn-block"><i className="fas fa-plus-circle"></i> Create Event</a> */}
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card mb-4">
          <div className="card-body">
            <h2 className="card-title"><i className="fas fa-user-friends"></i> Manage Attendees</h2>
            <p className="card-text">Manage the list of attendees for each event, including their RSVP status and any additional notes.</p>
            <a href="/manage-attendees" className="btn btn-info"><i className="fas fa-user-friends"></i> Manage Attendees</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="container">
    <div className="row">
        <div className="col-md-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Upcoming Events</h5>
                    <p className="card-text">View and manage your upcoming events.</p>
                    <a href="#" className="btn btn-primary">View Events</a>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Create Event</h5>
                    <p className="card-text">Create a new event for your organization.</p>
                    <a href="#" className="btn btn-primary">Create Event</a>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Manage Registrations</h5>
                    <p className="card-text">Approve or reject registrations and view attendee lists.</p>
                    <a href="#" className="btn btn-primary">Manage Registrations</a>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Communication</h5>
                    <p className="card-text">Communicate with attendees through email.</p>
                    <a href="#" className="btn btn-primary">Communicate with Attendees</a>
                </div>
            </div>
        </div>
    </div>
</div>



    </>
  )
}
export default Home;