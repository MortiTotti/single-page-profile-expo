import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Platform, StatusBar } from 'react-native';
import ProfileScreen from "@Screens/user-profile";
import DashboardScreen from "@Screens/dashboard";

const DashboardStackNavigation = StackNavigator(
    {
        dashboard: {
            screen: DashboardScreen
        },
        profile: {
            screen: ProfileScreen
        }
    },
    {
        mode: 'card'
    },
    {
        initialRouteName: 'dashboard'
    }
);

export default DashboardStackNavigation;
