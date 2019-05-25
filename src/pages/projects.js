import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import SEO from "../components/seo"


const Projects = ({...props}) => {
    const { repositories } = props.data.github.viewer;

    console.log(repositories);

    return (
        <Layout>
            <SEO title="Projects" />
            <h1>Projects</h1>
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