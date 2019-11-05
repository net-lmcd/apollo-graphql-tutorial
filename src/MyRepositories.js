import React from 'react'
import { Query } from 'react-apollo'
import {reposQuery} from "./queries"
import DisplayRepos from "./DisplayRepos"

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
              <DisplayRepos
                current={current}
                data={data}
                handleMore={()=>handleMore(current, fetchMore, data)}
              />
            )
          }
        }
      </Query>
  )
}

export default MyRepositories