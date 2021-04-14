import React, {Component} from "react";

export default class AddComment extends Component {

    constructor(props){
        super(props);
        this.state={
           showForm: false,
           text: ""
        }
        this.submitComment = this.submitComment.bind(this);
    }

    async submitComment(e){
        e.preventDefault();
        let comment;
        try {
            comment = await fetch("http://localhost:3000/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    text: this.state.text,
                    postId: this.props.postId
                })
            });
            comment = await comment.json();
        }
        catch (err){
            console.log(err);
        }
       // console.log(comment);
        this.props.addComment(comment);
        this.setState({showForm: false});
    }
    render(){
       let addComment = this.state.showForm ? <form data-testid={`new-comment-form-${this.props.index}`} 
       onSubmit={this.submitComment} >
        <input type="text" value={this.state.text} onChange={(e)=>{
            this.setState({text: e.target.value});
        }}/>
        <input type="submit" data-testid={`submit-comment-form-${this.props.index}`} value="Add Comment" />
        </form> : <button role="reply" data-testid={`reply-${this.props.index}`} onClick={()=>{
                this.setState(prevState=>({
                  showForm: !prevState.showForm
                }));
            }} >Reply</button>
        return <div>{addComment}</div>;
    }


}