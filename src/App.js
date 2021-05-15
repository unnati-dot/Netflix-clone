import React, { useState,useEffect, Component } from 'react';
import './App.css';
import axios from "axios"

class App extends React.Component{

state = {advice: ""};

componentDidMount(){
  this.fetchData();
}
fetchData = ()=>{
     axios.get("https://api.adviceslip.com/advice")
         .then((response)=>{
           
               const {advice} = response.data.slip;
               this.setState({advice});
     })
         .then((error)=>{
            console.log(error);
     })
}

render(){
  const {advice} = this.state;
  return(
    <div className="app">
      <div className="card">
      <h1 className="heading">{advice}</h1>
      <button className="button" onClick={this.fetchData}>
       <span>Give me ADVICE!</span> 
      </button>
</div>
    </div>
    
  )
}

}

export default App