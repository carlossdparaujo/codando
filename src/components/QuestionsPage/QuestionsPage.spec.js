import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import QuestionsPage from './QuestionsPage';

describe('QuestionsPage', () => {
  it('renders without crashing', () => {
    const questionsPage = shallow(<QuestionsPage />);
    expect(questionsPage.length).to.equal(1);
  });
});
