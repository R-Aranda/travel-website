import React from 'react';
import './PostTile.scss'

const PostTile = (props) => {
    return ( 
        <li className={props.selectedClass} onClick={props.setSelectedPost}>
            <h3 className="tile-header">{props.title}</h3>
            <p className="tile-paragraph">
                {props.body}
            </p>
            <div className="post-bottom">
                <div className="post-username">
                    <p>Posted by <strong>{props.username}</strong></p>
                </div>
                <div className="reply">
                    <a href="#">Reply</a>
                </div>
            </div>
        </li>
     );
}
 
export default PostTile;