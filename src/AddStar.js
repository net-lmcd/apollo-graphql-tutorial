import React, { Component } from 'react'
import {Mutation} from 'react-apollo'
import { addStarquery } from "./queries"


class AddStar extends Component{
  render(){
    const { id, refetch } = this.props
    return(
        <Mutation mutation={addStarquery}>
          {(addStar, {loading, error, data}) => {
            return(
            <div>
              <button
                onClick={()=>{
                  addStar({
                    variables : {repoId : id}
                  }).then( res => refetch())
                }}
              >
                {" "}
                AddStar
              </button>
              {loading && <p>loading...</p>}
              {error && <p>{error.message}</p>}
            </div>
            )
          }}
        </Mutation>
    )
  }
}

export default AddStar