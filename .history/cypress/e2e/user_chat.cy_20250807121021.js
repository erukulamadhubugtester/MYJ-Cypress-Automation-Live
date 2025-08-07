describe("MakeYourJodi - User Chat Page Checking ", () => {
  beforeEach(() => {
    cy.loginAndHandlePopup();
  });

  it("Chat  ", () => {
    cy.url().should("include", "/home");

    // 1. Check the main title
    cy.get(".top-1\\/2 > .text-2xl")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("Main Title:", text.trim());
      });

    // connections
 
  });
});
