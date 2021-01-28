import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

//import Header from "./header"
import Helmet from "react-helmet"
import Navbar from "./navbar"
import Footer from "./footer"
//import styles from "./layout.module.css"

import "../styles/globalStyles.css"

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
            slug
            isOnNav {
              isonnav
            }
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
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Navbar pages={pages} />
      {/* <Header siteTitle={title} siteDesc={description} /> */}
      <main>{children}</main>

      {/* <footer className={styles.pageFooter}>
        Word of Mouth Agency © {new Date().getFullYear()}, made with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}

      <Footer pages={pages} />
    </>
  )
}

export default Layout
