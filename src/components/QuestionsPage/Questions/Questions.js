import React from 'react';
import PropTypes from 'prop-types';
import CreateQuestionButton from './CreateQuestionButton/CreateQuestionButton';
import QuestionInfo from './QuestionInfo/QuestionInfo';
import QuestionInfoModel from './QuestionInfo/QuestionInfoModel';

const Questions = (props) => (
  <div>
    <CreateQuestionButton />
    {props.questions.map((questionInfo) => {
      return <QuestionInfo key={questionInfo.id} info={questionInfo} />
    })}
  </div>
);

Questions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.instanceOf(QuestionInfoModel))
}

export default Questions;
