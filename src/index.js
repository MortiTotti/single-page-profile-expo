import React from 'react';
import HomeTabNavigator from "@Navigations/home/Tab-Navigator";
import { StyleSheet, View, Text } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <HomeTabNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
