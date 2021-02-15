import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import logo_icons from "./../images/logo-icons.svg"

const Home = props => {
  const { title, id } = props

  const data = useStaticQuery(graphql`
    query HomeQuery {
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
      <div className="hero-text-wrapper">
        <h1>FORTIS GROUP WA</h1>
        <p>ELECTRICAL | PLUMBING | RETICULATION | HANDYMAN | AIRCON</p>
        <img className="logo-icons" src={logo_icons} alt="icons" />
      </div>
      <div className="hero-img">
        <img src={mediaItemUrl} alt="hero" />
      </div>
    </section>
  )
}
export default Home
