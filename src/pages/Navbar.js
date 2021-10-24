import React, { useState } from "react";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import "./Navbar.css";
import SideDrawer from "./SideDrawer";
import Backdrop from "./BackDrop";
import { Link } from "react-router-dom";

function Navbar() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawer = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <div>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
        <nav>
          <div className="sidedrawer-nav">
            <div className="side-drawer-div">
              <Link className="side-drawer-p" to="/">
                <p>Home</p>
              </Link>
            </div>
            <div className="side-drawer-div">
              <Link className="side-drawer-p" to="/">
                <p>Login/Register</p>
              </Link>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </nav>
      </SideDrawer>
      <div className="navheader">
        <div className="img-navheader">
          <a href="/"><h1>DEMO APP</h1></a>
        </div>

        <button onClick={openDrawer} className="navicon-div-span">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav>
          <div className="navheader__icons">
            <div className="dropdown">
              <Link to="/" className="navheader__icon">
                <LocalLibraryIcon style={{ color: "#dc2f02" }} />
                <p>Login/Register</p>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
