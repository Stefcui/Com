import React from 'react';
import contact  from '../../assets/7_contact_video_header.mp4';


const ContactVideo = () => {
    return (
        <>
            <video loop={true} id="headerVideo">
                <source id="video" src={contact} type="video/mp4" />
            </video>


        </>
    );
};

export default ContactVideo;