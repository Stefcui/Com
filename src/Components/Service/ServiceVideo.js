import React from 'react';
import service from '../../assets/4_services_video_header.mp4'

const ServiceVideo = () => {
    return (
        <>
                <video  loop={true} id="headerVideo">
                    <source id= "video" src={service} type="video/mp4" />
                </video>
        </>
    );
};

export default ServiceVideo;