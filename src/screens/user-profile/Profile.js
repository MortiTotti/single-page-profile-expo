import React, { Component } from "react";
import { Image, ImageBackground, Linking, ListView, Platform, ScrollView, StyleSheet, Text, View, } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import Avatar from "./Avatar";
import screenStyle from "./style";
import Separator from "./Separator";
import UserInfoItemTextInput from "./User-Info-Item-TextInput";
import UserInfoItemToggle from "./User-Info-Item-Toggle";

const Profile = ({ userProfile, onValueChange }) => (
    <ScrollView style={screenStyle.scroll}>
        <View style={screenStyle.container}>
            <Card containerStyle={screenStyle.cardContainer}>
                <Avatar />
                <UserInfoItemTextInput
                    id="fullName"
                    caption="Full name"
                    placeholder="Your full name as public info"
                    value={userProfile.fullName}
                    onValueChange={onValueChange} />

                <UserInfoItemTextInput 
                    id="userName" 
                    caption="User name" 
                    placeholder="Your user name" 
                    value={userProfile.userName} 
                    onValueChange={onValueChange} />

                <UserInfoItemTextInput 
                    id="website" 
                    caption="Website" 
                    placeholder="Your website url" 
                    value={userProfile.website} 
                    onValueChange={onValueChange} />

                <UserInfoItemTextInput 
                    id="info" 
                    caption="Info" 
                    placeholder="Some info about yourself" 
                    value={userProfile.info} 
                    onValueChange={onValueChange} />

                <UserInfoItemToggle 
                    id="isAnonymous" 
                    caption="Anonymous" 
                    value={userProfile.isAnonymous} 
                    onValueChange={onValueChange} />

                <UserInfoItemTextInput 
                    id="email" 
                    caption="Email" 
                    placeholder="Your email address" 
                    value={userProfile.email} 
                    onValueChange={onValueChange} />

                <UserInfoItemTextInput 
                    id="mobile" 
                    caption="Mobile" 
                    placeholder="Your phone number" 
                    value={userProfile.mobile} 
                    onValueChange={onValueChange} />
            </Card>
        </View>
    </ScrollView>
)

export default Profile;
