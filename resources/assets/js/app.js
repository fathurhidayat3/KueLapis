require('./bootstrap');
import Clipboard from 'clipboard';
import swal from 'sweetalert';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Index from './Index';

var clipboard = new Clipboard('code');

clipboard.on('success', function(e) {
    swal({
        title: "Have Fun!",
        text: e.text,
        timer: 800,
        button: null,
      });

    e.clearSelection();
});

render(
    <BrowserRouter>
        <Index />
    </BrowserRouter>,
    document.getElementById('app')
);