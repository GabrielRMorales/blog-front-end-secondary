import {React} from "react";

export default function DisplayBlog(props){
    let posts = props.posts || [];
    const allPosts = posts.map((post, id)=>{
        return <div key={id} role="post"></div>
    });
    return <main>
        {/* {<div role="post"></div>} */}
        { props.posts ? allPosts : <p role="loading-note">Loading...</p> }
    </main>;
}