import { useEffect, useLayoutEffect, useState } from 'react';
import './FlipClock.css';
import { useNavigate } from 'react-router-dom';


const FlipUnit = ({ value, label }) => {
    const [prevValue, setPrevValue] = useState(value);
    const [isFlipping, setIsFlipping] = useState(false);

    useEffect(() => {
        if (value !== prevValue) {
            setIsFlipping(true);
            setTimeout(() => {
                setIsFlipping(false);
                setPrevValue(value);
            }, 600); // Match with animation duration
        }
    }, [value, prevValue]);

    return (
        <div className="flip-unit">
            <div className={`flip-card ${isFlipping ? 'flip' : ''}`}>
                <div className="flip-card-front">{prevValue}</div>
                <div className="flip-card-back">{value}</div>
            </div>
            <span className="flip-label">{label}</span>
        </div>
    );
};

const FlipClock = () => {
    const [time, setTime] = useState(new Date());
    const navigate = useNavigate();


    useLayoutEffect(() => {
        document.body.classList.add('flip-clock-page');
        console.log('class added');
        return () => {
            document.body.classList.remove('flip-clock-page');
            console.log('class removed');
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (unit) => unit.toString().padStart(2, '0');

    //write a function to get date in dd/mm/yyyy format
    const date = Date.now;
    const handleDateClick = () => {
        sessionStorage.setItem('reloaded', 'false')
        navigate('/login');
    };

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <div className='flip-clock-container'>
            <div>
                <h3>It won't stop, get into work...</h3>
            </div>
            <div className="flip-clock" style={{ cursor: 'pointer' }} onClick={handleDateClick}>
                <FlipUnit className='digit' value={formatTime(time.getHours())} label="HH" />
                <span className="separator">:</span>
                <FlipUnit className='digit' value={formatTime(time.getMinutes())} label="Min" />
                <span className="separator">:</span>
                <FlipUnit className='digit' value={formatTime(time.getSeconds())} label="Sec" />
            </div>

            <div className='flip-date' style={{ cursor: 'pointer' }} onClick={handleDateClick} >
                <FlipUnit className='date' value={formatTime(time.getDate())} label="DD" />
                <span className="separator" >:</span>
                <FlipUnit className='month' value={formatTime(time.getMonth() + 1)} label="MM" />
                <span className="separator">:</span>
                <FlipUnit className='year' value={formatTime(time.getFullYear() - 2000)} label="YY" />
            </div>
            <div>
                <button className='calcie' onClick={() => window.location.href = 'https://www.calcie.site'}>Calcie</button>
            </div>

        </div>
    );
};

export default FlipClock;
