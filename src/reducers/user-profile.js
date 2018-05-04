import {
  USER_PROFILE_FETCH_REQUESTED,
  USER_PROFILE_FETCH_FAILED,
  USER_PROFILE_RECEIVED,

  USER_PROFILE_UPDATE_REQUESTED,
  USER_PROFILE_UPDATE_FAILED,
  USER_PROFILE_UPDATED
} from '@Constants/Action-Types';

const initState = {
  isFetching: false,
  isUpdating: false,
  userData: {
    fullName: "",
    userName: "",
    website: "",
    info: "",
    email: "",
    mobile: "",
    isAnonymous: false
  },
  errorMessage: ""
};

const userProfile = (state = initState, action) => {
  switch (action.type) {
    case USER_PROFILE_FETCH_REQUESTED: {
      return Object.assign({}, state, {
        isFetching: action.payload.isFetching,
      });
    }
    case USER_PROFILE_FETCH_FAILED: {
      return Object.assign({}, state, {
        isFetching: action.payload.isFetching,
        errorMessage: action.payload.message
      });
    }
    case USER_PROFILE_RECEIVED: {
      return Object.assign({}, state, {
        isFetching: action.payload.isFetching,
        userData: action.payload.userProfile
      });
    }
    case USER_PROFILE_UPDATED: {
      return Object.assign({}, state, {
        fullName: action.payload.fullName,
        userName: action.payload.userName
      });
    }
    default: return state;
  }
};

export default userProfile;
