import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
    return (
        <div className='ProfileCard'>
            <div className="ProfileImages">
                <img src={Cover} alt="" />
                <img src={Profile} alt="" />
            </div>

            <div className="ProfileName">
                <span>Zendaya MJ</span>
                <span>Junior Ract Developer</span>
            </div>

            <div className="FollowStatus">
                <hr />
                <div>
                    <div className="Follow">
                        <span>6,890</span>
                        <span>Followings</span>
                    </div>
                    <div className="vl"></div>
                    <div className="Follow">
                        <span>6,890</span>
                        <span>Followers</span>
                    </div>
                </div>
                <hr />
            </div>
            <span>
                My Profile
            </span>
        </div>
    )
}

export default ProfileCard