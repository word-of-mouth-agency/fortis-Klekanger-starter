import { graphql, useStaticQuery } from "gatsby"

const Services = () => {
  const data = useStaticQuery(graphql`
    query servicesQuery {
      allWpPage(filter: { id: { eq: "cG9zdDoxODk=" } }) {
        nodes {
          electrical_service {
            title
            description
          }
        }
      }
    }
  `)

  const page = data.allWpPage.nodes.find(obj => obj)
  const { electrical_service } = page

  return [
    {
      title: electrical_service.title,
      text: electrical_service.description
    },
    {
      title: "Eget est lorem",
      text: "Lorem Ipsum adipiscing elit ipsum."
    },
    {
      title: "Tempus imperdiet",
      text: "Orci porta non pulvinar neque laoreet."
    },
    {
      title: "Mattis rhoncus",
      text: "Bibendum neque egestas congue quisque."
    },
    {
      title: "Odio ut enim",
      text: "Mattis rhoncus urna neque viverra justo."
    }
  ]
}

export default Services
