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
    // 1. Click on search icon
    cy.get(".text-pink-800 > img").click();

    // 2. Type "India" in the location search input
    const location = "India";
    if (!location) throw new Error("Search location is empty");

    cy.get(".lg\\:gap-8 > div.items-center > .transition-all")
      .should("be.visible")
      .clear()
      .type(location, { delay: 100 });

    // 3. Click search icon again
    cy.get(".text-pink-800 > img").click();

    // 4. Wait for at least one profile card to appear
    cy.get(":nth-child(1) > .gap-8 > .w-\\[14rem\\]", {
      timeout: 10000,
    }).should("be.visible");

    // 5. Click the first profile card
    cy.get(":nth-child(1) > .gap-8 > .w-\\[14rem\\]").click();

    // 6. Capture profile ID and Name into local vars
    cy.get(".h-7", { timeout: 10000 })
      .should("be.visible")
      .invoke("text")
      .then((rawId) => {
        const profileIdText = rawId.trim();
        expect(profileIdText).to.not.be.empty;
        cy.log("Profile ID: " + profileIdText);

        // Continue only after ID is captured
        cy.get(".user-profile-h3", { timeout: 10000 })
          .should("be.visible")
          .invoke("text")
          .then((rawName) => {
            const profileNameText = rawName.trim();
            expect(profileNameText).to.not.be.empty;
            cy.log("Profile Name: " + profileNameText);

            // 7. Click on search icon to go back
            cy.get(".text-pink-800 > img").click();

            // 8. Search by captured profile ID
            cy.get(".lg\\:gap-8 > div.items-center > .transition-all")
              .should("be.visible")
              .clear()
              .type(profileIdText, { delay: 100 });

            cy.get(".text-pink-800 > img").click();

            // 9. Verify profile name matches
            cy.get(".user-profile-h3", { timeout: 10000 })
              .should("be.visible")
              .invoke("text")
              .should("contain", profileNameText);
          });
      });
  });
});
