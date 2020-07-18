import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="temp" />
      <div>
        {data.file.name}
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    file(fields: { slug: { eq: $slug } }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
