
# Test-Suite

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Running the Application](#running-the-application)
5. [Cypress Testing Setup](#cypress-testing-setup)
6. [Running Tests](#running-tests)
7. [Important Files](#important-files)
8. [Walkthrough Video](#walkthrough-video)
9. [Summary of Work Done](#summary-of-work-done)
10. [License](#license)

## Project Overview

This project involves setting up a test suite for the Tech Quiz application. The application, built on the MERN stack (MongoDB, Express.js, React, Node.js), allows users to take a quiz and view their score. The goal of this project was to implement testing using Cypress, with both component and end-to-end tests.

## Features

- Users can take a quiz with ten random tech-related questions.
- Users can view their score after completing the quiz.
- Users have the option to retake the quiz.

## Installation

1. Clone the repository.
2. Install dependencies:

    ```bash
    npm run install
    ```

## Running the Application

To run the backend and frontend:

```bash
npm run start:dev
```

Or run them individually:

- **Backend**: `npm run server:dev`
- **Frontend**: `npm run client:dev`

## Cypress Testing Setup

The Cypress configuration is set up under the `cypress` directory with the following structure:

```plaintext
cypress/
├── component/          // Component tests
│   └── Quiz.cy.jsx     // Quiz component test
├── e2e/                // End-to-end tests
│   └── quiz.cy.js      // End-to-end test for the Tech Quiz
├── fixtures/           // Test data
│   └── questions.json  // Mock data for testing
└── support/            // Cypress support files
    └── e2e.js          // Custom commands or configuration
```

### Running Tests

1. **Open Cypress** for interactive testing:

    ```bash
    npm run cypress
    ```

2. **Run Cypress in headless mode**:

    ```bash
    npm run test
    ```

## Important Files

- **`Quiz.cy.jsx`**: Component test for the Quiz component.
- **`quiz.cy.js`**: End-to-end test for the quiz flow.
- **`cypress.config.ts`**: Cypress configuration file.
- **`tsconfig.json`** (in `cypress` directory): TypeScript configuration for Cypress.

## Walkthrough Video

[Link to Video Demonstration](https://drive.google.com/file/d/1sg36filapAFqf1HA8N_IncSIXEfYXkK3/view)

## Summary of Work Done

1. **Set up Cypress** for component and end-to-end testing.
2. **Configured Cypress** with support files, component and e2e directories, and `tsconfig.json` for compatibility.
3. **Created Component Tests**: Tested the Quiz component for rendering and functionality.
4. **Created End-to-End Tests**: Simulated a user taking the quiz, answering questions, and viewing the score.
5. **Verified Functionality**: Ensured both frontend and backend run properly to allow complete testing.

## License

This project is licensed under the MIT License.
