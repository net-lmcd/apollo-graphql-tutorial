import { gql } from 'apollo-boost'

const reposQuery = gql`
 query MyRepositories($first : Int!){
   viewer{
    repositories(first : $first){
      edges{
        node {
          name
        }
      }
    }
  }
 }
`

const userQuery = gql`
  {
    viewer {
      name
      email
    } 
  }
`

export { reposQuery, userQuery}