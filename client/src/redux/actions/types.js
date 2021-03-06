const USER = {
  REGISTER: 'REGISTER',
  SIGN_IN: 'USER_SIGN_IN',
  SIGN_OUT: 'USER_SIGN_OUT',
  LOADING: 'USER_LOADING',
  LOADED: 'USER_LOADED',
  ERROR: 'USER_ERROR',
  CLEAR_ERROR: 'CLEAR_USER_ERROR' 
}

const PROFILE = {
  BASIC: 'BASIC',
  ABOUT: 'ABOUT',
  PHOTO: 'PHOTO',
  SET_PHOTO: 'SET_PHOTO',
  DELETE_PHOTO: 'DELETE_PHOTO',
  ACCOUNT: 'ACCOUNT',
  ERROR: 'PROFILE_ERROR',
}

const EVENTS = {
  INITIAL_UPDATE: 'INITIAL_UPDATE',
  CREATE_EVENT: 'CREATE_EVENT',
  UPDATE_EVENT: 'UPDATE_EVENT',
  JOIN_EVENT: 'JOIN_EVENT',
  LEAVE_EVENT: 'LEAVE_EVENT',
  DELETE_EVENT: 'DELETE_EVENT',
  ERROR: 'EVENTS_ERROR',
  CLEAR_ERROR: 'CLEAR_EVENT_ERROR' 
}

export { USER, PROFILE, EVENTS }; 