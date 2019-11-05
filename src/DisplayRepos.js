import React from 'react'

const DisplayRepos = props => {
  const { current, data, handleMore } = props
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
        <button onClick={handleMore}>Fetch More</button>
      </div>
  )
}

export default DisplayRepos