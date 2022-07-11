import React, {useState} from 'react';
import './FullPost.scss'

const FullPost = (props) => {
    const { id, username, body, title, setSelectedId } = props

    const exitPost = () => {
        setSelectedId(null)
        selectedPost = ""
    }
   
    return ( 
        <div className="fullPost">
            <div className="exit-post" onClick={exitPost}>&#x2716;</div>
            <h3 className="header"> {title}</h3>
            <p><strong>{username}</strong></p>
            <p>{body}</p>
            <div className="comment-input">
                <label className="reply">Reply</label>
                <textarea rows="10" cols="60"></textarea>
            </div>
        </div>
    )
}
 
export default FullPost;