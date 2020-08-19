import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="navbar-brand" href="#">
        <img
          src="assets/bna-logo.png"
          alt="bna-logo"
          style={{ height: "50px" }}
        />
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarNavDropdown"
        style={{ margin: "auto" }}
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link as={NavLink} to="/" className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" as={NavLink} to={"/steeringcommittee"}>
              Meetings
            </Link>
          </li>
          <li className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              News Letter
            </div>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" as={NavLink} to={"/recentnews"}>
                Recent
              </Link>
              <Link className="dropdown-item" as={NavLink} to={"/deadline-ads"}>
                Deadlines & Ads
              </Link>
              <Link className="dropdown-item" as={NavLink} to={"/newsarchive"}>
                Archive
              </Link>
              <div className="dropdown-item">Something else here</div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              About
            </div>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link
                className="dropdown-item"
                as={NavLink}
                to={"/ourneighborhood"}
              >
                Our Neighborhood
              </Link>
              <Link className="dropdown-item" as={NavLink} to={"/history"}>
                History
              </Link>
              <Link className="dropdown-item" as={NavLink} to={"/officers"}>
                Officers
              </Link>
              <Link className="dropdown-item" as={NavLink} to={"/bylaws"}>
                Bylaws
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Info
            </div>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" as={NavLink} to={"/codenext"}>
                CodeNEXT
              </Link>
              <Link className="dropdown-item" as={NavLink} to={"/floodplain"}>
                Floodplain
              </Link>
              <Link className="dropdown-item" as={NavLink} to={"/resources"}>
                Resources
              </Link>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" as={NavLink} to={"/supportpage"}>
              Support BNA
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" as={NavLink} to={"/contactus"}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
