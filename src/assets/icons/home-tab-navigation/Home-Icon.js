import React from 'react';
import { Icon } from 'react-native-elements';

const HomeIcon = ({ focused, tintColor }) => (
    <Icon
        name="circle"
        type="entypo"
        size={26}
        color={focused ? tintColor : 'gray'}
    />
);

export default HomeIcon;