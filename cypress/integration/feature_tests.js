describe("Main page open test", function() {
  it("Visits the page", function() {
    cy.visit("http://localhost:3000/");
    cy.contains("Some people");
  });
});

describe("Instructions test", function() {
  it("Checks first box has been loaded with correct text", function() {
    cy.visit("http://localhost:3000/");
    cy.contains("Some people drink alcohol because it helps them relax. If you feel the need to relax, try square breathing instead.");
  });
  it("Checks second box has been loaded with correct text", function() {
    cy.visit("http://localhost:3000/");
    cy.contains("Square breathing is a simple relaxation technique that promotes measured, mindful breathing. The idea is:");
  });
  it("Checks the timer box has been loaded with correct text", function() {
    cy.visit("http://localhost:3000/");
    cy.contains("Get ready...");
  });
});

describe("Timer test", function() {
  it("Checks timer box contains instructions", function() {
    cy.visit("http://localhost:3000/");
    cy.wait(13000)
    cy.contains("Breathe in");
    cy.wait(4000)
    cy.contains("Hold");
    cy.wait(4000)
    cy.contains("Breathe out");
    cy.wait(4000)
    cy.contains("Hold");
  });
  it("Checks timer box contains stage completed message", function() {
    cy.visit("http://localhost:3000/");
    cy.wait(29000)
    cy.contains("Stage 1 completed");
  });
});
