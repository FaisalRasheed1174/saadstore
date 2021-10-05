import React from 'react';
  
  const Ratings = ({value,text }) => {
      return (
        <div className='rating'>
          <span>
            <i style={{ color :'#f8e825'  }} className={value >= 1 ? 'fas fa-star ' : value >= 0.5 ? 'fas fa-star-half-alt ' : 'far fa-star' } ></i>
          </span>
          <span>
            <i style={{ color: '#f8e825' }} className={value >= 2 ? 'fa fa-star' : value >= 1.5 ? 'fa fa-star-half-alt' : 'fa fa-star' }></i>
          </span>
          <span>
            <i style={{ color : '#f8e825'}} className={value >= 3 ? 'fa fa-star' : value >= 2.5 ? 'fa fa-star-half-alt' : 'fa fa-star'}></i>
          </span>
          <span>
            <i style={{ color : '#f8e825'}} className={value >= 4 ? 'fa fa-star' : value >= 3.5 ? 'fa fa-star-half-alt' : 'fa fa-star'}></i>
          </span>
          <span>
            <i style={{ color : '#f8e825'}} className={value >= 5 ? 'fa fa-star' : value >= 4.5 ? 'fa fa-star-half-alt' : 'fa fa-star'}></i>
          </span>
         
          <span> { text && text }</span>
          
       </div>
      );
  }
  

  export default Ratings;
  