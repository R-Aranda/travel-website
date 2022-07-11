import React from 'react';
import PostTile from './PostTile';
import './PostsContainer.scss'
import FullPost from './FullPost';

const PostsContainer = (props) => {
    let selectedPost
    let selectedClass = "selected"

    let allPosts = props.data.posts.map(post => {
        
        if(post.id === props.selectedId) {
            selectedPost = <FullPost 
                        id={post.id}
                        title={post.title}
                        body={post.body}
                        username={post.username}
                        setSelectedPost={setSelectedPost}
                        setSelectedId={props.setSelectedId}
                    />
        }

        const setSelectedPost = () => {
            props.setSelectedId(post.id)
        }

        

        return (
            <PostTile
                key={post.id}
                id={props.id}
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
            {selectedPost}
        </ul>
     );
}
 
export default PostsContainer;