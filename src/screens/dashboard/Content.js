import React, { Component } from 'react';
import { Image, ImageBackground, Linking, ListView, Platform, Button, ScrollView, StyleSheet, Text, View, } from 'react-native';
import screenStyle from "./style";

const Content = ({ navigation, footer }) => (
    <View style={screenStyle.container}>
        <View style={screenStyle.header}>
            <Text>This is your header</Text>
        </View>
        <View style={screenStyle.content}>
            <Button
                onPress={() => {
                    let { navigate } = navigation;
                    navigate("profile", { userName: 'Lucy' });
                }}
                title="Profile"
            />
        </View>
        <View style={screenStyle.footer}>
            <Text>{footer}</Text>
        </View>
    </View>
)

export default Content;
