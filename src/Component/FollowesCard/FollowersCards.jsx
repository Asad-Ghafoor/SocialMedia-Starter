import React from 'react'
import { Followers } from '../FollowerData/FollowersData'
import './FollowersCard.css'

const FollowersCards = () => {
    return (
        <div className='FollowersCard'>
            <h3>Who is following you</h3>
            {Followers.map((Follower, id) => {
                return (
                    <div className='Follower'>
                        <div>
                            <img src={Follower.image} alt="" className='followerImg' />
                            <div className="name">
                                <span>{Follower.name}</span>
                                <span>{Follower.username}</span>
                            </div>
                        </div>
                        <button className='button fc-button'>Follow</button>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowersCards