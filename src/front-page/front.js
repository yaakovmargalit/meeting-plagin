import React from 'react';
import ReactDOM from 'react-dom';
import FrontApp from './FrontApp';
import "./styles/front.scss"

document.addEventListener('DOMContentLoaded', function () {
    const divsToUpdate = document.querySelectorAll(".ym-meeting-front-app")
    console.log(divsToUpdate);
    divsToUpdate.forEach(function (div) {
        //   const data = JSON.parse(div.querySelector("pre").innerHTML)
          ReactDOM.render(<FrontApp  />, div)
        //   div.classList.remove("ym-meeting-front-app")
        })})