require('./bootstrap');
import Clipboard from 'clipboard';
import swal from 'sweetalert';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import Index from './Index';

var clipboard = new Clipboard('code');

clipboard.on('success', function (e) {
    swal({
        title: "Have Fun!",
        text: e.text,
        timer: 800,
        button: null,
    });

    e.clearSelection();
});

const initialState = {
    PaletteReducer: {
        data: [
            { id: 1, code1: '#FF00FF', code2: '#F0F0F0', code3: '#F0FFF0', code4: '#FFF0FF' },
            { id: 2, code1: '#FF00F0', code2: '#F0F0F0', code3: '#F0FFF0', code4: '#FFF0FF' }
        ],
        selected: { id: 1, code1: '#55efc4', code2: '#e17055', code3: '#b2bec3', code4: '#00b894' }
    },
    GradientReducer: {
        data: [
            { id: 1, from: '#00b894', to: '#e17055' },
            { id: 2, from: '#b2bec3', to: '#55efc4' }
        ],
        selected: { id: 1, from: '#00b894', to: '#55efc4' }
    }
};

const store = createStore(
    rootReducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
        <BrowserRouter>
            <Index />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);