import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import Questions from './Questions';
import CreateQuestionButton from './CreateQuestionButton/CreateQuestionButton';
import QuestionInfo from './QuestionInfo/QuestionInfo';
import QuestionInfoModel from '../../model/QuestionInfo';

describe('Questions', () => {

  const questionList = [
    new QuestionInfoModel('hs7das6f7af', 'The hardest question ever'),
    new QuestionInfoModel('48a4f84k8c8', 'The easiest question ever')
  ]

  let questions;

  beforeEach(() => {
    questions = shallow(<Questions questions={questionList} />);
  });

  it('renders without crashing', () => {
    expect(questions.length).to.equal(1);
  });

  it('has a button to ask questions', () => {
    expect(questions.find(CreateQuestionButton)).to.have.length(1);
  });

  it('has a list of questions', () => {
    expect(questions.find(QuestionInfo)).to.have.length(2);
  });
});
