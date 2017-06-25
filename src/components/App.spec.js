import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const app = shallow(<App />);
    expect(app.length).to.equal(1);
  });
});
