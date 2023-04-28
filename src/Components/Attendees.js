import React from 'react'
import event5 from './event5.jpeg'
import event3 from './event3.jpeg'
import event4 from './event4.jpeg'


export default function Attendees(){
    return(
        <>
        <div className="container-fluid">
  <div className="row">
    <div className="col-2 sidebar">
    </div>
    <div className="col-6 main-content">
      <h1>Welcome, User</h1>
      <p>Your upcoming events:</p>
      <div className="card-deck">
        <div className="card">
          <img className="card-img-top" src={event5} alt="event5"/>
          <div className="card-body">
            <h5 className="card-title">Event 1</h5>
            <p className="card-text">May 1, 2023<br/>San Francisco, CA</p>
            <a href="#" className="btn btn-primary">View Details</a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={event3} alt="event3"/>
          <div className="card-body">
            <h5 className="card-title">Event 2</h5>
            <p className="card-text">May 15, 2023<br/>New York, NY</p>
            <a href="#" className="btn btn-primary">View Details</a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={event4} alt="event4"/>
          <div className="card-body">
            <h5 className="card-title">Event 3</h5>
            <p className="card-text">June 1, 2023<br/>Chicago, IL</p>
            <a href="#" className="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col">
          <h2>My Registrations</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Event 1</td>
                <td>2023-05-01</td>
                <td>San Francisco, CA</td>
                <td>Registered</td>
              </tr>
              <tr>
                <td>Event 2</td>
                <td>2023-05-15</td>
                <td>New York, NY</td>
                <td>Not Registered</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col">
          <h2>My Interests</h2>
          <ul>
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>








        
        </>
    )
}