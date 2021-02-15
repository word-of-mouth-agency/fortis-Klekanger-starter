import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Home = props => {
  const { title, id } = props

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allWpPage(filter: { id: { eq: "cG9zdDoxODk=" } }) {
        nodes {
          id
          page_content {
            pageName
            heroImage {
              mediaItemUrl
            }
          }
        }
      }
    }
  `)

  const page = data.allWpPage.nodes.find(obj => obj.id === id)
  const { page_content } = page
  const { heroImage } = page_content
  const { mediaItemUrl } = heroImage

  return (
    <section className="home_landing-section">
      <h1>{title}</h1>
      <div className="hero-img">
        <img src={mediaItemUrl} alt="hero" />
      </div>
    </section>
  )
}
export default Home
