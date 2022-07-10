import React from 'react';

const FetchButton = (props) => {
    return ( 
        <button onClick={props.clickData}>Get Posts</button>
     );
}
 
export default FetchButton;