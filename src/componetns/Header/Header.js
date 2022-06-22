import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <div className="header">
      <div className="header-row2">
        <img
          style={{ width: "100px", marginLeft: "15px" }}
          className="lg-img"
          src="https://www.beautyplayers.com/public/uploads/all/BccpSvTQNP9tyqglx5bhqqzUXMUt9R6A09QoqxGe.png"
          alt=""
        />
        <div className="header-row2-left">
          <div className="div-left ">
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
          <input
            type="text"
            className="input"
            placeholder="I am shopping for..."
          />
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
          <li>
            <NotificationsNoneIcon className="hd-ic" />
          </li>
          <li>
            <p>
              Hello,hisham <br />
              <strong>
                {" "}
                Accounts & details <ArrowDropDownIcon />
              </strong>{" "}
            </p>
          </li>
          <li>
            <p>
              Upcomming
              <br />
              <strong>Appointments</strong>{" "}
            </p>
          </li>
          <li>
            <AddShoppingCartIcon className="hd-ic" on />
            Cart
          </li>
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
        <div className="sm-left">
          <img
            style={{ width: "100px", marginLeft: "15px" }}
            className="lg-img"
            src="https://www.beautyplayers.com/public/uploads/all/BccpSvTQNP9tyqglx5bhqqzUXMUt9R6A09QoqxGe.png"
            alt=""
          />
        </div>

        <div className="sm-middle">
        {search ? <input
            type="text"
            className="input"
            style={{width:'260px'}}
            placeholder="I am shopping for..."
          /> : (<div className="div-left-sm ">
            <LocationOnIcon
              style={{ color: " rgba(141, 8, 70, 0.815)", marginRight: "10px" }}
            />
            <div>
              <p>Delhi</p>
              <p className="p-n">
                GT Road Shahdara, East Delhi <ArrowDropDownIcon />
              </p>
            </div>
          </div>)}
          
          
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

        <div
          className={nav ? "header-row2-right open" : "header-row2-right close"}
        >
          <DoDisturbOnIcon
            className="menu-ic-close"
            onClick={(e) => {
              setNav(false);
            }}
          />
          <li>
            <NotificationsNoneIcon className="hd-ic" />
          </li>
          <li>
            <p>
              Hello,hisham <br />
              <strong>
                {" "}
                Accounts & details <ArrowDropDownIcon />
              </strong>{" "}
            </p>
          </li>
          <li>
            <p>
              Upcomming
              <br />
              <strong>Appointments</strong>{" "}
            </p>
          </li>
          <li>
            <AddShoppingCartIcon className="hd-ic" on />
            Cart
          </li>
        </div>


      </div>
    </div>
  );
}

export default Header;
