describe("MakeYourJodi - Login Menu UI Flow", () => {
  it("should show menu options and navigate to login page", () => {
    cy.visit("https://makeyourjodi.com/");

    cy.get(".container > .p-2").click(); // Click hamburger menu

    // Log all menu options (for debugging)
    cy.get(".block").then(($els) => {
      const menuTexts = [...$els].map((el) => el.innerText);
      cy.log("Menu options:", menuTexts);
    });
    // Wait for "Login" and "Create New Account" to be visible
    cy.contains("Login", { timeout: 10000 }).should("be.visible");
    cy.contains("Login").click(); // Click Login option
    // Confirm URL
    cy.url().should("include", "/login");

    cy.get(".form-control").type("6303481147"); // Step 1: Enter phone number
    cy.get("#password").type("Madhu878@"); // Step 2: Enter password
    cy.get(".submit-buttonlogin").click(); // Step 3: Click Continue


    // Wait for possible popup
    cy.wait(3000); // Optional wait if popup loads after some delay

    // Check if popup is displayed by checking the profile % text
    cy.get('body').then($body => {
      if ($body.find('.mt-6 > .text-2xl').length > 0) {
        // ✅ Popup is displayed

        // 1. Check % of profile text
        cy.get('.mt-6 > .text-2xl').should('be.visible').then($el => {
          cy.log('Profile completion: ' + $el.text());
        });

        // 2. Check if % circle is visible
        cy.get('.bg-white > .items-center').should('be.visible');

        // 3. Print guidance text
        cy.get('.mt-6 > .text-gray-600').should('be.visible').then($text => {
          cy.log('Profile Tip: ' + $text.text());
        });

        // 4. Check upload profile picture button
        cy.get('.px-5').should('be.visible');

        // 5. Check update profile button
        cy.get('.flex > .bg-\\[\\#9A0C81\\]').should('be.visible');

        // 6. Check skip button
        cy.get('.mt-6 > .flex > .border').should('be.visible');

        // 7. Click cancel icon to close popup
        cy.get('.top-4').click();
      } else {
        // ❌ Popup not displayed - log and continue
        cy.log('Profile completion popup not displayed.');
      }
    });
  });
});
