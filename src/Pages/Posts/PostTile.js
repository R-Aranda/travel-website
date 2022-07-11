import React, {useState} from 'react';
import './PostTile.scss'
import FullPost from './FullPost';

const PostTile = (props) => {


    return ( 
        <li className={props.selectedClass}>
            <h3 className="tile-header">{props.title}</h3>
            <p className="tile-paragraph">
                {props.body}
            </p>
            <div className="post-bottom">
                <div className="post-username">
                    <p>Posted by <strong>{props.username}</strong></p>
                </div>
                <div className="full-post">
                    <div onClick={props.setSelectedPost}>Full Post</div>
                    
                </div>
            </div>
        </li>
     );
}
 
export default PostTile;