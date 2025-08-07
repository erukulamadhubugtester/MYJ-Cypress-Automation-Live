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

    // chat
    cy.log("💬 Navigating to Chat Page");

    // 1. Click on Chat link and wait for page to load
    cy.get('.lg\\:gap-8 > [href="/chat"]').should("be.visible").click();

    cy.url().should("include", "/chat");
    cy.wait(2000); // Optional wait if loading time needed

    // 2. Check if text (e.g., Chat Title) is displayed
    cy.get(".justify-between > .flex > .text-\\[\\#AB1D79\\]")
      .should("be.visible")
      .invoke("css", "outline", "2px solid green")
      .invoke("text")
      .then((text) => cy.log("💬 Chat Title Text:", text.trim()));

    // 3. Verify Search box is visible
    cy.get(".relative > .rounded-md")
      .should("be.visible")
      .invoke("css", "outline", "2px solid blue")
      .then(() => cy.log("🔍 Search box is visible"));

    // 4. Verify 3-dot menu icon is displayed
    cy.get(".transition > .w-6")
      .should("be.visible")
      .invoke("css", "outline", "2px solid purple")
      .then(() => cy.log("⚙️ 3-dot menu icon is visible"));

    // 5. Check if middle page layout is rendered
    cy.get(".lg\\:mt-52 > .flex")
      .should("be.visible")
      .invoke("css", "outline", "2px solid orange")
      .then(() => cy.log("📄 Chat middle page content is visible"));

    cy.log("✅ Chat Page UI elements verified");
  });
});
