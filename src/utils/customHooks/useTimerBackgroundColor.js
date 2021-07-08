import { useSelector } from "react-redux";

const useTimerBackgroundColor = () => {
    const { isStarted, isBreak } = useSelector(state => state.timer);
    let background = '';

    if (!isStarted && !isBreak) {
        background = '#ff6961';
    }
    else if (isStarted && !isBreak) {
        background = '#ff6961';
    }
    else if (isStarted && isBreak) {
        background = '#98fb98';
    }
    else if (!isStarted && isBreak) {
        background = '#98fb98';
    }

    return background;
}

export default useTimerBackgroundColor;