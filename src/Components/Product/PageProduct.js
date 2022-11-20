import React, { useContext, useEffect, useState } from 'react';
import data from '../allData/Data';
import './Product.css';
import { CategoryContext } from './../../App';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";




// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const PageProduct = (props) => {
   const categoris = useContext(CategoryContext);
   const [slide ,setSlide]=useState(0);
  
  const [category ,setCategory]=useState(data[0]);
  useEffect(()=>{
    setCategory(data[categoris])
  },[categoris]);


    return (
        <div className='product'>
                <h1 className='bg-dark text-white text-center pt-50'>This Page Is Under Construction. </h1>

      <div className="catagory-name" id="three-container" >
        
        <h2 className='annimation'> {category.category} </h2>
      </div>
      <div className='container' >
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
       
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper product-slider"
      >
        
        <SwiperSlide>
        <div className='w-100 '>
        <div className='video2'>
        <h3 className="round2 mx-auto" style={{width:'88%'}}>Zenbo Jr with Alexa</h3>
        </div>
        <iframe className='rounds-below mx-auto' width="88%" height="500" src={`https://www.youtube.com/embed/${category.robots[slide].video[slide]}`}  title="YouTube video player"
                frameBorder="0" 
                  allowFullScreen></iframe>
                 <div className="container-fluid sec2 py-5">
        <div className="container py-3">
          <div className="row mb-5 align-items-center">
            <div className="col-md-6 text-start">
             <div className='d-flex align-items-center'>
             <h2 className=' me-3'>{category.robots[slide].name}</h2>
              <div className="rate">
                <img src={require("../../assets/RatingStars.png")} alt="rating" />
                <p id="rating fw-bold">5</p>
              </div>
             </div>
              <h3 className='mb-2'>Price: <span> {category.robots[slide].price} </span></h3>
              <h4>{ category.robots[slide].shortDis} </h4>
              
            </div>
            <div className="col-md-6 buy-botton button-deck">
           <div className="col-12 col-sm-6 col-md-6">
              <button className="cart padding">Add to Cart</button>
            </div>
            <div className="col-12 col-sm-6 col-md-6">
              <a href="/" className="buy padding">Buy Now</a> 
              </div>
          </div>
         
          </div>
         
        </div>
        
      </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-100'>
        <div className='video2'>
        <h3 className="round2 mx-auto" style={{width:'88%'}}>Zenbo Jr with Alexa</h3>
        </div>
        <iframe className='rounds-below mx-auto' width="88%" height="500" src={`https://www.youtube.com/embed/${category.robots[slide].video[slide]}`}  title="YouTube video player"
                frameBorder="0" 
                  allowFullScreen></iframe>
                 <div className="container-fluid sec2 py-5">
        <div className="container py-3">
          <div className="row mb-5 align-items-center">
            <div className="col-md-6 text-start">
             <div className='d-flex align-items-center'>
             <h2 className=' me-3'>{category.robots[slide].name}</h2>
              <div className="rate">
                <img src={require("../../assets/RatingStars.png")} alt="rating" />
                <p id="rating fw-bold">5</p>
              </div>
             </div>
              <h3 className='mb-2'>Price: <span> {category.robots[slide].price} </span></h3>
              <h4>{ category.robots[slide].shortDis} </h4>
              
            </div>
            <div className="col-md-6 buy-botton button-deck">
           <div className="col-12 col-sm-6 col-md-6">
              <button className="cart padding">Add to Cart</button>
            </div>
            <div className="col-12 col-sm-6 col-md-6">
              <a href="/" className="buy padding">Buy Now</a> 
              </div>
          </div>
         
          </div>
         
        </div>
        
      </div>
        </div>
        </SwiperSlide>
      </Swiper>
     
          </div>

      {/* <div className="container-fluid sec2 py-5">
        <div className="container py-3">
          <div className="row mb-5 align-items-center">
            <div className="col-md-6">
             <div className='d-flex align-items-center'>
             <h2 className=' me-3'>{category.robots[slide].name}</h2>
              <div className="rate">
                <img src={require("../../assets/RatingStars.png")} alt="" />
                <p id="rating fw-bold">5</p>
              </div>
             </div>
              <h3 className='mb-2'>Price: <span> {category.robots[slide].price} </span></h3>
              <h4>{ category.robots[slide].shortDis} </h4>
              
            </div>
            <div className="col-md-6 buy-botton button-deck">
           <div className="col-12 col-sm-6 col-md-6">
              <button className="cart padding">Add to Cart</button>
            </div>
            <div className="col-12 col-sm-6 col-md-6">
              <a href="/" className="buy padding">Buy Now</a> 
              </div>
          </div> 
             <div className="col-md-6">
              <div className="rate">
                <img src={require("../../assets/RatingStars.png")} alt="" />
                <p id="rating">5</p>
              </div>
              <h3>Price: <span> {category.robots[slide].price} </span></h3>
            </div> 
          </div>
          <div className="row justify-content-center buy-botton button-deck">
           <div className="col-md-4">
              <button className="cart">Add to Cart</button>
            </div>
            <div className="col-md-4">
              <a href="/" className="buy">Buy Now</a> 
              </div>
          </div> 
        </div>
        
      </div>*/}
<div className='container product-wrapper-video'>
<div className='row justify-content-center'>
<div className='col-12 col-md-6'>
<div className="samller-video ">
              <h3 className='round2'>Zenbo Smart Lighting </h3>
              <iframe className='' width="100%" height="200" src={`https://www.youtube.com/embed/61WEXOL2_SE`} title="YouTube video player"
                frameBorder="0"
                allowFullScreen>

              </iframe>
              <p className='bg-dark'>
              Zenbo can now control your household lighting . Ideal for mobility disabilities. Control the lighting from your bed or chair. You can avoid falls or crashes in the night by having control of your lighting by voice control. Zenbo gives after hours care for the aged and disabled. 
                            </p>


            </div>
</div>
<div className='col-12 col-md-6'>
<div className="samller-video">
              <h3 className='round2'>Zenbo Smart Meter Plug </h3>
              <iframe className='' width="100%" height="200" src={`https://www.youtube.com/embed/TajRtW0GiSU`} title="YouTube video player"
                frameBorder="0"
                allowFullScreen>

              </iframe>
              <p className='bg-dark'>
              Zenbo can now control your household appliances through a smart plug. Ideal for mobility or memory restraints. Zenbo is helping the elderly and disabled to avoid falls or crashes in the night by having control of your appliances by voice control. Zenbo gives after hours care for the aged and disabled. 
                            </p>


            </div>
</div><div className='col-12 col-md-6'>
<div className="samller-video ">
              <h3 className='round2'>Zenbo Smart Door Lock & Security </h3>
              <iframe className='' width="100%" height="200" src={`https://www.youtube.com/embed/Ced5VWqQ1fU`} title="YouTube video player"
                frameBorder="0"
                allowFullScreen>

              </iframe>
              <p className='bg-dark'>
              Zenbo can now control your household doors and security. Ask Zenbo to show you who is at the door, or to show you the security camera in the front or back yard. Zenbo can open or close doors,improve security and peace of mind. Zenbo gives after hours care for the aged and disabled. 
                            </p>


            </div>
</div>
<div className='col-12 col-md-6'>
<div className="samller-video ">
              <h3 className='round2'>Zenbo - Your Smart Little Companion </h3>
              <iframe className='' width="100%" height="200" src={`https://www.youtube.com/embed/5GmR2sVjT14`} title="YouTube video player"
                frameBorder="0"
                allowFullScreen>

              </iframe>
              <p className='bg-dark'>
              Zenbo can give you reminders, wake you up, tell you when its medication time. Zenbo is a companion and friend for the aged, disabled or lonely. Zenbo can play a movie, answer the phone, tell jokes or read a story. Zenbo gives after hours care for the aged and disabled.
                            </p>


            </div>
</div>
</div>
</div>

              </div>
    

    );
};

export default PageProduct;