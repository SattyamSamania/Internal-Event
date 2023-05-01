import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default function Dashboard(){
    return(
        <>
{/* <div className="header">
			<div className="logo">
				<i className="fa fa-lock" aria-hidden="true"></i>
				<span>Admin Dashboard</span>
			</div>
			<a href="#" className="nav-trigger"><span></span></a>
		</div>
		<div className="side-nav">
			<div className="logo">
				<i className="fa fa-cog fa-3x fa-fw" aria-hidden="true"></i>
          <span></span>
			</div>
			<nav>
				<ul>
					<li>
						<a href="#">
							<span><i className="fas fa-tachometer-alt"></i></span>
							<span>Dashboard</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span><i className="fa fa-user"></i></span>
							<span>Manage Employee</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span><i className="fa fa-users"></i></span>
							<span>Manage Employers</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span><i className="fa fa-credit-card"></i></span>
							<span>Withdrawal Request</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span><i className="fa fa-list-alt"></i></span>
							<span>List Of Projects</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span><i className="fas fa-chart-bar"></i></span>
							<span>Analytics</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span><i className="fas fa-money-check-alt"></i></span>
							<span>Payment History</span>
						</a>
					</li>
					
					<li>
						<a href="#">
							<span><i className="fa fa-bell"></i></span>
							<span>Notifications</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span><i className="fa fa-briefcase"></i></span>
							<span>Accounts-Ledger</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>	        */}


{/* <div className="container-fluid mt-3">
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
								<a className="nav-link" href="#">Reports</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Analytics</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Export</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="col-md-9">
				<div className="card">
					<div className="card-header">
						Events
					</div>
					<div className="card-body">
						<table className="table table-hover">
							<thead>
								<tr>
									<th>#</th>
									<th>Name</th>
									<th>Date</th>
									<th>Location</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Annual Sales Meeting</td>
									<td>2023-05-10</td>
									<td>New York City</td>
									<td><a href="#" className="btn btn-sm btn-primary">View</a></td>
								</tr>
								<tr>
									<td>2</td>
									<td>Quarterly Performance Review</td>
									<td>2023-06-15</td>
									<td>Chicago</td>
									<td><a href="#" className="btn btn-sm btn-primary">View</a></td>
								</tr>
								<tr>
									<td>3</td>
									<td>Product Launch Event</td>
									<td>2023-08-01</td>
									<td>Los Angeles</td>
									<td><a href="#" className="btn btn-sm btn-primary">View</a></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div> */}



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
    

        
        </>
    )
}