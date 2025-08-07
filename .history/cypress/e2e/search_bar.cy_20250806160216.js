describe("MakeYourJodi - User Search Page Checking ", () => {
  beforeEach(() => {
    cy.loginAndHandlePopup();
  });

  it("Search ", () => {
    cy.url().should("include", "/home");

    // 1. Check the main title
    cy.get(".top-1\\/2 > .text-2xl")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("Main Title:", text.trim());
      });

    // search Bar
    const location = "India";
    let profileIdText = "";
    let profileNameText = "";

    // 1. Click on search icon
    cy.get(".text-pink-800 > img").click();

    // 2. Type location in search input
    cy.get(".lg\\:gap-8 > div.items-center > .transition-all")
      .should("be.visible")
      .clear()
      .type(location, { delay: 100 });

    // 3. Click search again
    cy.get(".text-pink-800 > img").click();

    // 4. Wait for at least one profile to be visible
    cy.get(":nth-child(1) > .gap-8 > .w-\\[14rem\\]", {
      timeout: 10000,
    }).should("be.visible");

    // 5. Click the first profile card
    cy.get(":nth-child(1) > .gap-8 > .w-\\[14rem\\]").click();

    //  click on link home page
    // 1. Click on the site logo
    cy.get(".flex-shrink-0 > a > img").should("be.visible").click();

    // 2. Wait for homepage to be displayed — adjust selector based on real home page element
    cy.contains("h2", "Profiles which match your preferences", {
      timeout: 10000,
    }).should("be.visible");

    // Optional: log for confirmation
    cy.log("✅ Home page loaded after clicking site logo");
  });
});
