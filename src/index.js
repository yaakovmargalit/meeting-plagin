import React from 'react';
import app from '@wordpress/blocks'
import ReactDOM from 'react-dom';
import BackApp from './BackApp';
import "./styles.scss"
wp.blocks.registerBlockType("ymmeeting/set-new-meeting", {
    title: "קביעת תור",
    icon: "smiley",
    category: "common",
    attributes: {
      question: { type: "string" },
      answers: { type: "array", default: [""] },
      correctAnswer: { type: "number", default: undefined },
      bgColor: { type: "string", default: "#EBEBEB" },
      theAlignment: { type: "string", default: "left" }
    },
    description: "קביעת תור בקלות",
    example: {
      attributes: {
        question: "What is my name?",
        correctAnswer: 3,
        answers: ["Meowsalot", "Barksalot", "Purrsloud", "Brad"],
        theAlignment: "center",
        bgColor: "#CFE8F1"
      }
    },
    edit: ()=>(<div>אני סתם </div>),
    save: function (props) {
      return null
    }
  })
  
