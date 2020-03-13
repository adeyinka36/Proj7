import React, { Component } from 'react';

import  Photos from'./photos.js';

import Form from './form.js';
import './App.css';
import Api from './config.js';
import {BrowserRouter,
Route,Switch} from 'react-router-dom'
import axios from 'axios'
import NotFound from './notfound';





class  App extends Component {
  state={
    loading:true,
    searchedPics:[],
     BestPics2019:[],
     wildlife:[],
     cars:[]

    
  }

  componentDidMount(){
    // fetch default pics(bestpics2019,wildlife,)
    let promises =[axios.get(`https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${Api}&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${Api}&gallery_id=66911286-72157647277042064&per_page=24&format=json&nojsoncallback=1`),
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${Api}&gallery_id=72157704515204635&format=json&nojsoncallback=1https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${Api}&gallery_id=72157704515204635&per_page=24&format=json&nojsoncallback=1`),
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${Api}&gallery_id=72157646657997062&format=json&nojsoncallback=1https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${Api}&gallery_id=72157646657997062&per_page=24&format=json&nojsoncallback=1`)]
    
    Promise.all(promises)

      .then(results=>{
        console.log("2")
        console.log (results[0].data)
      this.setState({
        BestPics2019:results[0].data.photos.photo.map(result=>{return(`https://farm${result.farm}.staticflickr.com/${result.server}/${result.id}_${result.secret}.jpg`)}),
        wildlife:results[1].data.photos.photo.map(result=>{return(`https://farm${result.farm}.staticflickr.com/${result.server}/${result.id}_${result.secret}.jpg`)}),
        cars:results[2].data.photos.photo.map(result=>{return(`https://farm${result.farm}.staticflickr.com/${result.server}/${result.id}_${result.secret}.jpg`)}),
      

        })
        
        this.state.loading=false
    }).catch(error=>{
      console.log("Error fetching or Pasing data   "+  error)
    })
  }
  // function for searching api
  searchPics=(query="cats")=>{
    
    console.log("query is "+query)
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${Api}&tags=${query}&per_page=24&format=json&nojsoncallback=-1`)
      .then(results=>{
        
        this.setState({
          
          searchedPics:results.data.photos.photo.map(result=>{return(`https://farm${result.farm}.staticflickr.com/${result.server}/${result.id}_${result.secret}.jpg`)})
        })
      this.state.loading=false
      })
      .catch(error=>{
        console.log("Fecting or Parsing Error")
        console.log(error)
      })
  }
  
  render(){
    console.log(this.state.BestPics2019)
    if (this.state.cars.length<1&&this.state.searchedPics.length<1&&this.state.wildlife.length<1&&this.state.BestPics2019.length<1){
      return(
        <BrowserRouter>
        <div className="container">
        <Form/>
        <h1>Loading..</h1>
        </div>
        </BrowserRouter>
      )
    }
    else{
    return (
      
    <BrowserRouter>
      <div className="container">
      {/* form is rendered here */}
          <Form onSearch={this.searchPics}/>
          <Switch>
          <Route  exact path="/" render={()=><Photos pics={this.state.BestPics2019}/>}/>
          <Route   exact path="/pics2019" render={()=><Photos pics={this.state.BestPics2019}/>}/>
          <Route   exact path="/wildLife" render={()=><Photos pics={this.state.wildlife}/>}/>
          <Route   exact path="/cars" render={()=><Photos pics={this.state.cars}/>}/>
          {/* search route */}
         
          <Route  exact path='/search' render={()=><Photos pics={this.state.searchedPics} loading={this.state.loading}/>}/>
        
          {/* search not fount */}
          <Route  component={NotFound}></Route>
          </Switch>
          
      </div>
          
  </BrowserRouter>
  );
    }

}
}
export default App;
