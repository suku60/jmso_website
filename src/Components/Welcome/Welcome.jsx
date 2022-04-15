import React, {useEffect, useState} from 'react';
import './Welcome.css';

const Welcome = () => {

    const [bgWelcomeBox, setBgWelcomeBox] = useState("hsl(0, 100%, 50%, .4)");

    // declaring variants
    let startingTransformation = 'scaleX(.01)';

    let startingPositionTop = '-0%';
    let startingPositionLeft = '-0%';

    let endingPositionTop = '0%';
    let endingPositionLeft = '0%';

    let animationFilling = "animationBackgroundFill";
    let animationGlitch = "animationGlitchSquare1";
    

    const [bgFillPositionTop, setBgFillPositionTop] = useState(startingPositionTop)
    const [bgFillPositionLeft, setBgFillPositionLeft] = useState(startingPositionLeft)
    const [bgTransformation, setBgTransformation] = useState(startingTransformation)
    const [bgFillId, setBgFillId] = useState('')

    const showBgWelcomeBox = () => {
        if(bgFillId === ""){
            setBgFillId(animationFilling+' '+animationGlitch)
            setTimeout(() => {
                setBgFillPositionTop(endingPositionTop)
                setBgFillPositionLeft(endingPositionLeft)
                
            }, 600);
        }else{
            setBgFillPositionTop(startingPositionTop)
            setBgFillPositionLeft(startingPositionLeft)
            setBgFillId("")
            
        }
            
    }

return (
            <div className='welcome_box' id='animationWelcomeBox' style={{backgroundColor:bgWelcomeBox}} onClick={()=>showBgWelcomeBox()}>
                <div className="welcome_background_effect" style={{top:bgFillPositionTop,left:bgFillPositionLeft,transform:bgTransformation}} id={bgFillId}>
                {/* <div className="pokemon_screen" id="animationGlitchSquare1"> 
          </div> */}
                    {/* <div className="welcome_background_effect_plus_1"></div>
                    <div className="welcome_background_effect_plus_2"></div>
                    <div className="welcome_background_effect_plus_3"></div> */}
                </div>
                {/* <div className="welcome_photo"></div> */}
            </div>
       )
}
export default Welcome;