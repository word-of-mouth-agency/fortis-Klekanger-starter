import React from "react"
// import { graphql } from "gatsby"

const Contact = props => {
  const { title, content } = props
  return (
    <div>
      <h1>{title}</h1>
      <pre>{JSON.stringify(content)}</pre>
    </div>
  )
}
export default Contact
