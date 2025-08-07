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

  // 3. Click search again
  cy.get(".text-pink-800 > img").click();

  // 4. Wait for profiles to load and ensure at least one is present
  cy.get(":nth-child(1) > .gap-8 > .w-\\[14rem\\]", { timeout: 10000 })
    .should("be.visible");

  // 5. Click on first profile
  cy.get(":nth-child(1) > .gap-8 > .w-\\[14rem\\]").click();

  // 6. Capture profile ID and Name
  let profileIdText = "";
  let profileNameText = "";

  cy.get(".h-7", { timeout: 10000 })
    .should("be.visible")
    .invoke("text")
    .then((profileId) => {
      profileIdText = profileId.trim();
      expect(profileIdText).to.not.be.empty;
      cy.log("Profile ID: " + profileIdText);
    });

  cy.get(".user-profile-h3", { timeout: 10000 })
    .should("be.visible")
    .invoke("text")
    .then((profileName) => {
      profileNameText = profileName.trim();
      expect(profileNameText).to.not.be.empty;
      cy.log("Profile Name: " + profileNameText);
    })
    .then(() => {
      // 7. Go back to search icon
      cy.get(".text-pink-800 > img").click();

      // 8. Type profile ID and search
      cy.get(".lg\\:gap-8 > div.items-center > .transition-all")
        .should("be.visible")
        .clear()
        .type(profileIdText, { delay: 100 });

      cy.get(".text-pink-800 > img").click();

      // 9. Verify profile name is same
      cy.get(".user-profile-h3", { timeout: 10000 })
        .should("be.visible")
        .invoke("text")
        .should("contain", profileNameText);
          });
      });
  });
});
