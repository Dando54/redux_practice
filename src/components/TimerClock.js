import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRemainingSeconds } from 'redux/ducks/timer';

import styles from 'styles/timerclock.module.scss';

const TimerClock = () => {
    const [outputTime, setOutputTime] = useState('00:00');
    const dispatch = useDispatch();

    const { seconds, minutes, breakSeconds, breakMinutes, remainingMinutes, remainingSeconds,
        remainingBreakMinutes,
        remainingBreakSeconds, isStarted, isBreak } = useSelector(state => state.timer);

    const { timerClock } = styles;

    const configureOutput = useCallback(() => {

        // timer
        if (isStarted) {
            console.log('TIMERSTARTED')
            if (remainingMinutes < 10) {
                if (remainingSeconds < 10) {
                    setOutputTime(`0${remainingMinutes}:0${remainingSeconds}`)
                }
                else {
                    setOutputTime(`0${remainingMinutes}:${remainingSeconds}`)
                }
            }
            else {
                if (remainingSeconds < 10) {
                    setOutputTime(`${remainingMinutes}:0${remainingSeconds}`)
                }
                else {
                    setOutputTime(`${remainingMinutes}:${remainingSeconds}`)
                }
            }
        }

        //break
        if (isBreak) {
            console.log('BREAK STARTED');
            if (remainingBreakMinutes < 10) {
                if (remainingBreakSeconds < 10) {
                    setOutputTime(`0${remainingBreakMinutes}:0${remainingBreakSeconds}`)
                }
                else {
                    setOutputTime(`0${remainingBreakMinutes}:${remainingBreakSeconds}`)
                }
            }
            else {
                if (seconds < 10) {
                    setOutputTime(`${remainingBreakMinutes}:0${remainingBreakSeconds}`)
                }
                else {
                    setOutputTime(`${remainingBreakMinutes}:${remainingBreakSeconds}`)
                }
            }
        }

        // default
        if (!isBreak && !isStarted) {
            if (remainingMinutes < 10) {
                if (remainingSeconds < 10) {
                    setOutputTime(`0${remainingMinutes}:0${remainingSeconds}`)
                }
                else {
                    setOutputTime(`0${remainingMinutes}:${remainingSeconds}`)
                }
            }
            else {
                if (remainingSeconds < 10) {
                    setOutputTime(`${remainingMinutes}:0${remainingSeconds}`)
                }
                else {
                    setOutputTime(`${remainingMinutes}:${remainingSeconds}`)
                }
            }
        }
    }, [isBreak, isStarted, remainingBreakMinutes, remainingBreakSeconds, remainingMinutes, remainingSeconds, seconds])

    useEffect(() => {
        configureOutput();
    }, [configureOutput])


    return (
        <div className={timerClock}>
            {outputTime}
        </div>
    )
}

export default TimerClock;