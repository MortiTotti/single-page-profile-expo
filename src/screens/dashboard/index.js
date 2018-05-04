import React, { Component } from 'react';
import Content from "./Content";

class DasboardScreen extends Component {
    render() {
        let footerText = "this a registered app by me";
        return (
            <Content navigation={this.props.navigation} footer={footerText} />
        );
    }
}

DasboardScreen.navigationOptions = () => ({
    header: null,
});

export default DasboardScreen;
