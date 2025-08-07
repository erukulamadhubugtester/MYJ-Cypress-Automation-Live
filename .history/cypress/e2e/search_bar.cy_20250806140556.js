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
    if (location) {
      cy.get(".lg\\:gap-8 > div.items-center > .transition-all")
        .should("be.visible")
        .clear()
        .type(location, { delay: 100 });
    } else {
      throw new Error("Search location is empty");
    }

    // 3. Click search again
    cy.get(".text-pink-800 > img").click();

    // Step 4: Wait for profiles to load and ensure at least one is present
    cy.wait(5000); // wait for profiles to load
    cy.get(":nth-child(1) > .gap-8 > .w-\\[14rem\\]").should("be.visible");

    // Step 5: Click on first profile
    cy.get(":nth-child(1) > .gap-8 > .w-\\[14rem\\]").click();

    // 6. Capture profile ID
    cy.get(".h-7")
      .invoke("text")
      .then((profileId) => {
        cy.log("Profile ID: " + profileId.trim());

        // 7. Capture name
        cy.get(".user-profile-h3")
          .invoke("text")
          .then((profileName) => {
            cy.log("Profile Name: " + profileName.trim());

            // 8. Go back to search icon
            cy.get(".text-pink-800 > img").click();

            // 9. Enter profile ID and search
            if (profileId.trim()) {
              cy.get(".lg\\:gap-8 > div.items-center > .transition-all")
                .clear()
                .type(profileId.trim(), { delay: 100 });
              cy.get(".text-pink-800 > img").click();
            }

            // 10. Verify that same name is shown
            cy.get(".user-profile-h3")
              .invoke("text")
              .should("contain", profileName.trim());
          });
      });
  });
});
