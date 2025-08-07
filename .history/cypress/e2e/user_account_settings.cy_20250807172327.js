describe("MakeYourJodi - User Account Settings  Page Checking ", () => {
  beforeEach(() => {
    cy.loginAndHandlePopup();
  });

  it(" Account Settings   ", () => {
    cy.wait(2000);
    cy.url().should("include", "/home");

    // 1. Check the main title
    cy.get(".top-1\\/2 > .text-2xl")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("Main Title:", text.trim());
      });

    // Account Settings
    // 1. Click user profile icon
    cy.get("#headlessui-menu-button-\\:r2\\: > .object-cover")
      .should("be.visible")
      .click();
    cy.wait(1000);

    cy.get('a[href="/setting"]')
      .should("have.text", "Account settings")
      .click();

    // 3. Check Account Settings Title
    cy.get(".md\\:items-center")
      .should("be.visible")
      .invoke("text")
      .then((titleText) => {
        cy.log("📝 Account Settings Title:", titleText.trim());
      });

    // 4. Title of Plans Section
    cy.get(".mb-24 > .mb-6")
      .should("be.visible")
      .invoke("text")
      .then((plansTitle) => {
        cy.log("📦 Plans Section Title:", plansTitle.trim());
      });

    // 5. Your Plan
    cy.get(".mb-2 > .font-bold")
      .should("contain.text", "Your Plan")
      .invoke("text")
      .then((label) => {
        cy.get(".mb-2 > .ml-1")
          .invoke("text")
          .then((planName) => {
            cy.log(`${label.trim()} ${planName.trim()}`);
          });
      });

    // 6. Expiry Date
    cy.get(".mb-7 > .font-bold")
      .should("contain.text", "Expiry Date")
      .invoke("text")
      .then((expiryLabel) => {
        cy.get(".mb-7 > .ml-1")
          .invoke("text")
          .then((expiryDate) => {
            cy.log(`${expiryLabel.trim()} ${expiryDate.trim()}`);
          });
      });

    // 7. Highlight the Education dropdown
    cy.get(".select__control")
      .should("be.visible")
      .invoke("css", "outline", "3px solid blue");

    cy.log("✅ Account and Plan Info Verified");
  });
});
