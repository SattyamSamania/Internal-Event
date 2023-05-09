import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default function Dashboard(){
    return(
        <>




	 <div className="container-fluid mt-3">
		<div className="row">
			<div className="col-md-3">
				<div className="card">
					<div className="card-header">
						Sidebar
					</div>
					<div className="card-body">
						<ul className="nav flex-column">
							<li className="nav-item">
								





<a className="nav-link active" href="#">Overview</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">Events</a>
<ul className="nav flex-column ml-3">
<li className="nav-item">
<a className="nav-link" href="#">Upcoming Events</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">Archived Events</a>
</li>
</ul>
</li>
<li className="nav-item">
<a className="nav-link" href="#">Attendees</a>
<ul className="nav flex-column ml-3">
<li className="nav-item">
<a className="nav-link" href="#">All Attendees</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">New Attendees</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">VIP Attendees</a>
</li>
</ul>
</li>
<li className="nav-item">
<a className="nav-link" href="#">Reports</a>
<ul className="nav flex-column ml-3">
<li className="nav-item">
<a className="nav-link" href="#">Event Attendance</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">Attendee Feedback</a>
</li>
</ul>
</li>
<li className="nav-item">
<a className="nav-link" href="#">Settings</a>
<ul className="nav flex-column ml-3">
<li className="nav-item">
<a className="nav-link" href="#">General Settings</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">Email Templates</a>
</li>
</ul>
</li>
</ul>
</div>
</div>
</div>
<div className="col-md-9">
<div className="card">
<div className="card-header">
Dashboard
</div>
<div className="card-body">
<h5 className="card-title">Welcome to the Admin Dashboard</h5>
<p className="card-text">This is where you can manage all aspects of the Internal Event Management System.</p>
<a href="#" className="btn btn-primary">Get Started</a>
</div>
</div>
</div>
</div>
</div>


      <hr/>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              Total Events
            </div>
            <div className="card-body">
              <h5 className="card-title">25</h5>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              Total Attendees
            </div>
            <div className="card-body">
              <h5 className="card-title">500</h5>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              Latest Events
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Event Name</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Annual Conference</td>
                    <td>May 1-3, 2023</td>
                    <td>Vadodara</td>
                    <td><span className="badge badge-success">Active</span></td>
                  </tr>
                  <tr>
                    <td>Product Launch</td>
                    <td>June 12, 2023</td>
                    <td>Surat</td>
                    <td><span className="badge badge-success">Active</span></td>
                  </tr>
                  <tr>
                    <td>Team Building</td>
                    <td>July 7, 2023</td>
                    <td>Vadodara</td>
                    <td><span className="badge badge-warning">Upcoming</span></td>
                  </tr>
                  <tr>
                    <td>Quarterly Meeting</td>
                    <td>August 1, 2023</td>
                    <td>Rajkot</td>
                    <td><span className="badge badge-danger">Cancelled</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
     


	  <div class="container dashboard-container">
    <div class="row">
      <div class="col-md-6">
        <div class="dashboard-card">
          <h3>Event 1</h3>
          <p>Date: May 10, 2023</p>
          <p>Location: Venue A</p>
          <button class="btn btn-primary">Edit</button>
          <button class="btn btn-danger">Delete</button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="dashboard-card">
          <h3>Event 2</h3>
          <p>Date: May 15, 2023</p>
          <p>Location: Venue B</p>
          <button class="btn btn-primary">Edit</button>
          <button class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  </div>

        
        </>
    )
}