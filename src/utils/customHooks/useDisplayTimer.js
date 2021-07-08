import { useEffect, useState } from 'react';
import { useSelector } from "react-redux"

const useDisplayTimer = () => {
    const [outputTime, setOutputTime] = useState('');
    const { isStarted, isBreak, remainingMinutes, remainingSeconds, remainingBreakMinutes, remainingBreakSeconds, seconds } = useSelector(state => state.timer);

    useEffect(() => {
        //pomodoro
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
                if (remainingBreakSeconds < 10) {
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
    }, [isBreak, isStarted, remainingBreakMinutes, remainingBreakSeconds, remainingMinutes, remainingSeconds])

    return outputTime;
}

export default useDisplayTimer;