import React, { useEffect, useState } from 'react';
import PostsContainer from './PostsContainer';
import FetchButton from './FetchButton'
import firstData from '../../constants/data'

const Posts = () => {
    
    const [data, setData] = useState(firstData)
    const [selectedId, setSelectedId] = useState(false)

    const fetchData = async () => {
        try {
            const response = await fetch("/api/v1/posts.json")
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const postData = await response.json()
            console.log("postData:", postData)
            setData(postData)
        }catch(err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }

    const clickData = () => {
        fetchData()
    }



    return ( 
        <div>
            <PostsContainer 
                data={data}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
            />
            <FetchButton 
                clickData={clickData}
            />
        </div>
     );
}
 
export default Posts;