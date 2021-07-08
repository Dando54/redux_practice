import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    setMinutes, setSeconds, setRemainingMinutes, setRemainingSeconds,
    decrementSeconds, decrementMinutes, decrementBreakMinutes, decrementBreakSeconds, setIsStarted, setIsBreak, setBreakMinutes,
    setRemainingBreakMinutes, setBreakSeconds, setRemainingBreakSeconds
} from "redux/ducks/timer";

const useTimer = () => {
    const { seconds, minutes, breakSeconds, breakMinutes, remainingMinutes, remainingBreakMinutes, remainingBreakSeconds, remainingSeconds, isStarted, isBreak } = useSelector(state => state.timer);

    const dispatch = useDispatch();

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
}

export default useTimer;