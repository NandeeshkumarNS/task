import React from 'react'
import './Navbar.css'

export default function OrderStatus() {
    return (
        <div>
            <h4>ORDER STATUS</h4>
            <div className="container order-status-block" style={{display:"flex", justifyContent:"space-between"}}>
                <div className="">
                    <p className="currentStatus">Current Status</p>
                    <p className="Approve"> <b>APPROVE INITIAL DRAFT</b></p>
                </div>
                <button type="button" className="DetailsButton">VIEW DETAILS</button>
            </div>
        </div>
    )
}
