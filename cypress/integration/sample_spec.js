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
  it("Checks third box has been loaded with correct text", function() {
    cy.visit("http://localhost:3000/");
    cy.contains("Get ready...");
  });
});
