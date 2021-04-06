import {React, Component } from "react";
import './App.css';
import Layout from "./Layout";
import DisplayBlog from "./DisplayBlog";
const URL = "http://localhost:3000";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authenticationCode: 0,
      posts: null,
      comments: null, 
      currentUserId: null
    }
    this.fetchData = this.fetchData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async fetchData(path){

    let data;
    try {
       data = await fetch(URL+path, {
         method: "GET",
         headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${localStorage.getItem("token")}` || null
         }
       });
       // console.log(data);
      return await data.json();
    } catch(err){
      console.log(err);
    }
    
  }
  async componentDidMount(){
      try {

        let data = await Promise.all([this.fetchData(), this.fetchData("/comments")]);
       // console.log(data);
        this.setState({
          posts: data[0].results,
          comments: data[1]
        }, console.log(this.state));
      }
      catch(err){
        console.log(err)
      }
    
  }

  handleSubmit(data){
    this.setState(data, function(){
      console.log(this.state);
    });
  }
  render(){
      return (<div>
          <header >
          <Layout user={this.state.currentUserId} onSubmit={this.handleSubmit} />
          </header>
          <DisplayBlog data={this.state} />
        </div>);
  }
}

export default App;
