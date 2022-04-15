import React, {useEffect, useState} from 'react';
import './Home.css';
import Welcome from '../../Components/Welcome/Welcome'
const Home = () => {

    

return (
       <div className='home_box'>
           <Welcome/>
           <div className="home_footer">
               <div className="home_footer_center_indicator" id="animationIndicatorAppearing"></div>
           </div>
       
       </div>
    )
}
export default Home;