import React from "react";

export default function DisplayBlog({data: {comments, posts, authenticationCode, currentUserId}}){
    let fetchedPosts = posts || [];
    let fetchedComments = comments || [];
    const allPosts = fetchedPosts.map((post, index)=>{
        let ownedComments = fetchedComments.map((comment, index)=>{
            if (comment.post === post._id){
                return <div key={index} role="comment"></div>
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