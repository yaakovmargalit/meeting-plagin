import React from 'react';
import ReactDOM from 'react-dom';
import AdminApp from './AdminApp';
import './styles/admin.scss'
document.addEventListener('DOMContentLoaded', function () {
    var element = document.getElementById('ym-meeting-admin-app');
    if (typeof element !== 'undefined' && element !== null) {
        ReactDOM.render(<AdminApp />, document.getElementById('ym-meeting-admin-app'));
    }
})