import React from 'react'
import { Query } from 'react-apollo'
import {reposQuery} from "./queries"

const MyRepositories = () => {
  const handleMore = (current, fetchMore, data) => {
    fetchMore({
      variables : {first : current + 3},
      updateQuery : (prev, {fetchMoreResult}) => {
        if(!fetchMoreResult) return prev
        else {
         return Object.assign({}, prev, fetchMoreResult)
        }
      }
    })
  }
  return(
      <Query query={reposQuery} variables={{first : 6}}>
        {({loading, error, data, fetchMore}) => {
          if (loading) return <p>loading...</p>
          if (error) return <p>{error.message}</p>
          let current = data.viewer.repositories.edges.length
          return(
                <div>
                  <ul>
                    <h2>First {current} repositories</h2>
                    {data.viewer.repositories.edges.map(({node},index) => {
                      return(
                          <li key={index}>{node.name}</li>
                      )
                    })
                    }
                  </ul>
                  <button onClick={()=>handleMore(current, fetchMore, data)}>Fetch More</button>
                </div>
            )
          }
        }
      </Query>
  )
}

export default MyRepositories