import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import QuestionInfo from './QuestionInfo';

describe('QuestionInfo', () => {
  it('renders without crashing', () => {
    const question = shallow(<QuestionInfo />);
    expect(question.length).to.equal(1);
  });
});
