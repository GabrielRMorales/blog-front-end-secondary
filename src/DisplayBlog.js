import {React} from "react";

export default function DisplayBlog(props){
    let posts = props.posts || [];
    let comments = props.comments || [];
    const allPosts = posts.map((post, index)=>{
        let ownedComments = comments.map((comment, index)=>{
            if (comment.post === post._id){
                return <div key={index} role="comment"></div>
            }
        })
        return <div key={index} data-testid={`post-${index+1}`} role="post">
           {ownedComments}
        </div>
    });
    
    return <main>
        {/* {<div role="post"></div>} */}
        { props.posts ? allPosts : <p role="loading-note">Loading...</p> }
    </main>;
}