import React from "react";

export default function DisplayBlog({data: {comments, posts, authenticationCode, currentUserId}}){
    let fetchedPosts = posts || [];
    let fetchedComments = comments || [];
    const allPosts = fetchedPosts.map((post, index)=>{
        let ownedComments = fetchedComments.map((comment, index)=>{
            if (comment.post === post._id){
                return <div key={index} role="comment">
                    <p></p>
                    {comment.user._id == currentUserId ?
                    <div className="comment-controls" role="comment-controls">
                    <button role="edit-comment">Edit Comment</button>
                    <button role="delete-comment">Delete Comment</button>
                    </div>
                     : null}
                </div>
            }
        })
        return <div key={index} data-testid={`post-${index+1}`} role="post">
            {authenticationCode > 0 ? <div role="reply"></div>  : null }
           {ownedComments}
        </div>
    });
    
    return <main>
        {/* {<div role="post"></div>} */}
        { posts ? allPosts : <p role="loading-note">Loading...</p> }
    </main>;
}