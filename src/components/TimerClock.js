import React from 'react';

import useDisplayTimer from 'utils/customHooks/useDisplayTimer';
import styles from 'styles/timerclock.module.scss';
import useTimerBackgroundColor from 'utils/customHooks/useTimerBackgroundColor';

const TimerClock = () => {
    const { timerClock } = styles;

    let output = useDisplayTimer();

    const style = {
        backgroundColor: useTimerBackgroundColor()
    }

    return (
        <div className={timerClock} style={style}>
            {output}
        </div>
    )
}

export default TimerClock;