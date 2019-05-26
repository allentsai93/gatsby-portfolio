import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Activity from "../components/Activity/Activity"
import styles from "./index.module.css"
import githubIcon from "../images/github_icon.png"
import Statistics from '../components/Statistics/Statistics'

const IndexPage = ({ ...props }) => {
  const {
    repositories: {
      ...languages
    },
    repositoriesContributedTo: {
      nodes: [...repositories],
    }
  } = props.data.github.viewer

  const timeline = repositories.map((repo, i) => {
    return (
      <Activity
        key={i}
        isPrivate={repo.isPrivate}
        content={repo}
        image={githubIcon}
      />
    )
  })

  return (
    <Layout>
      <SEO title="Home" />
      <div className={styles.flex}>
        <div className={[styles.column, styles.columnBig].join(' ')}>
          <div className={styles.container}>
            <div className={styles.title}>
              <h1>Recent Activity</h1>
              <p className={styles.fetchedwith}>Fetched with GraphQL</p>
            </div>
            {timeline}
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.container}>
            <div className={styles.title}>
              <h1>Most Used Languages</h1>
              <p className={styles.fetchedwith}>Stats from GitHub public repositories</p>
            </div>
            <div className={styles.contentContainer}>
              <Statistics data={languages} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const GatsbyQuery = graphql`
  {
    github {
      viewer {
        repositories(privacy:PUBLIC, first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
          nodes {
            primaryLanguage {
              name
            }
            languages(first: 10, orderBy: {field:SIZE, direction:DESC}) {
              totalSize
              edges {
                size 
                node {
                  name
                  color
                }
              }
            }
          }
        }
        repositoriesContributedTo(
          first: 10
          includeUserRepositories: true
          orderBy: { field: CREATED_AT, direction: DESC }
        ) {
          totalCount
          nodes {
            isPrivate
            pushedAt
            createdAt
            object(expression: "master") {
              repository {
                name
                url
                primaryLanguage {
                  name
                }
              }
              ... on GitHub_Commit {
                message
                pushedDate
                additions
                changedFiles
                history {
                  totalCount
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
