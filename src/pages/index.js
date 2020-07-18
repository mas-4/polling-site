import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import pollsters from "../images/national/pollster/pollsters.json"
import states from "../images/states/states.json"

const IndexPage = ({ data }) => {
  const pollster_links = [];
  const state_links = [];

  data.allFile.edges.forEach( ({node}) => {
    if (node.name in pollsters) {
      pollster_links.push({
        name: node.name,
        slug: node.fields.slug,
        title: pollsters[node.name],
      });
    } else if (node.name in states) {
      state_links.push({
        name: node.name,
        slug: node.fields.slug,
        title: states[node.name],
      });
    }
  });

  return (
    <Layout>
      <SEO title="Home" />
      <h1>National Polling</h1>
      <ul>
        <li><Link to="/national/since_april">All Polls Since April</Link></li>
        <li><Link to="/national/all">All Polls</Link></li>
      </ul>
      <h1>Individual National Pollsters</h1>
      <ul>
        {pollster_links.map((node) => (
          <li key={node.name}>
            <Link to={node.slug}>
              {node.title}
            </Link>
          </li>
        ))}
      </ul>
      <h1>State Polls</h1>
      <ul>
        {state_links.map((node) => (
          <li key={node.name}>
            <Link to={node.slug}>
              {node.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
export const query = graphql`
  query {
    allFile {
      edges {
        node {
          name
          fields {
            slug
          }
        }
      }
    }
  }
`
