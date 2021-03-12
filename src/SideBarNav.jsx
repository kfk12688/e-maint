import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import MetisMenu from "@metismenu/react";
import "metismenujs/dist/metismenujs.css";
import { Nav } from "react-bootstrap";

const SideBarNav = () => {
  return (
    <Fragment>
      <MetisMenu>
        <Nav className="Item">
          <Nav.Link className="m-t-sm">Navigation Menu</Nav.Link>
        </Nav>
        <li>
          <NavLink to="/d" exact>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/" exact>
            Assets
          </NavLink>
        </li>
        <li>
          <NavLink to="/pm" exact>
            PM
          </NavLink>
        </li>
        <li>
          <NavLink to="/workOrders" exact>
            Work Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/a" exact>
            WO Calendar
          </NavLink>
        </li>
        <li>
          <NavLink to="/c" exact>
            Work Order Request
          </NavLink>
        </li>
        <li>
          <NavLink to="/b" exact>
            Reports
          </NavLink>
        </li>
        {/* <li>
          <Link to="#" className="has-arrow">
            Wos
          </Link>
          <ul>
            <li>
              <NavLink to="/workorders">one</NavLink>
            </li>
            <li>
              <NavLink to="/pms">two</NavLink>
            </li>
            <li>
              <a
                href="https://github.com/onokumus/metismenujs"
                target="_blank"
                rel="noopener noreferrer"
              >
                metismenujs
              </a>
            </li>
          </ul>
        </li>
        <li>
          <Link to="#" className="has-arrow">
            Pms
          </Link>
          <ul>
            <li>
              <a
                href="https://github.com/onokumus/metismenujs"
                target="_blank"
                rel="noopener noreferrer"
              >
                metismenujs
              </a>
            </li>
            <li>
              <a
                href="https://github.com/onokumus/metismenu"
                target="_blank"
                rel="noopener noreferrer"
              >
                metismenu jquery
              </a>
            </li>
          </ul>
        </li> */}
      </MetisMenu>
    </Fragment>
  );
};

export default SideBarNav;
