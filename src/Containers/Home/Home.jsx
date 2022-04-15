import React, {useEffect, useState} from 'react';
import './Home.css';
import Welcome from '../../Components/Welcome/Welcome'
import Loader from '../../Components/Loader/Loader';
const Home = () => {

    const [trianglePositionTop, setTrianglePositionTop] = useState('700%')
    const [triangleAnimation, setTriangleAnimation] = useState('')

    setTimeout(() => {
        setTrianglePositionTop('0%')
        setTriangleAnimation('animationIndicatorAppearing')
        
    }, 1990);

    

return (
       <div className='home_box'>
           <Loader/>
           <Welcome/>
           <div className="home_footer">
               <div className="home_footer_center_indicator" style={{top:trianglePositionTop}} id={triangleAnimation}>
                   <div className="indicator_heart"></div>
               </div>
           </div>
       
       </div>
    )
}
export default Home;