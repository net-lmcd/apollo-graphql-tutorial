import React from 'react'
import './App.css'
import {Query} from 'react-apollo'
import {gql} from 'apollo-boost'
import MyRepositories from './MyRepositories'

const query = gql`
  {
    viewer {
      name
      email
    } 
  }
`

function App() {
  return (
      <>
        <div className="App">
          <Query query={query}>
            {result => {
              if (result.loading) return <p>loading...</p>
              if (result.error) return <p>{result.error.message}</p>
              return (
                  <div>
                    <h1> name : {result.data.viewer.name}</h1>
                    <p> Email : {result.data.viewer.email}</p>
                  </div>
              )
            }}
          </Query>
        </div>
        <MyRepositories/>
      </>
  )
}

export default App
