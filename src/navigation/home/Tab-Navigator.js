import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Platform, StatusBar } from 'react-native';
import AboutScreen from "@Screens/about";
import DashboardScreen from "@Screens/dashboard";
import HomeIcon from "@Assets/icons/home-tab-navigation/Home-Icon";

const HomeTabNavigator = TabNavigator(
    {
      dashboard: {
        screen: DashboardScreen,
        navigationOptions: {
          tabBarLabel: 'Dashboard',
          tabBarIcon: HomeIcon
        }
      },
      about: {
        screen: AboutScreen,
        navigationOptions: {
          tabBarLabel: 'About the app',
          tabBarIcon: HomeIcon
        }
      }
    },
    {
      tabBarOptions: {
        activeTintColor: '#ffffff',
        inactiveTintColor: '#ffffff',
        inactiveBackgroundColor: '#353539',
        activeBackgroundColor: '#353539',
        showIcon: false,
        scrollEnabled: false,
        indicatorStyle: {
          borderBottomColor: '#ffffff',
          borderBottomWidth: 2,
        },
        labelStyle: {
          fontSize: 12,
          justifyContent: 'center',
          alignItems: 'center',
        },
        style: {
          backgroundColor: '#353539'
        }
      },
      tabBarPosition: 'bottom',
      initialRouteName: 'dashboard',
    }
  )
  
  export default HomeTabNavigator;