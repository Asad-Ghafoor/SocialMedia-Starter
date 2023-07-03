import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './ProfileSide.css'
import FollowersCards from '../FollowesCard/FollowersCards'

function ProfileSide() {
    return (
        <div className="ProfileSide">
            <LogoSearch />
            <ProfileCard />
            <FollowersCards />
        </div>
    )
}

export default ProfileSide