describe("To verify home page is working", () => {
  it("To verify homepage has heading on it", () => {
    cy.visit("http://localhost:3000");
    cy.get("#Achoo").should("contain", "Achoo!");
  });
  it("To verify homepage has welcome title on it", () => {
    cy.visit("http://localhost:3000");
    cy.get("#homepageheading").should("contain", "Achoo!");
  });
});
