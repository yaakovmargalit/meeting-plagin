import React from 'react';
import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, BlockControls, AlignmentToolbar, useBlockProps } from "@wordpress/block-editor"

import ReactDOM from 'react-dom';
import "./styles.scss"
registerBlockType("ymmeeting/set-new-meeting", {
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
    edit: Edit,
    save: function (props) {
      return null
    }
  })


  function Edit(){

    const blockProps = useBlockProps()
    return (
      <div {...blockProps}>
        מהלך עריכה
      </div>
    )
  }
  
