import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import QuestionInfo from './QuestionInfo';
import QuestionInfoModel from '../../../../model/QuestionInfo';

describe('QuestionInfo', () => {

  const questionTitle = 'This title is AWESOME!';
  const questionInfo = new QuestionInfoModel('tdahasy7q3', questionTitle);
  let question;

  beforeEach(() => {
    question = shallow(<QuestionInfo info={questionInfo} />);
  });

  it('renders without crashing', () => {
    expect(question.length).to.equal(1);
  });

  it('displays question title', () => {
    const questionTitle = question.find('#title').text();
    expect(questionTitle).to.equal(questionTitle);
  });
});
