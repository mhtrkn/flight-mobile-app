// Action tiplerini tanımlayın
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const TOOGLE_THEME = 'TOOGLE_THEME';
export const APP_STARTED = 'APP_STARTED';
export const AUTH_APP = 'AUTH_APP';
export const READY_APP = 'READY_APP';
export const DEPARTURE_CHANGE = 'DEPARTURE_CHANGE';
export const RETURNTIME_CHANGE = 'RETURNTIME_CHANGE';
export const DATE_PICKER_MODAL = 'DATE_PICKER_MODAL';

// Action oluşturucularını (action creators) tanımlayın
export const incrementCounter = () => ({
  type: INCREMENT_COUNTER
});

export const dateTimePickerModal = () => ({
  type: DATE_PICKER_MODAL
})

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

export const departureChange = (time) => ({
  type: DEPARTURE_CHANGE,
  payload: time
})

export const returnTimeChange = (time) => ({
  type: RETURNTIME_CHANGE,
  payload: time
})