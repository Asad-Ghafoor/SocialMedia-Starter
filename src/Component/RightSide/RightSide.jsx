import React from 'react';
import { UilSetting } from '@iconscout/react-unicons';
import home from '../../img/home.png'
import Noti from '../../img/noti.png'
import comment from '../../img/comment.png'
import './RightSide.css'
import TrendCard from '../TrendCard/TrendCard';


const RightSide = () => {
    return (
        <div className="rightSide">
            <div className="navIcon">
                <img src={home} alt="" />
                <UilSetting />
                <img src={Noti} alt="" />
                <img src={comment} alt="" />
            </div>
            <TrendCard />
            <button className="button r-button">Share</button>
        </div>
    )
}

export default RightSide