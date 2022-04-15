import React, {useEffect, useState} from 'react';
import './Loader.css';

const Loader = () => {

    const [displayLoader, setDisplayLoader] = useState('')

    setTimeout(() => {
        setDisplayLoader('none')
        
    }, 1799);

return (
           <div className='loader_box' style={{display:displayLoader}} id='animationLoaderBox'>
               <div className="loader_main_container">
                   <div className="loader_square_1"></div>
                   <div className="loader_square_2"></div>
               </div>
           </div>
       )
}
export default Loader;