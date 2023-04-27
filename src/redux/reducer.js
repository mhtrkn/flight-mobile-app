import { INCREMENT_COUNTER, DECREMENT_COUNTER, TOOGLE_THEME, APP_STARTED, READY_APP, AUTH_APP } from './actions';

// Başlangıç durumu (initial state) tanımlayın
const initialState = {
    counter: 0,
    theme: 'dark',
    started: false,
    auth: false,
    ready: false,
};

// Reducer fonksiyonunu oluşturun
const Counter = (state = initialState.counter, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + 1;
        case DECREMENT_COUNTER:
            return state - 1;
        default:
            return state;
    }
};

const Auth = (state = initialState.auth, action) => {
    switch (action.type) {
        case AUTH_APP:
            return true;
        default:
            return state;
    }
}

const ReadyApp = (state = initialState.ready, action) => {
    switch (action.type) {
        case READY_APP:
            return true;
        default:
            return state;
    }
}

const Started = (state = initialState.started, action) => {
    switch (action.type) {
        case APP_STARTED:
            return true
        default:
            return state
    }
}

const Theme = (state = initialState.theme, action) => {
    switch (action.type) {
        case TOOGLE_THEME:
            return state === 'dark' ? 'light' : 'dark';
        default:
            return state;
    }
}

export {
    Counter,
    Theme,
    Started,
    Auth,
    ReadyApp
}
