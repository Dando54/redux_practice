// timer status 
const TIMER_STARTED = 'redux_practice/timer/timer_started';
const BREAK_STARTED = 'redux_practice/timer/break_started';

// set minutes/seconds and remaining minutes/seconds
const SET_REMAINING_MINUTES = 'redux_practice/timer/set_remaining_minutes';
const SET_REMAINING_SECONDS = 'redux_practice/timer/set_remaining_seconds';
const SET_MINUTES = 'redux_practice/timer/set_minutes';
const SET_SECONDS = 'redux_practice/timer/set_seconds';

// set break minutes/seconds and remaining break minutes/seconds
const SET_REMAINING_BREAK_MINUTES = 'redux_practice/timer/set_remaining_break_minutes';
const SET_REMAINING_BREAK_SECONDS = 'redux_practice/timer/set_remaining_break_seconds';
const SET_BREAK_MINUTES = 'redux_practice/timer/set_break_minutes';
const SET_BREAK_SECONDS = 'redux_practice/timer/set_break_seconds';

// decrement timer and break minutes/seconds
const DECREMENT_SECONDS = 'redux_practice/timer/decrement_seconds';
const DECREMENT_MINUTES = 'redux_practice/timer/decrement_minutes';
const DECREMENT_BREAK_SECONDS = 'redux_practice/timer/decrement_break_seconds';
const DECREMENT_BREAK_MINUTES = 'redux_practice/timer/decrement_break_minutes';

const initialState = {
    isStarted: false,
    isBreak: false,
    remainingMinutes: 0,
    remainingSeconds: 0,
    remainingBreakMinutes: 0,
    remainingBreakSeconds: 0,
}

// reducer
const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case TIMER_STARTED:
            return {
                ...state,
                isStarted: action.payload,
            }
        case BREAK_STARTED:
            return {
                ...state,
                isBreak: action.payload,
            }
        case SET_REMAINING_MINUTES:
            return {
                ...state,
                remainingMinutes: action.payload
            }
        case SET_REMAINING_SECONDS:
            return {
                ...state,
                remainingSeconds: action.payload
            }
        case SET_REMAINING_BREAK_MINUTES:
            return {
                ...state,
                remainingBreakMinutes: action.payload
            }
        case SET_REMAINING_BREAK_SECONDS:
            return {
                ...state,
                remainingBreakSeconds: action.payload,
            }
        case SET_MINUTES:
            return {
                ...state,
                minutes: action.payload
            }
        case SET_SECONDS:
            return {
                ...state,
                seconds: action.payload
            }
        case SET_BREAK_MINUTES:
            return {
                ...state,
                breakMinutes: action.payload,
            }
        case SET_BREAK_SECONDS:
            return {
                ...state,
                breakSeconds: action.payload,
            }
        case DECREMENT_SECONDS:
            return {
                ...state,
                remainingSeconds: state.remainingSeconds - 1,
            }
        case DECREMENT_MINUTES:
            return {
                ...state,
                remainingMinutes: state.remainingMinutes - 1,
            }
        case DECREMENT_BREAK_MINUTES:
            return {
                ...state,
                remainingBreakMinutes: state.remainingBreakMinutes - 1,
            }
        case DECREMENT_BREAK_SECONDS:
            return {
                ...state,
                remainingBreakSeconds: state.remainingBreakSeconds - 1,
            }
        default:
            return state;
    }
}

//action creators

export const setIsStarted = (data) => {
    return {
        type: TIMER_STARTED,
        payload: data,
    }
}

export const setIsBreak = (data) => {
    return {
        type: BREAK_STARTED,
        payload: data,
    }
}

export const setRemainingMinutes = (data) => {
    return {
        type: SET_REMAINING_MINUTES,
        payload: data
    }
}

export const setRemainingBreakMinutes = (data) => {
    return {
        type: SET_REMAINING_BREAK_MINUTES,
        payload: data
    }
}

export const setRemainingSeconds = (data) => {
    return {
        type: SET_REMAINING_SECONDS,
        payload: data
    }
}

export const setRemainingBreakSeconds = (data) => {
    return {
        type: SET_REMAINING_BREAK_SECONDS,
        payload: data
    }
}

export const setMinutes = (data) => {
    return {
        type: SET_MINUTES,
        payload: data
    }
}

export const setBreakMinutes = (data) => {
    return {
        type: SET_BREAK_MINUTES,
        payload: data
    }
}

export const setSeconds = (data) => {
    return {
        type: SET_SECONDS,
        payload: data,
    }
}

export const setBreakSeconds = (data) => {
    return {
        type: SET_BREAK_SECONDS,
        payload: data,
    }
}

export const decrementSeconds = () => {
    return {
        type: DECREMENT_SECONDS,
    }
}

export const decrementBreakSeconds = () => {
    return {
        type: DECREMENT_BREAK_SECONDS,
    }
}

export const decrementMinutes = () => {
    return {
        type: DECREMENT_MINUTES,
    }
}

export const decrementBreakMinutes = () => {
    return {
        type: DECREMENT_BREAK_MINUTES,
    }
}


export default timerReducer;