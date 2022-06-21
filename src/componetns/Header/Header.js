import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [input, setInput] = useState(false);
  const [nav, setNav] = useState(false)
  return (
    <div className="header">
      <div className="header-row2">
        <div className="header-row2-left">
        <img style={{width: '100px', marginLeft:'15px'}} src="https://www.beautyplayers.com/public/uploads/all/BccpSvTQNP9tyqglx5bhqqzUXMUt9R6A09QoqxGe.png" alt="" />
        {input ? 
          <input type="text" className="input" placeholder="I am shopping for..." /> : (<div className="div" onClick={(e) => setInput(true)}>
          <div className="div-left " >
        <LocationOnIcon style={{color: ' rgba(141, 8, 70, 0.815)', marginRight:'10px'}} />
          <div>
          <p>Delhi</p>
      <p className="p-n" >GT Road Shahdara, East Delhi <ArrowDropDownIcon /></p>
          </div>
          </div>
          <div className="div-right">
            <SearchIcon style={{color: 'rgb(81, 81, 81)'}} />
          <input type="text" placeholder="I am shopping for..." />
          </div>
          </div>)}
          
        </div>

        <div  className={nav ? "header-row2-right open" : "header-row2-right close"}>
        <DoDisturbOnIcon className="menu-ic-close" onClick={(e) => {setNav(false)}} />
            <li><NotificationsNoneIcon className="hd-ic" /></li>
            <li><p>Hello,hisham <br /><strong> Accounts & details <ArrowDropDownIcon /></strong>  </p></li>
            <li><p>Upcomming<br /><strong>Appointments</strong>  </p></li>
            <li><AddShoppingCartIcon className="hd-ic" />Cart</li>
        </div>
        <div>
          <MenuIcon className="menu-ic" onClick={(e) => {setNav(true)}} />
        </div>
      </div>
    </div>
  );
}

export default Header;
