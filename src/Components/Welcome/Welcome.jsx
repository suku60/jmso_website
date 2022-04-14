import React, {useEffect, useState} from 'react';
import './Welcome.css';

const Welcome = () => {

    const [bgWelcomeBox, setBgWelcomeBox] = useState("hsl(0, 100%, 50%, .4)");

    const showBgWelcomeBox = () => {
        if(bgWelcomeBox === "hsl(0, 100%, 50%, .4)"){
            setBgWelcomeBox("hsl(0, 100%, 50%, .9)")
        }else{
            setBgWelcomeBox("hsl(0, 100%, 50%, .4)")
            
        }
            
    }

return (
            <div className='welcome_box' id='animationWelcomeBox' style={{backgroundColor:bgWelcomeBox}}onClick={()=>showBgWelcomeBox()}>
                <div className="welcome_photo"></div>
            </div>
       )
}
export default Welcome;