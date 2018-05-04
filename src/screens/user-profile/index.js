import React, { Component } from 'react';
import Profile from "./Profile";

const ProfileScreen = () => <Profile />

ProfileScreen.navigationOptions = () => ({
    title: 'Edit Profile'
});

export default ProfileScreen;