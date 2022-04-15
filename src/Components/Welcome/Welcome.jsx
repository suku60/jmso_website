import React, {useEffect, useState} from 'react';
import './Welcome.css';

const Welcome = () => {

    const [bgWelcomeBox, setBgWelcomeBox] = useState("hsl(0, 100%, 50%, .4)");

    const [bgFillPositionTop, setBgFillPositionTop] = useState('0%')
    const [bgFillPositionLeft, setBgFillPositionLeft] = useState('-200%')
    const [bgFillId, setBgFillId] = useState('')

    const showBgWelcomeBox = () => {
        if(bgFillId === ""){
            setBgFillId("animationBackgroundFill")
            setTimeout(() => {
                setBgFillPositionTop('-70%')
                setBgFillPositionLeft('-5%')
                
            }, 600);
        }else{
            setBgFillPositionTop('0%')
            setBgFillPositionLeft('200%')
            setBgFillId("")
            
        }
            
    }

return (
            <div className='welcome_box' id='animationWelcomeBox' style={{backgroundColor:bgWelcomeBox}} onClick={()=>showBgWelcomeBox()}>
                <div className="welcome_background_effect" style={{top:bgFillPositionTop,left:bgFillPositionLeft}} id={bgFillId}>
                    <div className="welcome_background_effect_plus_1"></div>
                    <div className="welcome_background_effect_plus_2"></div>
                    <div className="welcome_background_effect_plus_3"></div>
                </div>
                {/* <div className="welcome_photo"></div> */}
            </div>
       )
}
export default Welcome;