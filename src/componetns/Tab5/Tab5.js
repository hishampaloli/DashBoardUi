import React from "react";
import { dataTab4 } from "../Dataas/Data";
import AddBoxIcon from '@mui/icons-material/AddBox';

function Tab5() {
  return (
    <div className="right-3">
      <p className="d-p">Affiliate</p>
      <div className="row3a">
        {dataTab4.map((item) => {
          return (
            <div className={item.class}>
              {item.logo}
              <h1>{item.heading}</h1>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>

      <div className="detail-card-aff">
        <div className="card-title">
          <p>Affiliate withdraw request history</p>
        </div>

        <div className="card-body-tab2">
          <ul>
            <li>
              <strong>#</strong>
            </li>
            <li className="lli" style={{display:'flex', alignItems:'center'}}>
              <AddBoxIcon className="ad-ico" /> 1
            </li>
            <li className="lli" style={{display:'flex', alignItems:'center'}}>
            <AddBoxIcon className="ad-ico" /> 2
            </li>
          </ul>

          <ul>
            <li>
              <strong>Date</strong>
            </li>
            <li className="lli">20/2/2022</li>
            <li className="lli">02/9/2022</li>
          </ul>

          <ul>
            <li>
              <strong>Amount</strong>
            </li>
            <li className="lli">$5.00</li>
            <li className="lli">$293.00</li>
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Tab5;