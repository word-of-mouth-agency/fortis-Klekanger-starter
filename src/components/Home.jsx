import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import logo_icons from "./../images/logo-icons.svg"
import "react-slideshow-image/dist/styles.css"
//import { Slide } from "react-slideshow-image"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import Slider from "react-slick"
import { services } from "./services"

// Import css files
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Home = props => {
  const { title, id } = props

  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  }

  useEffect(() => {
    console.log("somehting")
  })

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
        <Slider {...config}>
          {services.map((x, i) => {
            return (
              <div key={i} className="img-card">
                <div class="card-body">
                  <div className="card-title">{x.title}</div>
                  <div className="card-text">{x.text}</div>
                </div>
              </div>
            )
          })}
        </Slider>
      </section>
    </div>
  )
}
export default Home
