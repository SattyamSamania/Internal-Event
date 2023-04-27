import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default function Dashboard(){
    return(
        <>
<div class="header">
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
		</div>	       
        
        </>
    )
}