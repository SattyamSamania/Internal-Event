import React from 'react'


export default function Event(){
  return(

    <>
      
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
</div>
 
    </>
  )
}