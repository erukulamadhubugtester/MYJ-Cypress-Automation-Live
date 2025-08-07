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

    // 2. Type location in the search input
    if (!location) throw new Error("Search location is empty");

    cy.get(".lg\\:gap-8 > div.items-center > .transition-all")
      .should("be.visible")
      .clear()
      .type(location, { delay: 100 });

    // 3. Click search again
    cy.get(".text-pink-800 > img").click();

    // 4. Wait for profiles to load
    cy.get(":nth-child(1) > .gap-8 > .w-\\[14rem\\]", {
      timeout: 10000,
    }).should("be.visible");

    // 5. Click the first profile
    cy.get(":nth-child(1) > .gap-8 > .w-\\[14rem\\]").click();

    // 6. Capture Profile ID
    // 6. Capture Profile ID using text match
cy.contains('h2', 'User ID:')
  .should('be.visible')
  .invoke('text')
  .then((text) => {
    const profileIdText = text.replace('User ID: ', '').trim();
    expect(profileIdText).to.not.be.empty;
    cy.log('✅ Captured User ID:', profileIdText);

    // You can now continue using profileIdText
  });


    // 7. Capture Profile Name
    cy.get(".user-profile-h3", { timeout: 10000 })
      .should("exist")
      .should("be.visible")
      .invoke("text")
      .then((rawName) => {
        profileNameText = rawName.trim();
        expect(profileNameText).to.not.be.empty;
        cy.log("Profile Name: " + profileNameText);
      });

    // 8. Click search icon again to go back
    cy.get(".text-pink-800 > img").click();

    // 9. Search using profile ID
    cy.get(".lg\\:gap-8 > div.items-center > .transition-all")
      .should("be.visible")
      .clear()
      .type(profileIdText, { delay: 100 });

    // 10. Click search icon again
    cy.get(".text-pink-800 > img").click();

    // 11. Verify profile name matches
    cy.get(".user-profile-h3", { timeout: 10000 })
      .should("exist")
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        const nameOnSearch = text.trim();
        expect(nameOnSearch).to.contain(profileNameText);
        cy.log("Verified name after search: " + nameOnSearch);
      });

    // 12. Optional: Capture notification if shown
    cy.get(".absolute > .z-20").then(($popup) => {
      if ($popup.is(":visible")) {
        const popupText = $popup.text().trim();
        cy.log("Popup text: " + popupText);
      }
    });
  });
});
