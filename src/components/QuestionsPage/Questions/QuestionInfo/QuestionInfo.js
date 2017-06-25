import React from 'react';
import PropTypes from 'prop-types';
import QuestionInfoModel from '../../../../model/QuestionInfo';

const QuestionInfo = (props) => (
  <p id="title">{props.info.title}</p>
);

QuestionInfo.propTypes = {
  info: PropTypes.instanceOf(QuestionInfoModel)
}

export default QuestionInfo;
