
import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react';

describe('Quiz Component Tests', () => {
  beforeEach(() => { 
    cy.intercept({
      method: 'GET',
      url: '/api/questions/random',
    }, {
      fixture: 'questions.json',
      statusCode: 200,
     }).as('getQuestions');
  }); 
  it('should render the start button', () => {
    // Mount the component
    mount(<Quiz />);
    
    // Check that the start button is visible
    cy.get('button').contains('Start Quiz').should('be.visible');
  });

  it('should start the quiz when start button is clicked', () => {
    mount(<Quiz />);
    
    // Click the start button
    cy.get('button').contains('Start Quiz').click();
    
    // Ensure the first question is displayed
    cy.get('h2').should('not.be.empty');
  });

  it('should show the next question after an answer is clicked', () => {
    mount(<Quiz />);
    
    // Start the quiz
    cy.get('button').contains('Start Quiz').click();

    // Simulate clicking an answer
    cy.get('button').contains('1').click();
    
    // Ensure the next question is displayed
    cy.get('h2').should('not.be.empty');
  });

  it('should display the score after the quiz is completed', () => {
    mount(<Quiz />);

    // Start the quiz
    cy.get('button').contains('Start Quiz').click();
    
    // Answer all questions
    cy.get('button').contains('1').click();  // Answer first question

    // Ensure the score is displayed
    cy.get('h2').contains('Quiz Completed').should('be.visible');
    cy.get('.alert-success').should('contain', 'Your score');
  });
});
