
import React from 'react';
import logo from './sannibh.png'




const Navbar = () => {
  return (
    <>




      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a>


          <a className="navbar-brand" href="#">

          </a>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href='/'>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/About">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Dashboard">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Event">Event</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/Admin">Admin</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/Attendees">Attendees</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Contact">Contact</a>
              </li>




            </ul>

{/*             <div className="button">
              <button type="button" className="btn btn-primary m-1">SignUp</button>
              <button type="button" class="btn btn-primary">Login</button>
            </div> */}

          </div>

        </div>
      </nav>





      

    </>
  )
}

export default Navbar;
