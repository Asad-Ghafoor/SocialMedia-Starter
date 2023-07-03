import React from 'react';
import { PostsData } from '../PostsData/PostsData'
import Post from '../Post/Post';

const Posts = () => {
    return (
        <div className="Posts">
            {PostsData.map((post, id) => {
                return <Post data={post} id={id} />
            })}
        </div>
    )
}

export default Posts;