import React, { Component } from 'react';
import Profile from "./Profile";


class ProfileScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            userProfile: {
                fullName: "",
                userName: "",
                website: "",
                info: "",
                email: "",
                mobile: "",
                isAnonymous: false
            }
        }
    }

    onValueChange = (id, value) => {
        let state = this.state;
        state.userProfile[id] = value;
        this.setState(state);
    }

    render() {
        let { userProfile } = this.state;
        return (
            <Profile userProfile={userProfile} onValueChange={this.onValueChange} />
        );
    }
}

ProfileScreen.navigationOptions = () => ({
    title: 'Edit Profile'
});

export default ProfileScreen;