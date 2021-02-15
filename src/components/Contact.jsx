import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Contact = props => {
  const { title, id } = props

  const data = useStaticQuery(graphql`
    query ContactQuery {
      allWpPage(filter: { id: { eq: "cG9zdDoxNTQ=" } }) {
        nodes {
          id
          contactpage_content {
            pageName
          }
        }
      }
    }
  `)

  const page = data.allWpPage.nodes.find(obj => obj.id === id)
  const { contactpage_content } = page
  const { pageName } = contactpage_content

  return <section>{<h1>{pageName}</h1>}</section>
}
export default Contact
