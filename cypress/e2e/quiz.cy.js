describe("Tech Quiz End-to-End Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should start the quiz when Start Quiz button is clicked", () => {
    cy.get("button").contains("Start Quiz").click();
    cy.get("h2").should("not.be.empty");
  });

  it("should allow the user to answer all questions and see the final score", () => {
    cy.get("button").contains("Start Quiz").click();
    for (let i = 0; i < 10; i++) {
      cy.get("button").contains("1").click();
    }
    cy.get("h2").contains("Quiz Completed").should("be.visible");
    cy.get(".alert-success").should("contain", "Your score");
  });

  it("should allow the user to start a new quiz after completing the first one", () => {
    cy.get("button").contains("Start Quiz").click();

    for (let i = 0; i < 10; i++) {
      cy.get("button").contains("1").click();
    }
    cy.get("button").contains("Take New Quiz").click();
    cy.get("h2").should("not.be.empty");
  });
});
