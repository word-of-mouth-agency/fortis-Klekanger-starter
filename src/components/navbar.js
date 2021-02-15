// Very simple navbar.
// All Wordpress pages are queried in Layout component and sent to this component as props
// Iterate over all pages, make one menu item per page

import React from "react"
import { Link } from "gatsby"
import { globalHistory } from "@reach/router"
import styles from "./navbar.module.css"
import logo from "./../images/fortis-nav-logo.svg"
import phone_icon from "./../images/icon-phone.svg"

const Navbar = props => {
  const path = globalHistory.location.pathname

  return (
    <>
      <nav>
        <div className="logo-container nav-container">
          <Link to="/">
            <img className="nav-logo" src={logo} alt="fortis logo" />
          </Link>
        </div>
        <ul className={styles.nav}>
          <li key="phone">
            <a
              href="tel:+61-400-000-000"
              className="navlink_phone-number navlink"
            >
              <img
                src={phone_icon}
                className="navlink_phone-icon"
                alt="phone icon"
              />
              <p>+61 400 000 000</p>
            </a>
          </li>
          <li key="book-a-quote">
            {path === "/book-a-quote/" ? (
              <Link
                to="/book-a-quote/"
                style={{ fontWeight: "bold" }}
                className={`navlink_book-a-quote navlink`}
              >
                BOOK A QUOTE
              </Link>
            ) : (
              <Link
                to="/book-a-quote/"
                style={{ fontWeight: "400" }}
                className={`navlink_book-a-quote navlink`}
              >
                BOOK A QUOTE
              </Link>
            )}
          </li>
          <li key="contact">
            {path === "/contact/" ? (
              <Link
                to="/contact/"
                style={{ fontWeight: "bold" }}
                className={`navlink_contact navlink`}
              >
                CONTACT
              </Link>
            ) : (
              <Link
                to="/contact/"
                style={{ fontWeight: "400" }}
                className={`navlink_contact navlink`}
              >
                CONTACT
              </Link>
            )}
          </li>
          <li key="services">
            {path === "/services/" ? (
              <Link
                to="/services/"
                style={{ fontWeight: "bold" }}
                className={`navlink_services navlink`}
              >
                SERVICES
              </Link>
            ) : (
              <Link
                to="/services/"
                style={{ fontWeight: "400" }}
                className={`navlink_services navlink`}
              >
                SERVICES
              </Link>
            )}
          </li>
          <li key="about">
            {path === "/about/" ? (
              <Link
                to="/about/"
                style={{ fontWeight: "bold" }}
                className={`navlink_about navlink`}
              >
                ABOUT
              </Link>
            ) : (
              <Link
                to="/about/"
                style={{ fontWeight: "400" }}
                className={`navlink_about navlink`}
              >
                ABOUT
              </Link>
            )}
          </li>
          <li key="home">
            {path === "/" ? (
              <Link
                to="/"
                style={{ fontWeight: "bold" }}
                className={`navlink_home navlink`}
              >
                HOME
              </Link>
            ) : (
              <Link
                to="/"
                style={{ fontWeight: "400" }}
                className={`navlink_home navlink`}
              >
                HOME
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
