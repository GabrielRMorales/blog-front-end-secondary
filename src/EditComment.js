import React, {Component} from "react";

export default class EditComment extends Component {

    constructor(props){
        super(props);
        this.state={
            showForm: false,
            text: ""
        }
      this.changeComment = this.changeComment.bind(this);
    }
    async changeComment(){
        
        let editedComment;
        try {
            editedComment = await fetch("http://localhost:3000/comments/edit/"+this.props.commentId, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    text: this.state.text,
                    post: this.props.postId
                })
           
            });
            editedComment = await editedComment.json();
           
        } catch(err){
            console.log("There was an error!");
        }       
        this.props.editComment(editedComment, this.props.index-1);
        this.setState({showForm: false});
    }

    render(){
      let editComment = this.state.showForm ?
       <form data-testid={`edit-comment-form-${this.props.index}`} onSubmit={this.changeComment} >
           <input type="text" value={this.state.text} onChange={(e)=>{
               this.setState({
                   text: e.target.value
               })
           }}/>
           <input type="submit" value="Submit" data-testid={`submit-edit-comment-${this.props.index}`} />
     </form> : <button role="edit-comment"
     data-testid={`edit-comment-${this.props.index}`} onClick={()=>{this.setState(prevState=>({
        showForm: !prevState.showForm,
        text:  this.props.text }))
        }}>
         Edit Comment</button>
    return <div>{editComment}</div>;
    }


}