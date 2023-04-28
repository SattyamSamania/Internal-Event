import React from 'react'

export default function Create(){
    return(
        <>
        
        <div class="mt-10 mx-20">
  <div class="bg-blue-400 h-36 d-flex align-items-center justify-content-center">
    <div>
      <h1 class="font-bold font-serif display-1 text-white text-center">
        Create A New Event
      </h1>
    </div>
  </div>
  <div class="d-flex mt-4">
    <div class="w-50 me-4">
      <label for="email" class="form-label fs-4 text-gray-600">Title</label>
      <input type="text" id="title" name="title" class="form-control form-control-lg" />
    </div>
    <div class="w-50">
      <label for="venue" class="form-label fs-4 text-gray-600">Venue</label>
      <input type="text" id="venue" name="venue" class="form-control form-control-lg" />
    </div>
  </div>
  <div class="d-flex mt-4">
    <div class="w-50 me-4">
      <label for="start" class="form-label fs-4 text-gray-600">Start Date</label>
      <input type="datetime-local" id="start" name="start" class="form-control form-control-lg" />
    </div>
    <div class="w-50">
      <label for="end" class="form-label fs-4 text-gray-600">End Date</label>
      <input type="datetime-local" id="end" name="end" class="form-control form-control-lg" />
    </div>
  </div>
  <div class="d-flex mt-4">
    <div class="w-50 me-4">
      <label for="mode" class="form-label fs-4 text-gray-600">Mode</label>
      <select name="mode" id="mode" class="form-select form-select-lg">
        <option value="online">Online</option>
        <option value="offline">Offline</option>
      </select>
    </div>
    <div class="w-50">
      <label for="category" class="form-label fs-4 text-gray-600">Category</label>
      <select name="category" id="category" class="form-select form-select-lg">
        <option value="comp">Competition</option>
        <option value="web">Webinar</option>
        <option value="sem">Seminar</option>
        <option value="work">Workshop</option>
        <option value="meet">Meetups</option>
        <option value="fest">Fests</option>
      </select>
    </div>
  </div>
  <div class="d-flex mt-4">
    <div class="w-50 me-4">
      <label for="prize" class="form-label fs-4 text-gray-600">Prizes Info</label>
      <textarea rows="3" cols="21" id="prize" name="prize" class="form-control form-control-lg"></textarea>
    </div>
    <div class="w-50">
      <label for="contact" class="form-label fs-4 text-gray-600">Contact Info</label>
      <textarea rows="3" id="contact" name="contact" class="form-control form-control-lg"></textarea>
    </div>
  </div>
</div>

        
        </>
    )
}