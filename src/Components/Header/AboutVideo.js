import React from 'react';
import about  from '../../assets/2_aboutus_video_header.mp4';


const AboutVideo = () => {
    return (
        <>
                <video  loop={true} id="headerVideo">
                    <source id= "video" src={about} type="video/mp4" />
                </video>
        </>
    );
};

export default AboutVideo;