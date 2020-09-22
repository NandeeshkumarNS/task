import React from 'react'
import './Navbar.css'

export default function OrderDetails() {
  return (
    <div className="order-details-section">
      <h4>ORDER DETAILS</h4>
      <div className="order-details-block">
        <div class="container">
          <div class="row m-o flex-row justify-content-between">
            <div class="col-md-3 col-12">
              <p className="MainName">Order ID</p>
              <p className="SubName">SKP123456789</p>
              <p  className="MainName">Kitchen Size</p>
              <p className="SubName">200Sqft</p>
            </div>
            <div class="col-md-3 col-12">
              <p className="MainName" >Address</p>
              <p className="SubName">No.98. ABC Layout industrial area Bangalore</p>
              <p className="MainName">Dimension</p>
              <p className="SubName">12m*14m*24m</p>
            </div>
            <div class="col-md-3 col-12">
              <p className="MainName">Contact Number</p>
              <p className="SubName">+919986244368</p>
              <p className="MainName">Kitchen Shape</p>
              <p className="SubName">L-Shape</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

