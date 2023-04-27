// Action tiplerini tanımlayın
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const TOOGLE_THEME = 'TOOGLE_THEME';
export const APP_STARTED = 'APP_STARTED';
export const AUTH_APP = 'AUTH_APP';
export const READY_APP = 'READY_APP';

// Action oluşturucularını (action creators) tanımlayın
export const incrementCounter = () => ({
  type: INCREMENT_COUNTER
});

export const appStarted = () => ({
  type: APP_STARTED
})

export const isAuth = () => ({
  type: AUTH_APP
})

export const appReady = () => ({
  type: READY_APP
})

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER
});

export const changeTheme = () => ({
  type: TOOGLE_THEME
})
