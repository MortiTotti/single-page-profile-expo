import React, { Component } from "react";
import { Image, ImageBackground, Linking, ListView, Platform, ScrollView, StyleSheet, Text, View, } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import Avatar from "./Avatar";
import screenStyle from "./style";
import SingleRowTextInput from "@Components/Single-Row-Text-Input";
import SingleRowSwitch from "@Components/Single-Row-Switch";

const Profile = ({ userProfile, onValueChange }) => (
    <ScrollView style={screenStyle.scroll}>
        <View style={screenStyle.container}>
            <Card containerStyle={screenStyle.cardContainer}>
                <Avatar onPressAvatar={() => console.log("Avatar pressed")} />
                <SingleRowTextInput
                    id="fullName"
                    caption="Full name"
                    placeholder="Your full name as public info"
                    value={userProfile.fullName}
                    onValueChange={onValueChange} />

                <SingleRowTextInput
                    id="userName"
                    caption="User name"
                    placeholder="Your user name"
                    value={userProfile.userName}
                    onValueChange={onValueChange} />

                <SingleRowTextInput
                    id="website"
                    caption="Website"
                    placeholder="Your website url"
                    value={userProfile.website}
                    onValueChange={onValueChange} />

                <SingleRowTextInput
                    id="info"
                    caption="Info"
                    placeholder="Some info about yourself"
                    value={userProfile.info}
                    onValueChange={onValueChange} />

                <SingleRowSwitch
                    id="isAnonymous"
                    caption="Anonymous"
                    value={userProfile.isAnonymous}
                    onValueChange={onValueChange} />

                <SingleRowTextInput
                    id="email"
                    caption="Email"
                    placeholder="Your email address"
                    value={userProfile.email}
                    onValueChange={onValueChange} />

                <SingleRowTextInput
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
