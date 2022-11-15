import React from 'react';
import covid from '../../assets/Covid Sm.mp4'

const CovidVideo = () => {
    return (
        <>
                <video  loop={true} id="headerVideo">
                    <source id= "video" src={covid} type="video/mp4" />
                </video>
        </>
    );
};

export default CovidVideo;