import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const reposQuery = gql`
  {
    viewer{
      repositories(first:10){
        edges{
          node {
            name
          }
        }
      }
    }
  }
`

const MyRepositories = () => {
  return(
      <Query query={reposQuery}>
        {( {loading, error, data}) => {
            if (loading) return <p>loading...</p>
            if (error) return <p>{error.message}</p>
            return(
                <ul>
                  <h2>Top 10 repositories</h2>
                  {data.viewer.repositories.edges.map(({node},index) => {
                      return(
                          <li key={index}>{node.name}</li>
                      )
                    })
                  }
                </ul>
            )
          }
        }
      </Query>
  )
}

export default MyRepositories