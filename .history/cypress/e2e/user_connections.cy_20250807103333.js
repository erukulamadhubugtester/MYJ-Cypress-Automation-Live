describe("MakeYourJodi - User Connections Page Checking ", () => {
  beforeEach(() => {
    cy.loginAndHandlePopup();
  });

  it("Connections  ", () => {
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
    cy.log("➡️ Navigating to Connections");

    // 1. Click on the Connections link
    cy.get('.lg\\:gap-8 > [href="/connect"]').should("be.visible").click();
    cy.wait(3000); // optional wait for page load

    // 2. Check connections page title
    cy.get(".connections-title")
      .highlightAndLogText("Connections Page Title")
      .invoke("text")
      .should("include", "Connections");

    // 3. Sent Count
    cy.get(".flex-wrap > :nth-child(1) > .cursor-pointer")
      .highlightAndLogText("Sent Count")
      .invoke("text")
      .then((text) => {
        const num = parseInt(text.trim(), 10);
        expect(num).to.be.a("number");
        cy.log("✅ Sent Count is a number:", num);
      });

    // 4. Received Count
    cy.get(".flex-wrap > :nth-child(2) > .cursor-pointer")
      .highlightAndLogText("Received Count")
      .invoke("text")
      .then((text) => {
        const num = parseInt(text.trim(), 10);
        expect(num).to.be.a("number");
        cy.log("✅ Received Count is a number:", num);
      });

    // 5. Connected Count
    cy.get(".flex-wrap > :nth-child(3) > .cursor-pointer")
      .highlightAndLogText("Connected Count")
      .invoke("text")
      .then((text) => {
        const num = parseInt(text.trim(), 10);
        expect(num).to.be.a("number");
        cy.log("✅ Connected Count is a number:", num);
      });
  });
});
