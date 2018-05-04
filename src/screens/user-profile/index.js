import React, { Component } from 'react';
import Profile from "./Profile";
import Fetching from "./Fetching";
import { connect } from 'react-redux';
import requestUserProfile from '@Actions/User-Profile-Action';

class ProfileScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { userProfile: this.props.userProfile };
    }

    componentWillMount() {
        this.props.requestUserProfile(10).then((response) => {
            this.setState({ userProfile: response });
        }, (errorMessage) => {
            // log to error log
        });
    }

    onValueChange = (id, value) => {
        let state = this.state;
        state.userProfile[id] = value;
        this.setState(state);
    }

    render() {
        let { isFetching } = this.props;
        let { userProfile } = this.state;

        if (isFetching)
            return <Fetching />
        else
            return <Profile userProfile={userProfile} onValueChange={this.onValueChange} />
    }
}

ProfileScreen.navigationOptions = () => ({
    title: 'Edit Profile'
});

const mapStateToProps = state => ({
    userProfile: state.userProfile.userData,
    apiErrorMessage: state.userProfile.errorMessage,
    isFetching: state.userProfile.isFetching,
    isUpdating: state.userProfile.isUpdating
})

export default connect(mapStateToProps, { requestUserProfile })(ProfileScreen);
