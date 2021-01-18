import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navbar from "./navbar"
import styles from "./layout.module.css"

const Layout = ({ children }) => {
  const {
    data: {
      nodes: [{ generalSettings: data }]
    },
    pages
  } = useStaticQuery(
    graphql`
      query {
        data: allWp {
          nodes {
            generalSettings {
              title
              description
            }
          }
        }
        pages: allWpPage {
          nodes {
            id
            uri
            title
          }
        }
      }
    `
  )

  // Retrieve the site title and description from Wordpress
  const title = data.title || "Please set site title in Wordpress"
  const description =
    data.description || "Please set site description in Wordpress"

  return (
    <>
      <Navbar pages={pages} />
      <Header siteTitle={title} siteDesc={description} />
      <main>{children}</main>

      <footer className={styles.pageFooter}>
        Word of Mouth Agency © {new Date().getFullYear()}, made with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
