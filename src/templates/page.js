// Template used for programmatically creating pages from data fetched from Wordpress
// Used by the createPage function in gatsby-node.js

import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./post.module.css"
import Components from "./../components/Components"

const PageTemplate = ({ data, location }) => {
  const { page } = data
  const { title, page_content } = page
  const type = title.toString()
  const ComponentToRender = Components[type]
  return (
    <Layout location={location}>
      <SEO title={title || "Untitled"} />
      <div className={styles.postContainer}>
        <article>
          {/* <h4 className={styles.blogTitle}>{title}</h4> */}
          {/* <div
            className={styles.blogText}
            dangerouslySetInnerHTML={{ __html: content }}
          /> */}
          {/* <p>{page_content.testText}</p> */}
          <ComponentToRender title={title} content={page_content} />
        </article>
      </div>
    </Layout>
  )
}
export default PageTemplate

// The $id comes from the createPage function in gatsby-node.js
// Query the page with this ID, and use it in this template
export const query = graphql`
  query pageQuery($id: String!) {
    page: wpPage(id: { eq: $id }) {
      title
      page_content {
        testText
      }
    }
  }
`
