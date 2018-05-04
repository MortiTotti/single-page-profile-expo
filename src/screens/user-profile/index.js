import React, { Component } from 'react';
import Profile from "./Profile";
import Fetching from "@Components/Fetching";
import Updating from "@Components/Updating";
import { connect } from 'react-redux';
import { fetchUserProfile, updateUserProfile } from '@Actions/User-Profile-Action';
import { Button } from 'react-native-elements';
import screenStyle from "./style";

class ProfileScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state

        return {
            title: 'Edit Profile',
            headerRight: <Button
                            title="Update"
                            color="blue"
                            fontWeight="bold"
                            buttonStyle={screenStyle.actionButton} 
                            onPress={() => params.updateProfile()} />
        }
    }

    constructor(props) {
        super(props);
        this.state = { userProfile: this.props.userProfile };
    }

    componentWillMount() {
        let { userProfile } = this.props;
        this.props.fetchUserProfile(userProfile).then((response) => {
            this.setState({ userProfile: response });
        }, (errorMessage) => {
            // TODO: log the error by logger
        });
    }

    componentDidMount() {
        this.props.navigation.setParams({ updateProfile: this.updateProfile })
    }

    updateProfile = () => {
        let { isFetching, isUpdating } = this.props;
        if (isFetching || isUpdating) return;

        let { userProfile } = this.state;
        this.props.updateUserProfile(userProfile).then((response) => {
            let state = this.state;
            state.userProfile = response;
            this.setState(state);
        }, (errorMessage) => {
            // TODO: log the error by logger
        });
    }

    onValueChange = (id, value) => {
        let state = this.state;
        state.userProfile[id] = value;
        this.setState(state);
    }

    render() {
        let { isFetching, isUpdating } = this.props;
        let { userProfile } = this.state;

        if (isFetching)
            return <Fetching />
        else
            if (isUpdating)
                return <Updating />
            else
                return <Profile userProfile={userProfile} onValueChange={this.onValueChange} />
    }
}

const mapStateToProps = state => ({
    userProfile: state.userProfile.userData,
    apiErrorMessage: state.userProfile.errorMessage,
    isFetching: state.userProfile.isFetching,
    isUpdating: state.userProfile.isUpdating
})

export default connect(mapStateToProps, { fetchUserProfile, updateUserProfile })(ProfileScreen);
