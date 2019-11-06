import { gql } from 'apollo-boost'

const reposQuery = gql`
 query MyRepositories($first : Int!){
   viewer{
    repositories(first : $first){
      edges{
        node {
          id
          name
          stargazers{
          totalCount
          }
          viewerHasStarred
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

const addStarquery = gql`
  mutation AddStar($repoId: ID!) {
    addStar(input: { starrableId: $repoId }) {
      starrable {
        stargazers {
          totalCount
        }
        viewerHasStarred
      }
    }
  }
`;

const removeStarquery = gql`
  mutation RemoveStar($repoId : ID!){
    removeStar(input: {starrableId : $repoId}){
      starrable{
        stargazers{
          totalCount
        }
        viewerHasStarred
      }
    }
  }
`

export { reposQuery, userQuery, addStarquery, removeStarquery}