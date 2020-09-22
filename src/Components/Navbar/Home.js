import React from 'react'
import OrderDetails from './OrderDetails'
import OrderStatus from './OrderStatus'
import Notification from './Notification'

export default function Home() {
    return (
        <div className="container">
            <OrderDetails />
            <div class="row" style={{paddingTop:"30px"}}>
                <div class="col-md-7 col-12 mb-4">
                    <OrderStatus />
                </div>
                <div class="col-md-5 col-12 mb-4">
                    <Notification />
                </div>
            </div>
        </div>
    )
}
