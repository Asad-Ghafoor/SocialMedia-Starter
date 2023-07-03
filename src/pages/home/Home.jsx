import React from "react";
import './Home.css'
import ProfileSide from "../../Component/Profile/ProfileSide";
import PostSide from "../../Component/PostSide/PostSide";
import RightSide from "../../Component/RightSide/RightSide";


const Home = () => {
    return (
        <>
            <div className="Home">
                <ProfileSide />
                <PostSide />
                <RightSide />
            </div>
        </>
    )
}

export default Home;