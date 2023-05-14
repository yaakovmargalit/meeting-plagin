import React from 'react';
import ReactDOM from 'react-dom';
import FrontApp from './FrontApp';
import "./styles/front.scss"
// const divsToUpdate = document.querySelectorAll(".ym-meeting-front-app")
// console.log(divsToUpdate);
// divsToUpdate.forEach(function (div) {
//   const data = JSON.parse(div.querySelector("pre").innerHTML)
//   ReactDOM.render(<FrontApp  />, div)
//   div.classList.remove("ym-meeting-front-app")
// })
// document.addEventListener('DOMContentLoaded', function () {
//     var element = document.getElementById('ym-meeting-front-app');
//     if (typeof element !== 'undefined' && element !== null) {
//         ReactDOM.render(<FrontApp />, document.getElementById('ym-meeting-front-app'));
//     }
// })

document.addEventListener('DOMContentLoaded', function () {
    const divsToUpdate = document.querySelectorAll(".ym-meeting-front-app")
    console.log(divsToUpdate);
    divsToUpdate.forEach(function (div) {
        //   const data = JSON.parse(div.querySelector("pre").innerHTML)
          ReactDOM.render(<FrontApp  />, div)
        //   div.classList.remove("ym-meeting-front-app")
        })})