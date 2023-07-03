import React, { useState } from 'react'
import './PostShare.css';
import ProfileImg from '../../img/profileImg.jpg';
import { UilScenery } from '@iconscout/react-unicons';
import { UilPlayCircle } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilSchedule } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';
import { useRef } from 'react';

const PostShare = () => {
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setimge({
                image: URL.createObjectURL(img),
            })
        }
    }
    const [image, setimge] = useState(null);
    const imgRef = useRef();
    return (
        <div className="PostShare">
            <img src={ProfileImg} alt="" />
            <div>
                <input type="text" placeholder="What's happening" />
                <div className="PostOptions">
                    <div className="option" style={{ color: " var(--photo)" }}
                        onClick={() => imgRef.current.click()}>
                        <UilScenery />
                        photo
                    </div>
                    <div className="option" style={{ color: " var(--video)" }}>
                        <UilPlayCircle />
                        video
                    </div>{" "}
                    <div className="option" style={{ color: " var(--location)" }}>
                        <UilLocationPoint />
                        Location
                    </div> {" "}
                    <div className="option" style={{ color: " var(--shedule)" }}>
                        <UilSchedule />
                        Schedule
                    </div>
                    <button className="button ps-buttton">
                        Share
                    </button>
                    <div style={{ display: 'none' }}>
                        <input type="file" name="MyImage" ref={imgRef} onChange={onImageChange} />
                    </div>
                </div>
                {image && (
                    <div className="previewImage">
                        <UilTimes onClick={() => setimge(null)} />
                        <img src={image.image} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostShare