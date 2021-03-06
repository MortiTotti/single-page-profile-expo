import { Platform, StyleSheet } from 'react-native';
import mainColor from '@Constants';

const screenStyle = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFF',
        borderWidth: 0,
        flex: 1,
        margin: 0,
        padding: 0,
    },
    container: {
        flex: 1,
    },
    scroll: {
        backgroundColor: '#FFF',
    },
    actionButton: {
        backgroundColor: 'transparent',
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 10
    }
});

export default screenStyle;
