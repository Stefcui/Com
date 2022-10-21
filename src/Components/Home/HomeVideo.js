import React from 'react';
import home  from '../../assets/1_homepage_video_header.mp4';


const HomeVideo = () => {
    return (
        <>
                <video  loop={true} id="headerVideo">
                    <source id= "video" src={home} type="video/mp4" />
                </video>
        </>
    );
};

export default HomeVideo;