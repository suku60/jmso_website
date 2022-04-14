import React, {useEffect, useState} from 'react';
import './Welcome.css';

const Welcome = () => {
    let animationWelcomeBox = document.getElementById('animationWelcomeBox')


    const clicked = () =>  {
        if (animationWelcomeBox?.style.opacity === 0.4) {
            console.log('going inside if')
        }
        else {
            console.log('going inside else')
        }
      }

return (
            <div className='welcome_box' id='animationWelcomeBox' onClick={()=>clicked()}>
            </div>
       )
}
export default Welcome;