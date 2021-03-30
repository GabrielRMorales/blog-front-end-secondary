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
  }
  async fetchData(path){

    let data;
    try {
       data = await fetch(URL);
        console.log(data);
      return await data;
    } catch(err){
      console.log(err);
    }
    
  }
  async componentDidMount(){
      try {
      // const fetched = await fetch("http://localhost:3000",
      // {
      //   method: "GET",
      //   headers: {
      //       "Content-Type": "application/json",
      //       "Authorization": `Bearer ${localStorage.getItem("token")}` || null
      //   }
      // });
      // console.log(fetched);
      // const data = await fetched.json();

        let data = await this.fetchData();
        console.log(data);
        this.setState({
          posts: data.results
        })
      }
      catch(err){
        console.log(err)
      }
    
  }
  render(){
      return (<div>
          <header >
          <Layout />
          </header>
          <DisplayBlog posts={this.state.posts} />
        </div>);
  }
}

export default App;
