import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

export default function GatsbyContentfulLogo() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "favicon.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 48
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  return (
    <GatsbyImage
      image={data.file.childImageSharp.gatsbyImageData}
      alt="Alt Text"
    />
  )
}

