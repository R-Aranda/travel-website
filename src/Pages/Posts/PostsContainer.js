import React from 'react';
import PostTile from './PostTile';
import './PostsContainer.scss'

const PostsContainer = (props) => {
   
    let allPosts = props.data.posts.map(post => {
        let selectedClass = "not-selected"
        if(post.id === props.selectedId) {
            selectedClass = "selected"
        }

        const setSelectedPost = () => {
            props.setSelectedId(post.id)
        }

        return (
            <PostTile
                key={post.id}
                title={post.title}
                body={post.body}
                username={post.username}
                selectedClass={selectedClass}
                setSelectedPost={setSelectedPost}
            />
        )
    })

    return ( 
        <ul className="post-container">
            {allPosts}
        </ul>
     );
}
 
export default PostsContainer;