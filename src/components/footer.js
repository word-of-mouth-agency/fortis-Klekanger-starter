// Very simple footer.
// All Wordpress pages are queried in Layout component and sent to this component as props
// Iterate over all pages, make one menu item per page

import React from "react"
import { Link } from "gatsby"
//import styles from "./navbar.module.css"
import logo from "./../images/fortis-footer-logo.svg"
import phone_icon from "./../images/icon-phone-dark.svg"
import fb_icon from "./../images/fb-icon.svg"
import ig_icon from "./../images/instagram-icon.svg"

const Footer = props => {
  const navPages = []

  const allPages = () => {
    props.pages.nodes.forEach(page => {
      if (page.isOnNav.isonnav === true) {
        navPages.push(
          <li key={page.id}>
            {window.location.pathname === page.uri ? (
              <Link
                to={page.uri}
                style={{ fontWeight: "bold" }}
                className={`footerlink_${page.slug} navlink`}
              >
                {page.title.toUpperCase()}
              </Link>
            ) : (
              <Link
                to={page.uri}
                style={{ fontWeight: "400" }}
                className={`footerlink_${page.slug} navlink`}
              >
                {page.title.toUpperCase()}
              </Link>
            )}
          </li>
        )
      }
      console.log(page)
    })
  }

  allPages()

  return (
    <>
      <footer>
        <div className="logo-container footer-container">
          <Link to="/">
            <img className="nav-logo" src={logo} alt="fortis logo" />
          </Link>
        </div>
        <ul className="contact-links">
          <li>
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
          <li>
            <div>
              <img src={fb_icon} alt="fb icon" className="footer-social" />
              <img src={ig_icon} alt="ig icon" className="footer-social" />
            </div>
          </li>
        </ul>
        <h4 className="footer-title footer-title-nav">Navigation</h4>
        <ul className="footer-pages">{navPages}</ul>
        <p className="copyright footer-small">© Fortis Group WA 2020</p>
        <p className="website-by footer-small">
          Website by Word of Mouth - Spread The Word!
        </p>
      </footer>
    </>
  )
}

export default Footer
