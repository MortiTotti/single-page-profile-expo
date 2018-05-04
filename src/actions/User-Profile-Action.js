import * as types from '@Constants/Action-Types';
import FakeData from "@Store/data.json";

const _userProfileFetchRequested = userId => ({
    type: types.USER_PROFILE_FETCH_REQUESTED,
    payload: {
        userId
    }
});

const _userProfileFetchFailed = message => ({
    type: types.USER_PROFILE_FETCH_FAILED,
    payload: {
        message
    }
});

const _userProfileReceived = userProfile => ({
    type: types.USER_PROFILE_RECEIVED,
    payload: {
        userProfile
    }
});

const _userProfileUpdateRequested = userProfile => ({
    type: types.USER_PROFILE_UPDATE_REQUESTED,
    payload: {
        userProfile
    }
});

const _userProfileUpdateFailed = message => ({
    type: types.USER_PROFILE_UPDATE_FAILED,
    payload: {
        message
    }
});

const _userProfileUpdated = userProfile => ({
    type: types.USER_PROFILE_UPDATED,
    payload: {
        userProfile
    }
});

const fetchFakeApiCall = (stateUserProfile) => new Promise(function (resolve, reject) {
    const { userProfile, errorMessage } = FakeData;

    // TODO: in real app we use local storage, it's just for demo now
    let result = (stateUserProfile.id != 0) ? stateUserProfile : userProfile;

    console.log(result);

    setTimeout(function() {
        resolve({
            ok: true,
            data: result
        });
        /*reject({
            ok: false,
            message: errorMessage
        });*/
    }, 1000);
});

const updateFakeApiCall = (userProfile) => new Promise(function (resolve, reject) {
    const { errorMessage } = FakeData;
    setTimeout(function () {
        resolve({
            ok: true,
            data: {...userProfile}
        });
        /*reject({
            ok: false,
            message: errorMessage
        });*/
    }, 1000);
});

export const fetchUserProfile = (userProfile) => (dispatch) => {
    dispatch(_userProfileFetchRequested(userProfile.id));

    return fetchFakeApiCall(userProfile)
        .then(response => {
            if (!response.ok) {
                dispatch(_userProfileFetchFailed(response.message));
                return Promise.reject(userId);
            }
            let userProfile = response.data;
            dispatch(_userProfileReceived(userProfile));
            return Promise.resolve(userProfile);
        });
};

export const updateUserProfile = userProfile => (dispatch) => {
    dispatch(_userProfileUpdateRequested(userProfile));

    return updateFakeApiCall(userProfile)
        .then(response => {
            if (!response.ok) {
                dispatch(_userProfileUpdateFailed(response.message));
                return Promise.reject(userId);
            }
            let userProfile = response.data;
            dispatch(_userProfileUpdated(userProfile));
            return Promise.resolve(userProfile);
        });
};
