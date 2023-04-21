import React from 'react';
import ReactDOM from 'react-dom';
import FrontApp from './FrontApp';
import "./styles.scss"

document.addEventListener('DOMContentLoaded', function () {
    var element = document.getElementById('ym-meeting-front-app');
    if (typeof element !== 'undefined' && element !== null) {
        ReactDOM.render(<FrontApp />, document.getElementById('ym-meeting-front-app'));
    }
})