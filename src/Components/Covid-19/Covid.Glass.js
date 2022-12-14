import React from 'react';
import {  } from '../../App';
import data from '../allData/Data';

const CovidGlass = () => {

    return (
        <div className='product'>
                  <div className="container-fluid sec3">

<div className="row dropdown-container">


  {
    data[5].robots[0].dropdowns.map(dp =>{
      return (
      
        <div className="menu">
        <input type="checkbox" name="" id= {dp.title} />
        <label for=  {dp.title}>
          <h5>
            {dp.title}
            <i className="fa-solid fa-angle-down"></i>
            <i className="fa-solid fa-xmark"></i>
          </h5>
          <div className="hidden" id='details' dangerouslySetInnerHTML={{__html: dp.content,}}>

          </div>
        </label>
      </div>

      )
    })
  }
</div>
<div className="row">
  <div className="menu">
    <input type="checkbox" name="" id="review" />
    <label for="review">
      <h5>
        REVIEWS
        <i className="fa-solid fa-angle-down"></i>
            <i className="fa-solid fa-xmark"></i>
      </h5>
      <div className="hidden" id="reviews">
        <h4 className='text-center'>Reviews Coming Soon</h4>
      </div>
    </label>
  </div>
</div>
</div>

        </div>
    );
};

export default CovidGlass;