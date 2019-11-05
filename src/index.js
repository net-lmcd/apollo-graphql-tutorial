import React from 'react'
import {render} from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

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


render(
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
    , document.getElementById('root'))

serviceWorker.unregister()
