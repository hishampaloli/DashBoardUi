import React from 'react'
import './Tab3.css'
import { dataTab3 } from '../Dataas/Data';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


function Tab3() {
  return (
    <div className="right-3">
    <p className="d-p">Affiliate</p>
    <div className="row3a">
      {dataTab3.map((item) => {
        return (
          <div className={item.class}>
          {item.logo}
            <h1>{item.heading}</h1>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>

    <div className="row2">
      <div className="detail-card-aff">

      <div className="card-body">
        <p className='sr0p'><span>https://demo.activeitzone.com/ecommerce/users/registration?referral_code=8zJTyXTlTT</span> </p>
        <button>Copy</button>
      </div>
      </div>
 
    </div>

    <div className="detail-card-aff">
      <div className="card-title">
        <p>Affiliate Stats</p>
        <div className="ri">
            <input type="text" name="" id="" placeholder='Search'/>
            <button>Filter</button>
        </div>
      </div>

      <div className="card-body-1 affde">
        <ul>
          <div className="aff-box">
            <h1>3</h1>
            <p >No of click</p>
          </div>

          <div className="aff-box">
            <h1>0</h1>
            <p>No of items</p>
          </div>

          <div className="aff-box">
            <h1>0</h1>
            <p>No of deliverd</p>
          </div>

          <div className="aff-box">
            <h1>3</h1>
            <p>No of cancel</p>
          </div>
        </ul>
      </div>
      </div>

      <div className="detail-card-aff">
      <div className="card-title">
        <p>Affiliate Earning History</p>
      </div>

      <div className="card-body-1 ">
       <li className='lst-li'><p>#</p> <p>	Referral User</p> <p>Amount</p></li>
       <li className='lst-li'><p>#</p> <p>	Referral User</p> <p>Amount</p></li>
       <li className='lst-li'><p>#</p> <p>	Referral User</p> <p>Amount</p></li>
       
      </div>
      </div>
  </div>
  )
}

export default Tab3