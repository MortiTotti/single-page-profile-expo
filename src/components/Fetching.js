import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const Fetching = () => (
    <View style={styles.activityIndicatorContainer}>
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