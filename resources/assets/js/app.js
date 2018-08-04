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

const initialState = {};

const store = createStore(
    rootReducer,
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