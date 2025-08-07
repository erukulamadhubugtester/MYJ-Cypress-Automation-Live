describe("MakeYourJodi - User Home Page checking ", () => {
  beforeEach(() => {
    cy.loginAndHandlePopup();
  });

  it("should land on homepage after login", () => {
    cy.url().should("include", "/home");

    // 1. Check the main title
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
    cy.get(".flex-col > .text-\\[\\#AB1D79\\]")
      .should("be.visible")
      .invoke("css", "outline", "3px solid teal")
      .invoke("text")
      .then((text) => {
        cy.log("VIP Title:", text.trim());
      });

    // 9. Check VIP image is displayed
    cy.get(".vip-banner > a > img")
      .should("be.visible")
      .invoke("css", "outline", "3px solid gold");

    // 'should highlight and verify footer logo, social icons, and text'

    // 1. Check logo is displayed
    cy.get(".w-\\[200px\\]")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red");

    // 2. Check "Follow us on :" text
    cy.get(".min-w-\\[280px\\] > .mt-5")
      .should("contain.text", "Follow us on")
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
  });
});
