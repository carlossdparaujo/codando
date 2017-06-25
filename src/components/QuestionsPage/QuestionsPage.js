import React from 'react';
import Questions from './Questions/Questions';
import QuestionInfo from '../../model/QuestionInfo';

const QuestionsPage = () => (
  <Questions questions={[
    new QuestionInfo('hs7das6f7af', 'The hardest question ever'),
    new QuestionInfo('48a4f84k8c8', 'The easiest question ever')
  ]}/>
);

export default QuestionsPage;
