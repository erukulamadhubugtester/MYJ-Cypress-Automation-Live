describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://makeyourjodi.com/");
    cy.get('.gap-2 > .w-auto')
  });
});
