describe("MakeYourJodi - User Notifications  Page Checking ", () => {
  beforeEach(() => {
    cy.loginAndHandlePopup();
  });

  it(" Notifications  ", () => {
      cy.wait(2000);
    cy.xpath("//a[text()='Dashboard']").click();
    cy.url().should("include", "/home");

    // 1. Check the main title
    cy.get(".top-1\\/2 > .text-2xl")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("Main Title:", text.trim());
      });

    // Notification
    cy.log("🔔 Clicking on Notification Icon");

    // 1. Click on the Notification icon
    cy.get(":nth-child(6) > .relative > .absolute")
      .should("be.visible")
      .click();

    cy.log("❌ Closing Notification Popup");

    // 2. Click on the Cancel (X) icon inside the notification popup
    cy.get(".flex > .text-gray-500 > img").should("be.visible").click();

    cy.log("✅ Notification popup opened and closed successfully");
  });
});
