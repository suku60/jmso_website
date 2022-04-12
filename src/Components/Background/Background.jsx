import React, {useEffect, useState, useRef} from 'react';
import './Background.css';

const Background = ({timeout}) => {

    const canvas = useRef();

    useEffect(() => {
        
        const context = canvas.current.getContext('2d');
    
        const width = window.innerWidth;
        const height = window.innerHeight;
        canvas.current.width = width;
        canvas.current.height = height;
    
        context.fillStyle = '#000';
        context.fillRect(0, 0, width, height);
    
        const columns = Math.floor(window.innerWidth / 32) + 1;
        const rows = Array.from({ length: columns }).fill(0);
    
        context.fillStyle = '#000';
        context.fillRect(0, 0, width, height);
    
        const matrixEffect = () => {
            context.fillStyle = '#0002';
            context.fillRect(0, 0, width, height);
    
            context.fillStyle = '#ff0000';
            context.font = '33pt monospace';
    
            rows.forEach((y, index) => {
                const text = String.fromCharCode(Math.random() * 128);
                const x = index * 33;
                context.fillText(text, x, y);
    
                if (y > 100 + Math.random() * 66666) {
                    rows[index] = 0;
                } else {
                    rows[index] = y + 66;
                }
            });
        };
    
        const interval = setInterval(matrixEffect, timeout);
        return () => {
            clearInterval(interval);
        };
    }, [canvas, timeout]);


return (
    <div className='background_box'>
        <canvas ref={canvas} id='animationMatrix'/>           
    </div>
       )
}
export default Background;