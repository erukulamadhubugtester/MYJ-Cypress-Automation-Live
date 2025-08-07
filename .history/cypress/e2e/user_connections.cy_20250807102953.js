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
    // 1. Click Connections link
    cy.log("➡️ Navigating to Connections page");
    cy.get('.lg\\:gap-8 > [href="/connect"]')
      .should("be.visible")
      .click();

    // 2. Wait for title and verify
    cy.get(".connections-title", { timeout: 10000 })
      .should("be.visible")
      .and("contain.text", "Connections");
    cy.log("✅ Connections page loaded with title verified");

    // Highlight title
    cy.get(".connections-title").highlight();

    // 3. Sent tab count check
    cy.get('.flex-wrap > :nth-child(1) > .cursor-pointer')
      .should("be.visible")
      .then(($sent) => {
        const sentText = $sent.text().trim();
        const sentCount = extractCount(sentText);
        cy.log(`📤 Sent Count: ${sentCount}`);
        expect(sentCount).to.be.a("number");
        cy.wrap($sent).highlight("Sent Tab");
      });

    // 4. Received tab count check
    cy.get('.flex-wrap > :nth-child(2) > .cursor-pointer')
      .should("be.visible")
      .then(($received) => {
        const receivedText = $received.text().trim();
        const receivedCount = extractCount(receivedText);
        cy.log(`📥 Received Count: ${receivedCount}`);
        expect(receivedCount).to.be.a("number");
        cy.wrap($received).highlight("Received Tab");
      });

    // 5. Connected tab count check
    cy.get(':nth-child(3) > .cursor-pointer')
      .should("be.visible")
      .then(($connected) => {
        const connectedText = $connected.text().trim();
        const connectedCount = extractCount(connectedText);
        cy.log(`🔗 Connected Count: ${connectedCount}`);
        expect(connectedCount).to.be.a("number");
        cy.wrap($connected).highlight("Connected Tab");
      });
  
  });
});
