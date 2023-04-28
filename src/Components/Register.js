import React  from "react";

export default function Register(){
    return(
        <>
        
        <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3 mt-5">
                <h1 class="text-center mb-4">Event Registration Form</h1>
                <form>
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone number:</label>
                        <input type="text" class="form-control" id="phone" placeholder="Enter your phone number"/>
                    </div>
                    <div class="form-group">
                        <label for="event">Event:</label>
                        <select class="form-control" id="event">
                            <option>Select an event</option>
                            <option>Event 1</option>
                            <option>Event 2</option>
                            <option>Event 3</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block mt-4">Register</button>
                </form>
            </div>
        </div>
    </div>
        </>
    )
}