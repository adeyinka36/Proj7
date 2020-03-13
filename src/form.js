import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import Nav from './nav'


class Form extends Component{
   state={
       query:''
     
   }

//   onSearchChange=(e)=>{
//       console.log("this is e")
//       console.log(e)
//       this.setState({
//           query:e.target.value
//       })
//   }

  handleSubmit=(e)=>{
      
    e.preventDefault()
      console.log("handle submit")
      console.log(e.target.value)
      this.props.onSearch(document.getElementById("search").value)            

      
  }
       
//    click event in button and onchange event in input will call function that result in fetching search input and rendering pic
    render(){
        return(
    <div>
    <form className="search-form" onSubmit={this.handleSubmit} >
        <input type="search" name="search" placeholder="Search"  id="search" required onChange={this.handleSubmit} />
        <button type="submit" className="search-button" onClick={this.handleSubmit}  id="search"><Link  id="linkSearch" exact to='/search' >
          <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
          </Link></button>
    </form>
    <Nav/>
    </div>
        )

    }
}





export default Form