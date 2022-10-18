import React from 'react';
import BusinessRobot from './BusinessRobot';
import HeaderVideo from './HeaderVideo';
import Navbar from './Navbar';
import aboutVideo from '../../assets/2_aboutus_video_header.mp4'


const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderVideo videolinl={aboutVideo} ></HeaderVideo>
            <BusinessRobot></BusinessRobot>
        </div>
    );
};

export default Header;