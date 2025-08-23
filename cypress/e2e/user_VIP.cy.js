describe("MakeYourJodi - User VIP Page Checking ", () => {
  beforeEach(() => {
    cy.loginAndHandlePopup();
  });

  it("VIP ", () => {
      cy.wait(2000);
    cy.xpath("//a[text()='Dashboard']").click();
    cy.url().should("include", "/home");

    // 1. Check the main title

    cy.wait(2000);
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
    cy.get(".w-\\[4rem\\]")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("📌 Basic Title:", text.trim());
      });

    // 4. Highlight and log points under Basic

    // Point 1
    cy.get(".gap-10 > :nth-child(2) > .flex-col > :nth-child(1)")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("🔹 Point 1:", text.trim());
      });

    // Point 2
    cy.get(".gap-10 > :nth-child(2) > .flex-col > :nth-child(2)")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("🔹 Point 2:", text.trim());
      });

    // Point 3
    cy.get(".gap-10 > :nth-child(2) > .flex-col > :nth-child(3)")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("🔹 Point 3:", text.trim());
      });

    // Point 4
    cy.get(".gap-10 > :nth-child(2) > .flex-col > :nth-child(4)")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("🔹 Point 4:", text.trim());
      });

    // Point 5
    cy.get(".gap-10 > :nth-child(2) > .flex-col > :nth-child(5)")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("🔹 Point 5:", text.trim());
      });

    // silver

    // 1. Highlight the logo icon
    cy.get(".justify-center > .flex > .w-auto")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red");

    // 2. Highlight and log Silver title
    cy.get(".w-\\[6rem\\]")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("💠 Silver Title:", text.trim());
      });

    // 3. Highlight and log Silver points

    // Point 1
    cy.get(":nth-child(2) > :nth-child(2) > .flex-col > :nth-child(1)")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("🔹 Silver Point 1:", text.trim());
      });

    // Point 2
    cy.get(":nth-child(2) > :nth-child(2) > .flex-col > :nth-child(3)")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("🔹 Silver Point 2:", text.trim());
      });

    // Point 3
    cy.get(":nth-child(2) > :nth-child(2) > .flex-col > :nth-child(4)")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("🔹 Silver Point 3:", text.trim());
      });

    // Point 4
    cy.get(":nth-child(2) > :nth-child(2) > .flex-col > :nth-child(5)")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("🔹 Silver Point 4:", text.trim());
      });

    // Point 5
    cy.get(".flex-col > :nth-child(6)")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("🔹 Silver Point 5:", text.trim());
      });

    // Point 6
    cy.get(".flex-col > :nth-child(7)")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("🔹 Silver Point 6:", text.trim());
      });

    // 4. Check if the "Upgrade" button is visible and highlight it
    cy.get(".-mt-5 > .flex > .px-5")
      .should("be.visible")
      .invoke("css", "outline", "3px solid green")
      .invoke("text")
      .then((text) => {
        cy.log("⬆️ Upgrade Button Text:", text.trim());
      });

    // 1. Click on Upgrade button and wait for Cart Page
    cy.get(".-mt-5 > .flex > .px-5").should("be.visible").click();
    cy.wait(2000); // wait for cart page transition

    // 2. Check Cart Page container is visible
    cy.get(
      ".min-h-screen > .shadow-\\[0px_0px_14px_0px_rgba\\(0\\,_0\\,_0\\,_0\\.25\\)\\]"
    )
      .should("be.visible")
      .invoke("css", "outline", "3px solid red");

    // 3. Check "Payment Frequency" title
    cy.get(".sm\\:text-xl")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("💰 Payment Frequency Title:", text.trim());
      });

    // 3a. One Month Plan block
    cy.get(".bg-pink-50")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("📦 One Month Plan:", text.trim());
      });

    // 3b. Four Month Plan block
    cy.get(".space-y-2 > :nth-child(2)")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("📦 Four Month Plan:", text.trim());
      });

    // 4. Payment Summary section
    cy.get(".pt-4 > div > .text-xl")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("🧾 Payment Summary Title:", text.trim());
      });

    // 5. Check if PayPal button is displayed
    cy.get("div.max-w-\\[30rem\\] > .max-w-\\[30rem\\]")
      .should("be.visible")
      .invoke("css", "outline", "3px solid green")
      .invoke("text")
      .then((text) => {
        cy.log("💳 PayPal Button Found:", text.trim());
      });
  });
});
