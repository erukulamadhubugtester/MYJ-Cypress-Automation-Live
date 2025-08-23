describe("MakeYourJodi - User Connections Page Checking ", () => {
  beforeEach(() => {
    cy.loginAndHandlePopup();
  });

  it("Connections  ", () => {
      cy.wait(2000);
    cy.xpath("//a[text()='Dashboard']").click();
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
    cy.log("🚀 Navigating to Connections Page");

    // 1. Click on Connections link
    cy.get('.lg\\:gap-8 > [href="/connect"]').should("be.visible").click();

    // 2. Wait for the page and validate title
    cy.get(".connections-title", { timeout: 10000 })
      .should("be.visible")
      .invoke("css", "outline", "2px solid green")
      .invoke("text")
      .then((titleText) => {
        const trimmedTitle = titleText.trim();
        cy.log("📄 Connections Page Title:", trimmedTitle);
        expect(trimmedTitle).to.contain("Connections"); // ✅ Assert
      });

    // 1. Click on Received tab and highlight
    cy.get(".flex-wrap > :nth-child(2) > .cursor-pointer")
      .should("be.visible")
      .invoke("css", "outline", "2px solid blue")
      .click();
    cy.wait(2000);
    cy.log("📥 Clicked on 'Received' Connections tab");

    // 2. Click on Connected tab and highlight
    cy.get(".flex-wrap > :nth-child(3) > .cursor-pointer")
      .should("be.visible")
      .invoke("css", "outline", "2px solid green")
      .click();
    cy.wait(2000);
    cy.log("🔗 Clicked on 'Connected' tab");

    // 3. Click on Sent tab and highlight
    cy.get(".flex-wrap > :nth-child(1) > .cursor-pointer")
      .should("be.visible")
      .invoke("css", "outline", "2px solid orange")
      .click();
    cy.wait(2000);
    cy.log("📤 Clicked on 'Sent' tab");

    cy.log("✅ All Connection Stats Verified");
  });
});
