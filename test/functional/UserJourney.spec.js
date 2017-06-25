import { browser } from 'webdriverio';
import { expect } from 'chai';

describe.skip('User Journey', () => {
  it('adds and lists question', () => {
    browser.url('http://localhost:3000')
      .timeouts('implicit', 1000);

    let questions = browser.elements('#question');

    expect(numberOfQuestions).to.have.length(0);

    browser.click('#askQuestion');

    const askQuestionUrl = browser.getUrl();

    expect(askQuestionUrl).to.equal('http://localhost:3000/ask');

    browser.selectByValue('#account', 'Latam')
      .setValue('#questionTitle', 'The hardest question ever')
      .setValue('#questionBody', 'Who came first, the chicken, or the egg?')
      .click('#submitQuestion')
      .timeouts('implicit', 1000);

    questions = browser.elements('#question');

    expect(numberOfQuestions).to.have.length(1);
  });
});
