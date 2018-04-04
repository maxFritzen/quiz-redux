import React from 'react';
import { connect } from 'react-redux';

const Question = (props) => (
  <div className="question">
    {props.question}
  </div>
);
export default Question;
