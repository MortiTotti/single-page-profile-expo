import { StyleSheet } from "react-native";
import { Platform, StatusBar } from 'react-native';

const screenStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 2,
        paddingBottom: 2
    }
});

export default screenStyle;