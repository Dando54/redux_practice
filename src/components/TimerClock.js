import React from 'react';

import useDisplayTimer from 'utils/customHooks/useDisplayTimer';
import styles from 'styles/timerclock.module.scss';

const TimerClock = () => {
    const { timerClock } = styles;

    let output = useDisplayTimer();

    return (
        <div className={timerClock}>
            {output}
        </div>
    )
}

export default TimerClock;