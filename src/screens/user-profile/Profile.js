import React, { Component } from "react";
import { Image, ImageBackground, Linking, ListView, Platform, ScrollView, StyleSheet, Text, View, } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import Avatar from "./Avatar";
import screenStyle from "./style";

const Profile = () => (
    <ScrollView style={screenStyle.scroll}>
        <View style={screenStyle.container}>
            <Card containerStyle={screenStyle.cardContainer}>
                <Text>my profile</Text>
            </Card>
        </View>
    </ScrollView>
)

export default Profile;
