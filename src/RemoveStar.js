import React from 'react'
import { Mutation } from 'react-apollo'
import { removeStarquery } from "./queries"

const RemoveStar = props => {
  const { id, refetch } = props
  return(
      <Mutation mutation={removeStarquery}>
        {(removeStar, {error, loading, data}) => {
          return(
           <div>
            <button
              onClick={()=>{
                removeStar({
                  variables : {repoId : id}
                }).then( data => refetch())
              }}
            >
              {" "}
             remove star
            </button>
             Remove Star
             { error && <p>{error.message}</p>}
             { loading && <p>{error.loading}</p>}
           </div>
         )
        }
      }
      </Mutation>
  )
}

export default RemoveStar