// Very simple navbar.
// All Wordpress pages are queried in Layout component and sent to this component as props
// Iterate over all pages, make one menu item per page

import React from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.css"
import logo from "./../images/fortis-nav-logo.svg"
import phone_icon from "./../images/icon-phone.svg"

const Navbar = props => {
  const navPages = []

  const allPages = () => {
    props.pages.nodes.forEach(page => {
      if (page.isOnNav.isonnav === true) {
        navPages.push(
          <li key={page.id}>
            {props.location.pathname === page.uri ? (
              <Link
                to={page.uri}
                style={{ fontWeight: "bold" }}
                className={`navlink_${page.slug} navlink`}
              >
                {page.title.toUpperCase()}
              </Link>
            ) : (
              <Link
                to={page.uri}
                style={{ fontWeight: "400" }}
                className={`navlink_${page.slug} navlink`}
              >
                {page.title.toUpperCase()}
              </Link>
            )}
          </li>
        )
      }
      console.log(page)
    })
    navPages.push(
      <li>
        <a href="tel:+61-400-000-000" className="navlink_phone-number navlink">
          <img
            src={phone_icon}
            className="navlink_phone-icon"
            alt="phone icon"
          />
          <p>+61 400 000 000</p>
        </a>
      </li>
    )
  }

  allPages()

  return (
    <>
      <nav>
        <div className="logo-container nav-container">
          <Link to="/">
            <img className="nav-logo" src={logo} alt="fortis logo" />
          </Link>
        </div>
        <ul className={styles.nav}>{navPages.reverse()}</ul>
      </nav>
    </>
  )
}

export default Navbar
