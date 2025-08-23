describe("MakeYourJodi - User Home Page checking ", () => {
  beforeEach(() => {
    cy.loginAndHandlePopup();
  });

  it("should land on homepage after login", () => {
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

    // 2. Check and log the text-xl content
    cy.get(".text-xl")
      .should("be.visible")
      .invoke("css", "outline", "3px solid orange")
      .invoke("text")
      .then((text) => {
        cy.log("Sub Title:", text.trim());
      });

    // 3. Check if age dropdown is displayed
    cy.get(".gap-4 > .flex-col > .w-full")
      .should("be.visible")
      .invoke("css", "outline", "3px solid green");

    // 4. Check education dropdown
    cy.get(".select__control")
      .should("be.visible")
      .invoke("css", "outline", "3px solid blue");

    // 5. Check profession input
    cy.get(".gap-4 > .relative > .w-full")
      .should("be.visible")
      .invoke("css", "outline", "3px solid purple");

    // 6. Check if Find button is displayed
    cy.get(".lg\\:w-\\[10rem\\]")
      .should("be.visible")
      .invoke("css", "outline", "3px solid brown");

    // 7. Check the bottom black title text
    cy.get(".mb-24 > .text-black")
      .should("be.visible")
      .invoke("css", "outline", "3px solid magenta")
      .invoke("text")
      .then((text) => {
        cy.log("Bottom Title:", text.trim());
      });

    // 8. Check VIPUsers title
    cy.get(":nth-child(3) > .mb-24 > .text-black")
      .should("be.visible")
      .invoke("css", "outline", "3px solid teal")
      .invoke("text")
      .then((text) => {
        cy.log("VIP Title:", text.trim());
      });

    // removed
    // 9. Check VIP image is displayed
    // cy.get(".vip-banner > a > img")
    //   .should("be.visible")
    //   .invoke("css", "outline", "3px solid gold");

    // 'should highlight and verify footer logo, social icons, and text'

    // 1. Check logo is displayed
    cy.get(".w-\\[200px\\]")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red");

    // 2. Check "Follow us on :" text
    cy.contains(".mb-2", "Follow us on")
      .should("be.visible")
      .invoke("css", "outline", "3px solid orange");

    // 3. Check LinkedIn icon
    cy.get(
      '[href="https://www.linkedin.com/showcase/make-your-jodi/about/?viewAsMember=true"] > .h-\\[30px\\]'
    )
      .should("be.visible")
      .invoke("css", "outline", "3px solid #0077B5"); // LinkedIn Blue

    // 4. Check Facebook icon
    cy.get(
      '[href="https://www.facebook.com/people/Make-Your-Jodi/61577330596796/?sk=about"] > .h-\\[30px\\]'
    )
      .should("be.visible")
      .invoke("css", "outline", "3px solid #1877F2"); // Facebook Blue

    // 5. Check Instagram icon
    cy.get(
      '[href="https://www.instagram.com/makeyourjodi.com_?igsh=MXVja2JkaWF2YXhobw=="] > .h-\\[30px\\]'
    )
      .should("be.visible")
      .invoke("css", "outline", "3px solid #C13584"); // Instagram Pink

    // 6. Check Twitter/X icon
    cy.get('[href="https://x.com/MakeYourJodi"] > .h-\\[30px\\]')
      .should("be.visible")
      .invoke("css", "outline", "3px solid #000000"); // X black

    // 7. Check YouTube icon
    cy.get(".h-\\[50px\\]")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red"); // YouTube Red

    // Title: Quick links
    cy.get(".sm\\:flex-row > :nth-child(1) > .font-semibold")
      .should("be.visible")
      .invoke("css", "outline", "3px solid purple")
      .invoke("text")
      .then((text) => cy.log("Quick Links Title:", text.trim()));

    // a. Home link
    cy.get(":nth-child(1) > .mt-4 > :nth-child(1) > .transition-all")
      .should("be.visible")
      .invoke("css", "outline", "2px solid red")
      .invoke("text")
      .then((text) => cy.log("Link A - Home:", text.trim()));

    // b. Account Settings
    cy.get(":nth-child(2) > .mt-4 > :nth-child(1) > .transition-all")
      .should("be.visible")
      .invoke("css", "outline", "2px solid orange")
      .invoke("text")
      .then((text) => cy.log("Link B - Account Settings:", text.trim()));

    // c. Connections
    cy.get(":nth-child(1) > .mt-4 > :nth-child(2) > .transition-all")
      .should("be.visible")
      .invoke("css", "outline", "2px solid green")
      .invoke("text")
      .then((text) => cy.log("Link C - Connections:", text.trim()));

    // d. Preference Settings
    cy.get(":nth-child(2) > .mt-4 > :nth-child(2) > .transition-all")
      .should("be.visible")
      .invoke("css", "outline", "2px solid blue")
      .invoke("text")
      .then((text) => cy.log("Link D - Preference Settings:", text.trim()));

    // e. Chat
    cy.get(".sm\\:flex-row > :nth-child(1) > .mt-4 > :nth-child(3)")
      .should("be.visible")
      .invoke("css", "outline", "2px solid teal")
      .invoke("text")
      .then((text) => cy.log("Link E - Chat:", text.trim()));

    // f. Rewards and Referrals
    cy.get(":nth-child(2) > .mt-4 > :nth-child(3)")
      .should("be.visible")
      .invoke("css", "outline", "2px solid darkgreen")
      .invoke("text")
      .then((text) => cy.log("Link F - Rewards and Referrals:", text.trim()));

    // g. FQA
    cy.get(":nth-child(1) > .mt-4 > :nth-child(4) > .transition-all")
      .should("be.visible")
      .invoke("css", "outline", "2px solid brown")
      .invoke("text")
      .then((text) => cy.log("Link G - FAQ:", text.trim()));

    // h. Terms and Conditions
    cy.get(":nth-child(2) > .mt-4 > :nth-child(4) > .transition-all")
      .should("be.visible")
      .invoke("css", "outline", "2px solid magenta")
      .invoke("text")
      .then((text) => cy.log("Link H - Terms and Conditions:", text.trim()));

    // i. Support
    cy.get(":nth-child(1) > .mt-4 > :nth-child(5) > .transition-all")
      .should("be.visible")
      .invoke("css", "outline", "2px solid gray")
      .invoke("text")
      .then((text) => cy.log("Link I - Support:", text.trim()));

    // j. Privacy Policy
    cy.get(":nth-child(2) > .mt-4 > :nth-child(5) > .transition-all")
      .should("be.visible")
      .invoke("css", "outline", "2px solid #AB1D79")
      .invoke("text")
      .then((text) => cy.log("Link J - Privacy Policy:", text.trim()));

    // k. Privacy Policy USA
    cy.get(":nth-child(6) > .transition-all")
      .should("be.visible")
      .invoke("css", "outline", "2px solid navy")
      .invoke("text")
      .then((text) => cy.log("Link K - Privacy Policy USA:", text.trim()));

    // 1. Company Title
    cy.get(".pl-8 > .font-semibold")
      .should("be.visible")
      .invoke("css", "outline", "3px solid orange")
      .invoke("text")
      .then((text) => {
        cy.log("Company Title:", text.trim());
      });

    // 2. About Us Card
    cy.get(".mt-5 > :nth-child(1) > .transition-all")
      .should("be.visible")
      .invoke("css", "outline", "3px solid orange")
      .invoke("text")
      .then((text) => {
        cy.log("About Us:", text.trim());
      });

    // 3. Mail ID (Support@makeyourjodi.com)
    cy.get(".mt-5 > :nth-child(2) > .transition-all")
      .should("be.visible")
      .invoke("css", "outline", "3px solid orange")
      .invoke("text")
      .then((text) => {
        cy.log("Mail ID:", text.trim());
      });

    // 4. Match Making
    cy.get(".mt-5 > :nth-child(3) > .transition-all")
      .should("be.visible")
      .invoke("css", "outline", "3px solid orange")
      .invoke("text")
      .then((text) => {
        cy.log("Match Making:", text.trim());
      });

    // 5. Playstore Image
    cy.get(".w-28")
      .should("be.visible")
      .invoke("css", "outline", "3px solid orange")
      .then(() => {
        cy.log("Playstore image is visible.");
      });

    // 6. QR Code Image
    cy.get(".w-\\[140px\\]")
      .should("be.visible")
      .invoke("css", "outline", "3px solid orange")
      .then(() => {
        cy.log("QR Code image is visible.");
      });

    // 7. Text below QR code
    cy.get(".text-\\[12px\\]")
      .should("be.visible")
      .invoke("css", "outline", "3px solid orange")
      .invoke("text")
      .then((text) => {
        cy.log("QR Text:", text.trim());
      });

    // 8. Footer copyright
    cy.get(".mt-6 > span")
      .should("be.visible")
      .invoke("css", "outline", "3px solid orange")
      .invoke("text")
      .then((text) => {
        cy.log("Footer Text:", text.trim());
      });
  });
});
