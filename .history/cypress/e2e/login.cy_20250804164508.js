describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://makeyourjodi.com/");
    cy.get('.gap-2 > .w-auto');
    cy.get('.container > .p-2');
    cy.get('.text-xl')
  });
});
