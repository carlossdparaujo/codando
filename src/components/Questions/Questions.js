import React from 'react';
import CreateQuestionButton from './CreateQuestionButton/CreateQuestionButton';
import QuestionInfo from './QuestionInfo/QuestionInfo';

const Questions = (props) => (
  <div>
    <CreateQuestionButton />
    {props.questions.map((questionInfo) => {
      return <QuestionInfo key={`$questionInfo.id()`} info={questionInfo} />
    })}
  </div>
);

export default Questions;
