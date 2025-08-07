describe("MakeYourJodi - User VIP Page Checking ", () => {
  beforeEach(() => {
    cy.loginAndHandlePopup();
  });

  it("VIP ", () => {
    cy.url().should("include", "/home");

    // 1. Check the main title
    cy.get(".top-1\\/2 > .text-2xl")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("Main Title:", text.trim());
      });

    // vip
   // 1. Highlight and click on VIP module
cy.get('.lg\\:gap-8 > [href="/vip"]')
  .should("be.visible")
  .invoke("css", "outline", "3px solid red")
  .click();

// 2. Wait for VIP Cart page
cy.url().should("include", "/vip");

// 3. Highlight and log "Basic" title
cy.get('.w-\\[4rem\\]')
  .should("be.visible")
  .invoke("css", "outline", "3px solid red")
  .invoke("text")
  .then((text) => {
    cy.log("📌 Basic Title:", text.trim());
  });

// 4. Highlight and log points under Basic

// Point 1
cy.get('.gap-10 > :nth-child(2) > .flex-col > :nth-child(1)')
  .should("be.visible")
  .invoke("css", "outline", "3px solid red")
  .invoke("text")
  .then((text) => {
    cy.log("🔹 Point 1:", text.trim());
  });

// Point 2
cy.get('.gap-10 > :nth-child(2) > .flex-col > :nth-child(2)')
  .should("be.visible")
  .invoke("css", "outline", "3px solid red")
  .invoke("text")
  .then((text) => {
    cy.log("🔹 Point 2:", text.trim());
  });

// Point 3
cy.get('.gap-10 > :nth-child(2) > .flex-col > :nth-child(3)')
  .should("be.visible")
  .invoke("css", "outline", "3px solid red")
  .invoke("text")
  .then((text) => {
    cy.log("🔹 Point 3:", text.trim());
  });

// Point 4
cy.get('.gap-10 > :nth-child(2) > .flex-col > :nth-child(4)')
  .should("be.visible")
  .invoke("css", "outline", "3px solid red")
  .invoke("text")
  .then((text) => {
    cy.log("🔹 Point 4:", text.trim());
  });

// Point 5
cy.get('.gap-10 > :nth-child(2) > .flex-col > :nth-child(5)')
  .should("be.visible")
  .invoke("css", "outline", "3px solid red")
  .invoke("text")
  .then((text) => {
    cy.log("🔹 Point 5:", text.trim());
  });

  });
});
