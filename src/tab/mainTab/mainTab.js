import React, { useState } from "react";
import "./mainTab.css";
import PostAddIcon from "@mui/icons-material/PostAdd";
import HomeIcon from "@mui/icons-material/Home";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FileDownload from "@mui/icons-material/FileDownload";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import NoiseAwareIcon from '@mui/icons-material/NoiseAware';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Tab1 from "../../componetns/Tab1/Tab1";

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
            <li>
              <FileDownload  className="nav-ic" />
              File
            </li>
            <li>
              <HomeIcon  className="nav-ic" /> dashboard
            </li>
            <li>
              <PostAddIcon  className="nav-ic" />
              Purchase{" "}
            </li>
            <li>
              <FileDownload  className="nav-ic" />
              File
            </li>
          </ul>
        </div>
      </div>

     {right === 'dash' ? <Tab1 /> : <h1>eee</h1> }
      
    </div>
    </div>
  );
}

export default MainTab;
