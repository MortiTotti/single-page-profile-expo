import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const Fetching = () => (
    <View style={styles.activityIndicatorContainer}>
        <Text>Is loading please wait ...</Text>
        <ActivityIndicator animating={true} />
    </View>
)

const styles = StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
});

export default Fetching;