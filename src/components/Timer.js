import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    setMinutes, setSeconds, setRemainingMinutes, setRemainingSeconds,
    setIsStarted, setBreakMinutes,
    setRemainingBreakMinutes, setBreakSeconds, setRemainingBreakSeconds
} from "redux/ducks/timer";
import useTimer from "utils/customHooks/useTimer";
import TimerClock from 'components/TimerClock';
import styles from 'styles/timer.module.scss';

const Timer = () => {
    const dispatch = useDispatch();
    const { timerBlock, timerInputs, timerInputsBreak } = styles;

    const startTimer = () => {
        dispatch(setIsStarted(true));
    }

    const handleChange = (e) => {
        e.preventDefault();
        const time = parseInt(e.target.value);

        if (e.target.name === 'minutes') {
            dispatch(setMinutes(time));
            dispatch(setRemainingMinutes(time));
        }
        if (e.target.name === 'seconds') {
            dispatch(setSeconds(time));
            dispatch(setRemainingSeconds(time));
        }
    }

    const handleChangeBreak = (e) => {
        e.preventDefault();
        const time = parseInt(e.target.value);

        if (e.target.name === 'minutesBreak') {
            dispatch(setBreakMinutes(time));
            dispatch(setRemainingBreakMinutes(time));
        }
        if (e.target.name === 'secondsBreak') {
            dispatch(setBreakSeconds(time));
            dispatch(setRemainingBreakSeconds(time));
        }
    }

    useTimer();

    return (
        <div className={timerBlock}>
            <TimerClock />
            <div className={timerInputs}>
                <label htmlFor="minutes">Number of minutes</label>
                <input type="number" id="minutes" name="minutes" min="0" onChange={handleChange}></input>
                <label htmlFor="seconds">Number of seconds</label>
                <input type="number" id="seconds" name="seconds" min="0" onChange={handleChange}></input>
                <button onClick={startTimer}>start</button>
                <button>stop</button>
            </div>
            <div className={timerInputsBreak}>
                <label htmlFor="minutesBreak">Break minutes</label>
                <input type="number" id="minutesBreak" name="minutesBreak" min="0" onChange={handleChangeBreak} ></input>
                <label htmlFor="secondsBreak">Break seconds</label>
                <input type="number" id="secondsBreak" name="secondsBreak" min="0" onChange={handleChangeBreak} ></input>
            </div>
        </div>
    )
}

export default Timer;