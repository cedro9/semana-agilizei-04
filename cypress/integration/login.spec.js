/// <reference types="cypress" />

describe("Twitter Clone - Login", () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: "GET",
        hostname: "res.cloudinary.com",
      },
      {
        statusCode: 200,
        fixture: "cedro",
      }
    ).as("cloudinary");
  });
  
  it("Ao autênticar com acessos válidos, deve direcionar para o feed", () => {
    cy.login();
    cy.visit("/");
    cy.get("nav ul li").should("be.visible").and("have.length", 6);
  });
});
