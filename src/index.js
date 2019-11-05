import React from 'react'
import {render} from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ApolloClient, {gql} from 'apollo-boost'

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers : {
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
      }
    })
  }
})

client
    .query({
      query: gql`
        query GetnameandEmail {
          viewer {
            email
            name
          }
        }
      `
    })
    .then(res => console.log(res))


render(<App/>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
