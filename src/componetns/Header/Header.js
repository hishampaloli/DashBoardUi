import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import MenuIcon from "@mui/icons-material/Menu";import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import PaidIcon from '@mui/icons-material/Paid';
import PersonIcon from '@mui/icons-material/Person';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import cart from './imag/header icons/CART.png'
import coupon from './imag/header icons/coupons.png'
import login from './imag/signup.png'
import expert from './imag/header icons/NEARBY.png'


const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[700],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[800],
  },
}));

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function Header() {
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState(false);
  const [delivery, setDelivery] = useState(false)


  return (
    <div className="header">
      <div className="header-row2">
      <div className="toSplit">
      
      <div style={{display:'flex', alignItems:'center'}}>
        <img
          style={{ width: "100px", marginLeft: "15px" }}
          className="lg-img"
          src="https://www.beautyplayers.com/public/uploads/all/BccpSvTQNP9tyqglx5bhqqzUXMUt9R6A09QoqxGe.png"
          alt=""
        />
        <div className="header-row2-left">
        <div className="switch-btn" >
        <h3 className={delivery ? 'red' : 'grey'}>BOOK</h3>
<GreenSwitch {...label} defaultChecked  onClick={() => {delivery ? setDelivery(false): setDelivery(true)}}/>
<p className={!delivery ? 'red' : 'grey'}>RESELL</p>
        </div>
          <input
            type="text"
            className="input"
            placeholder="Search for Services..."
          />
          
          </div>
        </div>

        
</div>
        <div
          className={nav ? "header-row2-right open" : "header-row2-right close"}
        >
          <DoDisturbOnIcon
            className="menu-ic-close"
            onClick={(e) => {
              setNav(false);
            }}
          />

          <ul>
           
          <li>
          <img src={expert} className="hd-ic" alt="" />
                <strong > Nearby Experts</strong>  
          </li>
          
          <li style={{marginRight: '10px'}}>
          <img src={coupon} className="hd-ic" alt="" />
              <strong>Coupons</strong> 
          </li>
          <li style={{marginRight: '15px',marginLeft:'28px'}}>
          <img src={login} className="hd-ic" alt="" />
            <strong> Login</strong>
          </li>
          <li>
          
          <img src={cart} className="hd-ic" alt="" srcset="" />
            <strong> Cart</strong>
          </li>
          </ul>
        </div>
        <div>
          <MenuIcon
            className="menu-ic"
            onClick={(e) => {
              setNav(true);
            }}
          />
        </div>
      </div>

      <div className="small-header">
      <div className="small-1" style={{display:'flex',alignItems:'center', justifyContent: 'space-between', width:'100%'}}>
        <div className="sm-left">
          <img
            style={{ minWidth: "100px", marginLeft: "15px" }}
            className="lg-img"
            src="https://www.beautyplayers.com/public/uploads/all/BccpSvTQNP9tyqglx5bhqqzUXMUt9R6A09QoqxGe.png"
            alt=""
          />
        </div>

        <div className="sm-middle">
        {search ? <input
            type="text"
            className="input"
            placeholder="Search for Services . . ."
          /> : ( <div>
          <div className="div-left-sm ">
            <LocationOnIcon
              style={{ color: " rgba(141, 8, 70, 0.815)", marginRight: "10px" }}
            />
            <div>
              <p>Delhi</p>
              <p className="p-n">
                GT Road Shahdara, East Delhi <ArrowDropDownIcon />
              </p>
            </div>
          </div>
          </div> )}
          
          
        </div>

        <div className="sm-right">
          <div className="sm-r-l">
            <SearchIcon className="sm-search" onClick={(e) => setSearch(true)} />
          </div>
          <div className="sm-r-r">
          <MenuIcon
            className="menu-ic"
            onClick={(e) => {
              setNav(true);
              setSearch(false)
            }}
          />
          </div>
          
        </div>
        </div>

        <div className="switch-btn">
        <h3 className={delivery ? 'red' : 'grey'}>BOOK</h3>
<GreenSwitch {...label} defaultChecked  onClick={() => {delivery ? setDelivery(false): setDelivery(true)}}/>
<p className={!delivery ? 'red' : 'grey'}>RESELL</p>
        </div>

        <div
          className={nav ? "header-row2-right open" : "header-row2-right close"}
        >
          <DoDisturbOnIcon
            className="menu-ic-close"
            onClick={(e) => {
              setNav(false);
            }}
          />
          <ul style={{display:'flex', flexDirection:'column'}}>
           
           <li>
           <img src={expert} className="hd-ic" alt="" />
               Nearby  <strong style={{marginLeft:'5px'}}>Experts</strong>  
           </li>
           
           <li style={{marginRight: '10px'}}>
           <img src={coupon} className="hd-ic" alt="" />
                Coupons
           </li>
           <li style={{marginRight: '15px',marginLeft:'28px'}}>
           <img src={login} className="hd-ic" alt="" />
             Login
           </li>
           <li>
           
           <img src={cart} className="hd-ic" alt="" srcset="" />
             Cart
           </li>
           </ul>
        </div>


      </div>
    </div>
  );
}

export default Header;
