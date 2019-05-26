import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import SEO from "../components/seo"
import styles from './projects.module.css';


const Projects = ({...props}) => {
    const { repositories } = props.data.github.viewer;

    console.log(repositories);

    return (
        <Layout>
            <SEO title="Projects" />
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2>Teeldr</h2>
                    <a href="https://www.teeldr.com/">teeldr.com</a>
                    <p>A full stack news based web application near completion that scrapes a multitude of news websites provided by an external API 
                        and summarizes article content using a modified open source Python WordRank algorithm implementation
                         for easy media consumption.</p>
                </div>
                <div className={styles.right}>

                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2>Portfolio</h2>
                    <a href="https://www.allentsai.dev/">allentsai.dev</a>
                    <p>Utilized Gatsby.js which compiled my React code at build time into static HTML,JS,CSS files. This allows for better SEO visibility with bots that do not scrape javascript content along
                     with a faster load time because the client does not need to load an entire react bundle. The data on the front page comes from querying with GraphQL on GitHub's API, with this approach, it allowed me to query the exact data I wanted to display all in one HTTP request.</p>
                </div>
                <div className={styles.right}>

                </div>
            </div>
        </Layout>
    )
}


export const GatsbyQuery = graphql`
{
    github {
      viewer {
        repositories(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
          totalCount
          nodes {
            isPrivate
            name
            description
            createdAt
            pushedAt
            url
            languages(first: 4, orderBy: {field: SIZE, direction: DESC}) {
              totalCount
              edges {
                size
                node {
                  color
                  name
                }
              }
            }
          }
        }
      }
    }
  } 
`;

export default Projects;