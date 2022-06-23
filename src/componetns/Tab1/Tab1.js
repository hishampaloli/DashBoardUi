import React from 'react'
import { data } from '../Dataas/Data';

function Tab1() {
  return (
    <div className="right">
    <p className="d-p">Dashboard</p>
    <div className="row1">
      {data.map((item) => {
        return (
          <div className={"item-card " + item.class}>
            <h1>{item.heading}</h1>
            <p>{item.text}</p>
            {item.background}
          </div>
        );
      })}
    </div>

    <div className="row2">
      <div className="detail-card">
      <div className="card-title">
        <p>Default Shipping Address</p>
      </div>

      <div className="card-body">
        <ul>
          <li>Address : 3947 West Side Avenue Hackensack, NJ 07601</li>
          <li>Country : United States</li>
          <li>State : Alaska</li>
          <li>City : College</li>
          <li>Postal Code : 1254</li>
          <li>Phone : 201-287-7714</li>
        </ul>
      </div>
      </div>
      <div className="detail-card">
      <div className="card-title">
        <p>Purchased Package</p>
      </div>

      <div className="card-body1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXo6arjRZqJEg02Q6O5avP6gIkPQRHb0DpAg&usqp=CAU" alt="" />
        <p>Product Upload: 300 times</p>
        <p>Product Upload Remaining: 594 times</p>
        <h2>Current Package: Premium</h2>
        <button>Upgrade</button>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Tab1