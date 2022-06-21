import React from "react";
import "./Header.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CachedIcon from '@mui/icons-material/Cached';
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Header() {
  return (
    <div className="header">
      <div className="header-row1">
        <div className="header-row1-left">
          <li>
            English <KeyboardArrowDownIcon />
          </li>
          <li>
            U.S. Dollor $ <KeyboardArrowDownIcon />
          </li>
        </div>

        <div className="header-row1-right">
          <li>help line 8938493028</li>
          <li>
            <NotificationsIcon className="noti" />
          </li>
          <li>My panel</li>
          <li>LogOut</li>
        </div>
      </div>
      <div className="header-row2">
        <div className="header-row2-left">
          <h1 style={{color: '#e62e04',fontWeight:'700',fontSize:'33px'}}>LOGOOOO</h1>
          <div className="div">
            <input type="text" placeholder="I am shopping for..." />
            <div className="src-ic">
            <SearchIcon />
            </div>
          </div>
        </div>

        <div className="header-row2-right">
            <li><CachedIcon className="hd-ic" />Compare</li>
            <li><FavoriteBorderIcon className="hd-ic" />Whislist</li>
            <li><AddShoppingCartIcon className="hd-ic" />Cart</li>
        </div>
      </div>
      <div className="header-row3">
        <li>Home</li>
        <li>Flash sale</li>
        <li>Blogs</li>
        <li>All Brands</li>
        <li>All Categories</li>
        <li>All Sellers</li>
        <li>Coupons</li>
      </div>
    </div>
  );
}

export default Header;
