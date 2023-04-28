import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default function Dashboard(){
    return(
        <>
{/* <div class="header">
			<div class="logo">
				<i class="fa fa-lock" aria-hidden="true"></i>
				<span>Admin Dashboard</span>
			</div>
			<a href="#" class="nav-trigger"><span></span></a>
		</div>
		<div class="side-nav">
			<div class="logo">
				<i class="fa fa-cog fa-3x fa-fw" aria-hidden="true"></i>
          <span></span>
			</div>
			<nav>
				<ul>
					<li>
						<a href="#">
							<span><i class="fas fa-tachometer-alt"></i></span>
							<span>Dashboard</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span><i class="fa fa-user"></i></span>
							<span>Manage Employee</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span><i class="fa fa-users"></i></span>
							<span>Manage Employers</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span><i class="fa fa-credit-card"></i></span>
							<span>Withdrawal Request</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span><i class="fa fa-list-alt"></i></span>
							<span>List Of Projects</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span><i class="fas fa-chart-bar"></i></span>
							<span>Analytics</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span><i class="fas fa-money-check-alt"></i></span>
							<span>Payment History</span>
						</a>
					</li>
					
					<li>
						<a href="#">
							<span><i class="fa fa-bell"></i></span>
							<span>Notifications</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span><i class="fa fa-briefcase"></i></span>
							<span>Accounts-Ledger</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>	        */}


{/* <div class="container-fluid mt-3">
		<div class="row">
			<div class="col-md-3">
				<div class="card">
					<div class="card-header">
						Sidebar
					</div>
					<div class="card-body">
						<ul class="nav flex-column">
							<li class="nav-item">
								<a class="nav-link active" href="#">Overview</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Reports</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Analytics</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Export</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-md-9">
				<div class="card">
					<div class="card-header">
						Events
					</div>
					<div class="card-body">
						<table class="table table-hover">
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
									<td><a href="#" class="btn btn-sm btn-primary">View</a></td>
								</tr>
								<tr>
									<td>2</td>
									<td>Quarterly Performance Review</td>
									<td>2023-06-15</td>
									<td>Chicago</td>
									<td><a href="#" class="btn btn-sm btn-primary">View</a></td>
								</tr>
								<tr>
									<td>3</td>
									<td>Product Launch Event</td>
									<td>2023-08-01</td>
									<td>Los Angeles</td>
									<td><a href="#" class="btn btn-sm btn-primary">View</a></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div> */}

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<a class="navbar-brand" href="#">Internal Event Management System</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item">
					<a class="nav-link" href="#">Dashboard</a>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Events
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="#">Add New Event</a>
						<a class="dropdown-item" href="#">View All Events</a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item" href="#">Archived Events</a>
					</div>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Attendees
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="#">Add New Attendee</a>
						<a class="dropdown-item" href="#">View All Attendees</a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item" href="#">Import Attendees</a>
						<a class="dropdown-item" href="#">Export Attendees</a>
					</div>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Reports</a>
				</li>
			</ul>
			<ul class="navbar-nav ml-auto">
				<li class="nav-item">
					<a class="nav-link" href="#">Profile</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Logout</a>
				</li>
			</ul>
		</div>
	</nav>

	<div class="container-fluid mt-3">
		<div class="row">
			<div class="col-md-3">
				<div class="card">
					<div class="card-header">
						Sidebar
					</div>
					<div class="card-body">
						<ul class="nav flex-column">
							<li class="nav-item">
								





<a class="nav-link active" href="#">Overview</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Events</a>
<ul class="nav flex-column ml-3">
<li class="nav-item">
<a class="nav-link" href="#">Upcoming Events</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Archived Events</a>
</li>
</ul>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Attendees</a>
<ul class="nav flex-column ml-3">
<li class="nav-item">
<a class="nav-link" href="#">All Attendees</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">New Attendees</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">VIP Attendees</a>
</li>
</ul>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Reports</a>
<ul class="nav flex-column ml-3">
<li class="nav-item">
<a class="nav-link" href="#">Event Attendance</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Attendee Feedback</a>
</li>
</ul>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Settings</a>
<ul class="nav flex-column ml-3">
<li class="nav-item">
<a class="nav-link" href="#">General Settings</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Email Templates</a>
</li>
</ul>
</li>
</ul>
</div>
</div>
</div>
<div class="col-md-9">
<div class="card">
<div class="card-header">
Dashboard
</div>
<div class="card-body">
<h5 class="card-title">Welcome to the Admin Dashboard</h5>
<p class="card-text">This is where you can manage all aspects of the Internal Event Management System.</p>
<a href="#" class="btn btn-primary">Get Started</a>
</div>
</div>
</div>
</div>
</div>


      <hr/>
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              Total Events
            </div>
            <div class="card-body">
              <h5 class="card-title">25</h5>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              Total Attendees
            </div>
            <div class="card-body">
              <h5 class="card-title">500</h5>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              Latest Events
            </div>
            <div class="card-body">
              <table class="table">
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
                    <td>New York City</td>
                    <td><span class="badge badge-success">Active</span></td>
                  </tr>
                  <tr>
                    <td>Product Launch</td>
                    <td>June 12, 2023</td>
                    <td>San Francisco</td>
                    <td><span class="badge badge-success">Active</span></td>
                  </tr>
                  <tr>
                    <td>Team Building</td>
                    <td>July 7, 2023</td>
                    <td>Los Angeles</td>
                    <td><span class="badge badge-warning">Upcoming</span></td>
                  </tr>
                  <tr>
                    <td>Quarterly Meeting</td>
                    <td>August 1, 2023</td>
                    <td>Chicago</td>
                    <td><span class="badge badge-danger">Cancelled</span></td>
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