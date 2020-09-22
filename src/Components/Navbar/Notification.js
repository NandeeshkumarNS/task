import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

export default function Notification() {
    return (
        <div>
            <h4>NOTIFICATION</h4>
            <div className="container notification-block">
                <div style={{ display: "flex"}}>
                    <FontAwesomeIcon icon={faMobileAlt} style={{ height: "39px", width: "25px", color: "orange" }} />
                    <dl style={{ paddingLeft: "20px" }}>
                        <dt>Initial Design Draft</dt>
                        <dd style={{color:"darkgray"}}>Mon, Jul 13, 04:30 PM</dd>
                    </dl>
                </div>
                <p>Please check the draft and approve or decline <br></br>accrodingly </p>
                <div style={{textAlign:"end", paddingBottom:"20px"}}>
                <button type="button" className="Button">VIEW DRAFT</button>
                </div>
            </div>
        </div>
    )
}
