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
    id: 0,
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
        isFetching: true,
      });
    }
    case USER_PROFILE_FETCH_FAILED: {
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.payload.message
      });
    }
    case USER_PROFILE_RECEIVED: {
      return Object.assign({}, state, {
        isFetching: false,
        userData: action.payload.userProfile
      });
    }
    case USER_PROFILE_UPDATE_REQUESTED: {
      return Object.assign({}, state, {
        isUpdating: true,
        userProfile: {...action.payload.userProfile}
      });
    }
    case USER_PROFILE_UPDATE_FAILED: {
      return Object.assign({}, state, {
        isUpdating: false,
      });
    }
    case USER_PROFILE_UPDATED: {
      return Object.assign({}, state, {
        isUpdating: false,
        userData: {...action.payload.userProfile}
      });
    }
    default: return state;
  }
};

export default userProfile;
