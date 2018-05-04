import React from 'react';
import AppNavigator from "@Navigations/App-Navigator";
import { StyleSheet, View, Text } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <AppNavigator />
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
