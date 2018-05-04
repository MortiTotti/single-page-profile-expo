import React, { Component } from 'react';
import Home from "./src";
import configureStore from '@Store/configure-store';
import { Provider } from 'react-redux';

console.disableYellowBox = true;
const store = configureStore();

const App = () => <Provider store={store}><Home/></Provider>

export default App;
