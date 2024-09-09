import './Header.css'
import { useState, useEffect } from 'react';
import main_logo from '../../assets/images/main_logo.png'

export default function Header(){

    const [currentTime, setCurrentTime] = useState({
        hour: '',
        minute: '',
        second: ''
    });

    useEffect(() => {
        let timeInterval = setInterval(() => {
            let time = new Date();
            setCurrentTime({
                hour: time.getHours(),
                minute: time.getMinutes(),
                second: time.getSeconds()
            })
        }, 1000)

        return () => clearInterval(timeInterval) 
    }, [])
    
    return(
        <div className='header'>
            <div id='date-time'>{ <h4> {currentTime.hour}:{currentTime.minute}:{currentTime.second} </h4> }</div>
            <div id='main-heading'> To-Do-List </div>
            <div id='main-logo'> <img src={main_logo} alt='toto-logo' /> </div>
        </div>
    )
}