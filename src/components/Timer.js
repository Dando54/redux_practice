import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    setMinutes, setSeconds, setRemainingMinutes, setRemainingSeconds,
    decrementSeconds, decrementMinutes, decrementBreakMinutes, decrementBreakSeconds, setIsStarted, setIsBreak, setBreakMinutes,
    setRemainingBreakMinutes, setBreakSeconds, setRemainingBreakSeconds
} from "redux/ducks/timer";

import TimerClock from 'components/TimerClock';
import styles from 'styles/timer.module.scss';

const Timer = () => {
    const dispatch = useDispatch();
    const { seconds, minutes, breakSeconds, breakMinutes, remainingMinutes, remainingBreakMinutes, remainingBreakSeconds, remainingSeconds, isStarted, isBreak } = useSelector(state => state.timer);

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

    useEffect(() => {
        if (isStarted && !isBreak) {
            if (remainingSeconds === 0) {
                //toast
            }
            let myInterval = setInterval(() => {
                if (remainingSeconds === 0) {
                    if (remainingMinutes === 0) {
                        clearInterval(myInterval);
                        dispatch(setIsStarted(false));
                        dispatch(setIsBreak(true));
                        dispatch(setRemainingSeconds(seconds));
                        minutes ? dispatch(setRemainingMinutes(minutes)) : dispatch(setRemainingMinutes(0));
                    } else {
                        dispatch(decrementMinutes());
                        dispatch(setRemainingSeconds(59));
                    }
                }
                if (remainingSeconds > 0) {
                    dispatch(decrementSeconds())
                }
            }, 1000)
            return () => {
                clearInterval(myInterval);
            };
        }
        else if (isStarted && isBreak) {
            if (remainingBreakSeconds === 0) {
                //toast
            }
            let myInterval2 = setInterval(() => {
                if (remainingBreakSeconds === 0) {
                    if (remainingBreakMinutes === 0) {
                        clearInterval(myInterval2);
                        dispatch(setIsStarted(false));
                        dispatch(setIsBreak(false));
                        dispatch(setRemainingBreakSeconds(breakSeconds));
                        breakMinutes ? dispatch(setRemainingBreakMinutes(breakMinutes)) : dispatch(setRemainingBreakMinutes(0));
                    } else {
                        dispatch(decrementBreakMinutes());
                        dispatch(setRemainingBreakSeconds(59));
                    }
                }
                if (remainingBreakSeconds > 0) {
                    dispatch(decrementBreakSeconds())
                }
            }, 1000)
            return () => {
                clearInterval(myInterval2);
            };
        }
    }, [isStarted, remainingSeconds, remainingMinutes, dispatch, isBreak, remainingBreakMinutes, remainingBreakSeconds, seconds, minutes, breakSeconds, breakMinutes]);

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