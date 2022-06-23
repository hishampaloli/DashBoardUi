import React, { useState } from "react";
import "./mainTab.css";
import PostAddIcon from "@mui/icons-material/PostAdd";
import HomeIcon from "@mui/icons-material/Home";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FileDownload from "@mui/icons-material/FileDownload";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import NoiseAwareIcon from '@mui/icons-material/NoiseAware';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Tab1 from "../../componetns/Tab1/Tab1";
import Tab2 from "../../componetns/Tab2/Tab2";
import Tab3 from "../../componetns/Tab3/Tab3";
import Tab4 from "../../componetns/Tab4/Tab4";
import Tab5 from "../../componetns/Tab5/Tab5";

function MainTab() {

  const [right, setRight ] = useState('dash')
  console.log(right);
 
  return (
    <div className="main">

    <div className="sub-main">
      
      <div className="left">
        <div className="left-profile">
          <img
            src="https://demo.activeitzone.com/ecommerce/public/uploads/all/5XVyeLGw5zRpb63bqgn2dtIOjCktLgBltNSQIPG3.png"
            alt=""
          />
          <p>Hisham Paloli</p>
          <small>208-295-8053</small>
        </div>
        <div className="left-items">
          <ul>
            <li onClick={(e) => {setRight('dash')}}>
              <HomeIcon className="nav-ic"  /> dashboard
            </li>
            <li onClick={(e) => {setRight('pur')}}>
              <PostAddIcon  className="nav-ic" />
              Purchase{" "}
            </li>
            <li onClick={(e) => {setRight('aff')}}>
              <MonetizationOnIcon  className="nav-ic" />
              Affiliate Stats
            </li>
            <li onClick={(e) => {setRight('pay')}}>
              <MonetizationOnIcon  className="nav-ic" />
              Affiliate History
            </li>
            <li onClick={(e) => {setRight('req')}}>
              <PostAddIcon  className="nav-ic" />
              Withdraw request
            </li>
          </ul>
        </div>
      </div>

     {right === 'dash' ? <Tab1 /> : right === 'pur' ? <Tab2 /> :  right === 'aff' ? <Tab3 /> :  right === 'pay' ? <Tab4 /> :  right === 'req' ? <Tab5 /> :<h1>eee</h1> }
      
    </div>
    </div>
  );
}

export default MainTab;
