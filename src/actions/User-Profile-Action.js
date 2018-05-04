import * as types from '@Constants/Action-Types';
import FakeData from "@Store/data.json";

const _userProfileFetchRequested = userId => ({
    type: types.USER_PROFILE_FETCH_REQUESTED,
    payload: {
        isFetching: true,
        userId
    }
});

const _userProfileFetchFailed = message => ({
    type: types.USER_PROFILE_FETCH_FAILED,
    payload: {
        isFetching: false,
        message
    }
});

const _userProfileReceived = userProfile => ({
    type: types.USER_PROFILE_RECEIVED,
    payload: {
        isFetching: false,
        userProfile
    }
});

const _userProfileUpdateRequested = userId => ({
    type: types.USER_PROFILE_UPDATE_REQUESTED,
    payload: {
        isFetching: true,
        userId
    }
});

const _userProfileUpdateFailed = message => ({
    type: types.USER_PROFILE_UPDATE_FAILED,
    payload: {
        isFetching: false,
        message
    }
});

const _userProfileUpdated = userProfile => ({
    type: types.USER_PROFILE_UPDATED,
    payload: {
        isFetching: false,
        userProfile
    }
});

const fetchFakeApiCall = () => new Promise(function (resolve, reject) {
    const { userProfile, errorMessage } = FakeData;
    setTimeout(function() {
        resolve({
            ok: true,
            data: userProfile
        });
        /*reject({
            ok: false,
            message: errorMessage
        });*/
    }, 2000);
});

const updateFakeApiCall = () => new Promise(function (resolve, reject) {
    const { errorMessage } = FakeData;
    setTimeout(function () {
        resolve({
            ok: true,
            data: true
        });
        /*reject({
            ok: false,
            message: errorMessage
        });*/
    }, 2000);
});

const requestUserProfile = userId => (dispatch) => {
    dispatch(_userProfileFetchRequested(userId));

    return fetchFakeApiCall()
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

export default requestUserProfile;
