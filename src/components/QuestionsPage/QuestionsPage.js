import React from 'react';
import Questions from './Questions/Questions';
import QuestionInfoModel from './Questions/QuestionInfo/QuestionInfoModel';

const QuestionsPage = () => (
  <Questions questions={[
    new QuestionInfoModel('hs7das6f7af', 'The hardest question ever'),
    new QuestionInfoModel('48a4f84k8c8', 'The easiest question ever')
  ]}/>
);

export default QuestionsPage;
