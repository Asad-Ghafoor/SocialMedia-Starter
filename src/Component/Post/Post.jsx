import React from 'react'
import comment from '../../img/comment.png'
import share from '../../img/share.png'
import like from '../../img/like.png'
import nolike from '../../img/notlike.png'
import './Post.css'

const Post = ({ data }) => {
    return (
        <div className="post">
            <img src={data.image} alt="" />
            <div className="PostReact">
                <img src={data.Liked ? like : nolike} alt="" />
                <img src={comment} alt="" />
                <img src={share} alt="" />
            </div>
            <span>{data.likes} Likes</span>

            <div className="detail">
                <span><b> {data.name} </b></span>
                <span> {data.desc} </span>
            </div>
        </div>
    )
}

export default Post