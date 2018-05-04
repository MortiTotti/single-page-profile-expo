import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const Updating = () => (
    <View style={styles.activityIndicatorContainer}>
        <Text>Is updating please wait ...</Text>
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

export default Updating;