import React, {Component} from "react";

export default class ChangeComment extends Component {
    constructor(props){
        super(props);
        this.state={
            showForm: false
        }
    }
    /*changeComment(e){
        e.preventDefault();
        this.setState(prevState=>({
            showForm: !prevState.showForm
        }));
    }*/

    render(){
      let editComment = this.state.showForm ?
       <div data-testid={`edit-comment-form-${this.props.index}`}>
     </div> : <button role="edit-comment"
     data-testid={`edit-comment-${this.props.index}`} >
         Edit Comment</button>
        return <div>{editComment}</div>;
    }
}
