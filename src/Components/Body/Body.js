import React from 'react';
import About from '../../Components/Body/About';
import Social from '../../Components/Body/Social';
import { Routes, Route } from 'react-router-dom';
import PageHome from '../Home/PageHome';
import PageAbout from '../About/PageAbout';
import PageContact from './Contact/PageContact';
import Glass from './Contact/Glass';



const Body = () => {
    return (
        <section >
            <img src={ require("../../assets/cd.jpg")} alt=""  className='main-img'/>
            <section className='main-body'>
            <Social></Social>
            <Routes>
            <Route path='/' element ={<PageHome/>}/>
            <Route path='/about' element ={<PageAbout/>}/>
            <Route path='/contact' element ={<PageContact/>}/>
            </Routes>

            </section>
            <Routes>
            <Route path='/' element ={<About/>}/>
            <Route path='/about' element ={<About/>}/>

            <Route path='/contact' element ={<Glass/>}/>
            </Routes>

        </section>

      );
};

export default Body;