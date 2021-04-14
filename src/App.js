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
    this.addNewComment = this.addNewComment.bind(this);
    this.changeComment = this.changeComment.bind(this);
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
        //check localStorage--if token exists path will be posts
        //otherwise /, but since localStorage mocking is not working in Jest...
        let path = "/posts"
        let data = await Promise.all([this.fetchData(path), this.fetchData("/comments")]);
        let userData;
        if (data[0].user){
          userData = data[0].user;
        } else {
          userData = null;
        }
        this.setState({
          posts: data[0].results,
          comments: data[1],
          currentUserId: userData,
          authenticationCode: data[0].authenticationCode || 0
        });
      }
      catch(err){
        console.log(err)
      }
    
  }

  handleSubmit(data){
    this.setState(data);
  }

  addNewComment(newComment){
    let prevComments = this.state.comments.map(comm=>{
      return {...comm};
    });
    this.setState({
      comments: [...prevComments, newComment]
    }, function(){
      console.log(this.state.comments);
    })
  }

  changeComment(editedComment, index){
    let editedComments = this.state.comments.map((comm, ind)=>{
      if (ind == index){
        return editedComment;
      } else {
        return {...comm};
      }
    })
    this.setState({
      comments: editedComments
    }, function(){
     
    });

  }
  render(){
      return (<div>
          <header >
          <Layout user={this.state.currentUserId} onSubmit={this.handleSubmit} />
          </header>
          <DisplayBlog data={this.state} addComment={this.addNewComment} changeComment={this.changeComment} />
        </div>);
  }
}

export default App;
