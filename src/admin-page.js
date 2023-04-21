import React from 'react';
import ReactDOM from 'react-dom';
import BackApp from './BackApp';

document.addEventListener('DOMContentLoaded', function () {
    var element = document.getElementById('ym-meeting-admin-app');
    if (typeof element !== 'undefined' && element !== null) {
        ReactDOM.render(<BackApp />, document.getElementById('ym-meeting-admin-app'));
    }
})