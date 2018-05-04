import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Platform, StatusBar } from 'react-native';
import ProfileScreen from "@Screens/user-profile";
import DashboardScreen from "@Screens/dashboard";
import HomeTabNavigator from "./home/Tab-Navigator";

const AppNavigator = StackNavigator(
    {
        home: {
            screen: HomeTabNavigator
        },
        profile: {
            screen: ProfileScreen
        }
    },
    {
        mode: 'card'
    },
    {
        initialRouteName: 'home'
    }
);

export default AppNavigator;
