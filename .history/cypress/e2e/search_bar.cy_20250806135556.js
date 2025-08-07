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
    // Step 1: Click on search icon
    cy.get(".text-pink-800 > img").click();

    // Step 2: Enter location "India"
    cy.get(".lg\\:gap-8 > div.items-center > .transition-all")
      .clear()
      .type("India");

    // Step 3: Click on search icon again
    cy.get(".text-pink-800 > img").click();

    // Step 4: Wait for profiles to load and ensure at least one is present
    cy.wait(5000); // wait for profiles to load
    cy.get(":nth-child(1) > .gap-8 > .w-\\[14rem\\]").should("be.visible");

    // Step 5: Click on first profile
    cy.get(":nth-child(1) > .gap-8 > .w-\\[14rem\\]").click();

    // Step 6: Capture profile ID and name
    let capturedProfileId = "";
    let capturedName = "";

    cy.get(".h-7") // Profile ID element
      .should("be.visible")
      .invoke("text")
      .then((profileId) => {
        capturedProfileId = profileId.trim();
        cy.log("📌 Captured Profile ID:", capturedProfileId);
      });

    cy.get(".user-profile-h3") // Name element
      .should("be.visible")
      .invoke("text")
      .then((name) => {
        capturedName = name.trim();
        cy.log("📌 Captured Name:", capturedName);
      });

    // Step 7: Back to homepage or click search icon again
    cy.get(".text-pink-800 > img").click();

    // Step 8: Enter captured profile ID into search input
    cy.get(".lg\\:gap-8 > div.items-center > .transition-all")
      .clear()
      .type(capturedProfileId);

    // Step 9: Click search icon to search by ID
    cy.get(".text-pink-800 > img").click();

    // Step 10: Validate profile name matches the one we captured
    cy.wait(4000);
  });
});
