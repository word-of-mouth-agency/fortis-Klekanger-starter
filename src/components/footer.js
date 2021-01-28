// Very simple footer.
// All Wordpress pages are queried in Layout component and sent to this component as props
// Iterate over all pages, make one menu item per page

import React from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.css"
import logo from "./../images/fortis-nav-logo.svg"
import phone_icon from "./../images/icon-phone.svg"

const Footer = props => {
  const navPages = []

  const allPages = () => {
    props.pages.nodes.forEach(page => {
      if (page.isOnNav.isonnav === true) {
        navPages.push(
          <li key={page.id}>
            <Link to={page.uri} className={`navlink_${page.slug} navlink`}>
              {page.title.toUpperCase()}
            </Link>
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
      <footer>
        <div className="logo-container">
          <Link to="/">
            <img className="nav-logo" src={logo} alt="fortis logo" />
          </Link>
        </div>
        <ul className={styles.nav}>{navPages.reverse()}</ul>
      </footer>
    </>
  )
}

export default Footer