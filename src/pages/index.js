import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Activity from "../components/Activity/Activity"
import styles from "./index.module.css"

const IndexPage = ({ ...props }) => {
  const {
    repositoriesContributedTo: {
      nodes: [...repositories],
    },
  } = props.data.github.viewer

  console.log(repositories)

  const timeline = repositories.map((repo, i) => {
    return <Activity key={i} isPrivate={repo.isPrivate} content={repo} />
  })

  return (
    <Layout>
      <SEO title="Home" />
      <div class={styles.flex}>
        <div class={styles.column}>
          <h1 className={styles.title}>Recent Activity</h1>
          <div className={styles.container}>
            <p className={styles.fetchedwith}>Fetched with GraphQL</p>
            {timeline}
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
