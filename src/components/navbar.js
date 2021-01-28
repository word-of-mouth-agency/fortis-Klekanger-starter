// Very simple navbar.
// All Wordpress pages are queried in Layout component and sent to this component as props
// Iterate over all pages, make one menu item per page

import React from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.css"
import logo from "./../images/fortis-nav-logo.svg"

const Navbar = props => {
  const navPages = []

  const allPages = () => {
    props.pages.nodes.forEach(page => {
      if (page.isOnNav.isonnav === true) {
        navPages.push(
          <li key={page.id}>
            <Link to={page.uri}>{page.title.toUpperCase()}</Link>
          </li>
        )
      }
      console.log(page)
    })
  }

  allPages()

  return (
    <>
      <nav>
        <div className="logo-container">
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
