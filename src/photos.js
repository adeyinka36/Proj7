import React, { Component } from 'react';
import ListPhoto from './listphoto'


class Photos extends Component{
    state={

     
    }
    render(){
  if(this.props.pics.length>0){
      console.log("photo")
      console.log(this.props.pics)
  
        return(
    <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {this.props.pics.map(photo=><ListPhoto key={photo} picsSource={photo} />)}
          {/* //<!-- Not Found --> */}
        </ul>
      </div>
        )
    }
  else{
    return(
      <div>
         <h1>Sorry your search has no matches. Please Try again</h1>
      </div>
    )
  }
  }

}


export default Photos 