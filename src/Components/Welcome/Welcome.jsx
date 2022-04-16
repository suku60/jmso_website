import React, {useEffect, useState} from 'react';
import {ReactComponent as NameSvg} from '../../assets/svg/name.svg';
import {ReactComponent as SecondNameSvg} from '../../assets/svg/secondname.svg';
import {ReactComponent as SecondName2Svg} from '../../assets/svg/secondname2.svg';
import {ReactComponent as SurnameSvg} from '../../assets/svg/surname.svg';
import {ReactComponent as Surname2Svg} from '../../assets/svg/surname2.svg';
import {ReactComponent as FrontendSvg} from '../../assets/svg/frontend.svg';
import './Welcome.css';

const Welcome = () => {
    // declaring animations as variables;
    let animationGlitch1 = "animationGlitchSquare1";
    let animationGlitch2 = "animationGlitchSquare2";
    let animationGlitch3 = "animationGlitchSquare3";
    let animationOff = "staticInvisible";

    const [bgWelcomeBox, setBgWelcomeBox] = useState('var(--color-red-0-2)');
    
    const [screenAnimation, setScreenAnimation] = useState(animationOff)
    
    const [screenInsideAnimation1, setScreenInsideAnimation1] = useState(animationOff)
    const [screenInsideAnimation2, setScreenInsideAnimation2] = useState(animationOff)
    const [screenInsideAnimation3, setScreenInsideAnimation3] = useState(animationOff)

    setTimeout(() => {
        setScreenAnimation('animationWelcomeBox')
        setScreenInsideAnimation1(animationGlitch1)
        setScreenInsideAnimation2(animationGlitch2)
        setScreenInsideAnimation3(animationGlitch3)
        
    }, 2100);



    

return (
            <div className='welcome_box' id={screenAnimation} style={{backgroundColor:bgWelcomeBox}}>
                <div className="welcome_background_effect" id={screenInsideAnimation1}>
                </div>
                <div className="welcome_background_effect" id={screenInsideAnimation2}>
                </div>
                <div className="welcome_background_effect" id={screenInsideAnimation3}>
                </div>
                <NameSvg className='welcome_name'/>
                <SecondNameSvg className='welcome_secondname'/>
                <SecondName2Svg className='welcome_secondname2'/>
                <SurnameSvg className='welcome_surname'/>
                <Surname2Svg className='welcome_surname2'/>
                <FrontendSvg className='welcome_frontend'/>
                <div className="welcome_photo"><img className='photo_avatar' id={screenInsideAnimation3} src='https://avatars.githubusercontent.com/u/96541489?v=4'/></div>
            </div>
       )
}
export default Welcome;