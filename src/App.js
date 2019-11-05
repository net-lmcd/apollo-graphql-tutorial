import React from 'react'
import './App.css'
import {Query} from 'react-apollo'
import MyRepositories from './MyRepositories'
import {userQuery} from "./queries"


function App() {
  return (
      <>
        <div className="App">
          <Query query={userQuery}>
            {({loading, error, data}) => {
              if (loading) return <p>loading...</p>
              if (error) return <p>{error.message}</p>
              return (
                  <div>
                    <h1> name : {data.viewer.name}</h1>
                    <p> Email : {data.viewer.email}</p>
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
