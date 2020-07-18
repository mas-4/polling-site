import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import pollsters from "../images/national/pollster/pollsters.json"
import states from "../images/states/states.json"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <ul>
        {Object.keys(pollsters).map((key) => (
          <li key={key}>{pollsters[key]}</li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
