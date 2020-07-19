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

  state_links.sort((a,b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })

  return (
    <Layout>
      <SEO title="Home" />
      <h3>
        Nate Rakich's <a href="https://fivethirtyeight.com/features/how-to-read-2020-polls-like-a-pro/">How To Read Polls in 2020</a> has the following tips:
      </h3>

      <ol>
        <li>Check the pollster’s track record.</li>
        <li>Avoid comparisons between pollsters.</li>
        <li>Note who’s being polled.</li>
        <li>Pay attention to the margin of error.</li>
        <li>Consider the source.</li>
        <li>If a poll has an odd result, there might be a reason for it.</li>
        <li>That said, don’t try to outguess or “unskew” the polls. </li>
        <li>Heed averages, not outliers.</li>
        <li>In the aggregate, polls are pretty accurate but not perfect.</li>
        <li>Polls are snapshots, not predictions.</li>
      </ol>
      <p>
        The purpose of this site is so I can more easily accomplish #2. I want
        to compare a poll to that pollster's previous polls. #'s 1 and 3-10 are
        not at all the purpose of this site. Toward that end, here are some
        helpful links:
      </p>

      <ul>
        <li><a href="https://projects.fivethirtyeight.com/pollster-ratings/">538's Pollster Ratings</a></li>
        <li><a href="https://projects.fivethirtyeight.com/polls/">538's Poll Data</a></li>
        <li><a href="https://projects.economist.com/us-2020-forecast/president">Economist's Forecast</a></li>
        <li><a href="https://270towin.com">270 to Win</a></li>
      </ul>

      <p>And now to the polls!</p>

      <h1>National Polling</h1>
      <ul>
        <li><Link to="/national/since_april">All Polls Since April</Link></li>
        <li><Link to="/national/all">All Polls</Link></li>
      </ul>
      <h1>Individual National Pollsters</h1>
      <ul style={{ columns: 2 }}>
        {pollster_links.map((node) => (
          <li key={node.name}>
            <Link to={node.slug}>
              {node.title}
            </Link>
          </li>
        ))}
      </ul>
      <h1>State Polls</h1>
      <ul style={{ columns: 2 }}>
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
