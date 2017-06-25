import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import CreateQuestionButton from './CreateQuestionButton';

describe('CreateQuestionButton', () => {
  it('renders without crashing', () => {
    const button = shallow(<CreateQuestionButton />);
    expect(button.length).to.equal(1);
  });
});
