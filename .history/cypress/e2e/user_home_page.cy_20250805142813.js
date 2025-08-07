describe("MakeYourJodi - User Home Page checking ", () => {
  beforeEach(() => {
    cy.loginAndHandlePopup();
  });

  it("should land on homepage after login", () => {
    cy.url().should("include", "/home");
  });

  it("Should validate all homepage elements correctly", () => {
    // 1. Check and print main title text
    cy.get(".top-1\\/2 > .text-2xl")
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log("Main Title:", text.trim());
      });

    // 2. Print the text from element with class .text-xl
    cy.get(".text-xl")
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log("Text-xl Element:", text.trim());
      });

    // 3. Check if age range input is displayed
    cy.get(".gap-4 > .flex-col > .w-full")
      .should("be.visible")
      .then(() => cy.log("Age range input is visible"));

    // 4. Check if Education dropdown is displayed
    cy.get(".select__control")
      .should("be.visible")
      .then(() => cy.log("Education dropdown is visible"));

    // 5. Check if Enter Profession input is displayed
    cy.get(".gap-4 > .relative > .w-full")
      .should("be.visible")
      .then(() => cy.log("Profession input is visible"));

    // 6. Check if "Find" button is displayed
    cy.get(".lg\\:w-\\[10rem\\]")
      .should("be.visible")
      .then(() => cy.log('"Find" button is visible'));

    // 7. Check if black text title is displayed
    cy.get(".mb-24 > .text-black")
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log("Black Title:", text.trim());
      });

    // 8. Check if VIP Users title is displayed
    cy.get(".flex-col > .text-\\[\\#AB1D79\\]")
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log("VIP Users Title:", text.trim());
      });

    // 9. Check if VIP images are displayed
    cy.get(".vip-banner > a > img")
      .should("be.visible")
      .then(() => cy.log("VIP image is visible"));
  });
});
