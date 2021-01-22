// Very simple navbar.
// All Wordpress pages are queried in Layout component and sent to this component as props
// Iterate over all pages, make one menu item per page

import React from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.css"

const Navbar = props => {
  const navPages = []

  const allPages = () => {
    props.pages.nodes.forEach(page => {
      if (page.isOnNav.isonnav === true) {
        navPages.push(
          <li key={page.id}>
            <Link to={page.uri}>{page.title}</Link>
          </li>
        )
      }
      //console.log(page)
    })
  }

  allPages()

  return (
    <>
      <ul className={styles.nav}>{navPages}</ul>
    </>
  )
}

export default Navbar
