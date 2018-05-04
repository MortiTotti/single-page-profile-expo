import React, { Component } from 'react';
import { Text, View } from 'react-native';
import screenStyle from "./style";

class AboutScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        return (
            <View style={screenStyle.container}>
                <View style={screenStyle.header}>
                    <Text>A single page user profile</Text>
                </View>
                <View style={screenStyle.content}>
                    <Text>Welcome</Text>
                </View>
                <View style={screenStyle.footer}>
                    <Text>copy right 2002</Text>
                </View>
            </View>
        );
    }
}

export default AboutScreen;
