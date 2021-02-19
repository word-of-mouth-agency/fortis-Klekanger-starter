import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import logo_icons from "./../images/logo-icons.svg"
import "react-slideshow-image/dist/styles.css"
import { Slide } from "react-slideshow-image"

const Home = props => {
  const { title, id } = props

  const data = useStaticQuery(graphql`
    query HomeQuery {
      allWpPage(filter: { id: { eq: "cG9zdDoxODk=" } }) {
        nodes {
          id
          homepage_content {
            landingTitle
            landingText
            heroImage {
              mediaItemUrl
            }
          }
        }
      }
    }
  `)

  const page = data.allWpPage.nodes.find(obj => obj.id === id)
  const { homepage_content } = page
  const { heroImage, landingTitle, landingText } = homepage_content
  const { mediaItemUrl } = heroImage

  return (
    <div className="homepage">
      <section className="home_landing-section">
        <div className="hero-text-wrapper">
          <h1>{landingTitle.toUpperCase()}</h1>
          <p>ELECTRICAL | PLUMBING | RETICULATION | HANDYMAN | AIRCON</p>
          <img className="logo-icons" src={logo_icons} alt="icons" />
          <p>{landingText}</p>
          <div className="landing-btns">
            <button className="cta-btn">BOOK A QUOTE</button>
            <button className="secondary-btn">SERVICES</button>
          </div>
        </div>
        <div className="hero-img">
          <img src={mediaItemUrl} alt="hero" />
        </div>
      </section>
      <section className="home_services-section">
        <div className="slide-container">
          <Slide>
            <div className="each-slide">
              <div className="service-div" style={{ backgroundColor: `black` }}>
                <span>Slide 1</span>
              </div>
            </div>
            <div className="each-slide">
              <div className="service-div" style={{ backgroundColor: `grey` }}>
                <span>Slide 2</span>
              </div>
            </div>
            <div className="each-slide">
              <div
                className="service-div"
                style={{ backgroundColor: `aliceblue` }}
              >
                <span>Slide 3</span>
              </div>
            </div>
          </Slide>
        </div>
      </section>
    </div>
  )
}
export default Home
