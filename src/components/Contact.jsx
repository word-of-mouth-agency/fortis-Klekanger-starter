import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import logo_icons from "./../images/logo-icons.svg"

const Contact = props => {
  const { title, id } = props

  const data = useStaticQuery(graphql`
    query ContactQuery {
      allWpPage(filter: { id: { eq: "cG9zdDoxNTQ=" } }) {
        nodes {
          id
          page_content {
            pageName
          }
        }
      }
    }
  `)

  const page = data.allWpPage.nodes.find(obj => obj.id === id)
  const { page_content } = page
  const { pageName } = page_content

  return <section>{<h1>{pageName}</h1>}</section>
}
export default Contact
