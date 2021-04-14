import React from "react";
import EditComment from "./EditComment";
import AddComment from "./AddComment";

export default function DisplayBlog({addComment, changeComment, data: {comments, posts, authenticationCode, currentUserId}}){
    
    //comments and posts could easily be their own components
    let fetchedPosts = posts || [];
    let fetchedComments = comments || [];
    console.log(fetchedComments.length);
    const allPosts = fetchedPosts.map((post, index)=>{
        let ownedComments = fetchedComments.map((comment, index)=>{
            if (comment.post == post._id){
            // console.log(comment.text);
             return <div key={index} data-testid={`comment-${index+1}`} role="comment">
                    <p>{comment.text}</p>
                    {comment.user._id == currentUserId ?
                    <div className="comment-controls" role="comment-controls">
                    <EditComment index={index+1} text={comment.text} commentId={comment.id} postId={post._id} editComment={changeComment} />
                    <button role="delete-comment">Delete Comment</button>
                    </div> : null}
                </div>
               // return <div role="comment">{comment.text}</div>
            }
        })
        console.log(ownedComments);
        return <div key={index} data-testid={`post-${index+1}`} role="post">
            <h1>{post.title}</h1>
            <p>{post.text}</p>
            {authenticationCode > 0 ? <AddComment addComment={addComment} postId={post._id} index={index+1} /> : null }
           {ownedComments}
        </div>
    });
    
    return <main>
        { posts ? allPosts : <p role="loading-note">Loading...</p> }
    </main>;
}