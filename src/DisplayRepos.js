import React from 'react'
import AddStar from './AddStar'
import RemoveStar from './RemoveStar'

const DisplayRepos = props => {
  const {current, data, handleMore, refetch} = props
  return (
      <div>
        <ul>
          <h2>First {current} repositories</h2>
          {data.viewer.repositories.edges.map(({node}, index) => {
            return (
                <ul key={node.id}>
                  <li>
                    {node.name}
                    {node.viewerHasStarred ?
                        <RemoveStar id={node.id} refetch={refetch}/>
                        :
                        <AddStar id={node.id} refetch={refetch}/>

                    }
                  </li>
                  <li>stars {node.stargazers.totalCount}</li>
                </ul>
            )
          })
          }
        </ul>
        <button onClick={handleMore}>Fetch More</button>
      </div>
  )
}

export default DisplayRepos