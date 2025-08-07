describe("MakeYourJodi - User VIP Page Checking ", () => {
  beforeEach(() => {
    cy.loginAndHandlePopup();
  });

  it("VIP ", () => {
    cy.url().should("include", "/home");

    // 1. Check the main title
    cy.get(".top-1\\/2 > .text-2xl")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("Main Title:", text.trim());
      });

    // vip
    // 1. Highlight and click the VIP module
    cy.get('.lg\\:gap-8 > [href="/vip"]')
      .should("be.visible")
      .then(($vipLink) => {
        cy.log("✅ VIP Module is visible");
        highlight($vipLink); // optional highlight function
      })
      .click();

    // 1.a Wait for VIP Cart Page
    cy.url().should("include", "/vip"); // confirms navigation
    cy.log("✅ Navigated to VIP Cart Page");

    // 2. Check Basic title section
    cy.get(".w-\\[4rem\\]")
      .should("be.visible")
      .then(($basicTitle) => {
        highlight($basicTitle); // optional
        cy.log("📌 Basic Title: " + $basicTitle.text().trim());
      });

    // 2.a Point 1 under "Basic"
    cy.get(".gap-10 > :nth-child(2) > .flex-col > :nth-child(1)")
      .should("be.visible")
      .then(($pt1) => {
        highlight($pt1);
        cy.log("🔹 Point 1: " + $pt1.text().trim());
      });

    // 2.b Point 2
    cy.get(".gap-10 > :nth-child(2) > .flex-col > :nth-child(2)")
      .should("be.visible")
      .then(($pt2) => {
        highlight($pt2);
        cy.log("🔹 Point 2: " + $pt2.text().trim());
      });

    // 2.c Point 3
    cy.get(".gap-10 > :nth-child(2) > .flex-col > :nth-child(3)")
      .should("be.visible")
      .then(($pt3) => {
        highlight($pt3);
        cy.log("🔹 Point 3: " + $pt3.text().trim());
      });

    // 2.d Point 4
    cy.get(".gap-10 > :nth-child(2) > .flex-col > :nth-child(4)")
      .should("be.visible")
      .then(($pt4) => {
        highlight($pt4);
        cy.log("🔹 Point 4: " + $pt4.text().trim());
      });

    // 2.e Point 5
    cy.get(".gap-10 > :nth-child(2) > .flex-col > :nth-child(5)")
      .should("be.visible")
      .then(($pt5) => {
        highlight($pt5);
        cy.log("🔹 Point 5: " + $pt5.text().trim());
      });
  });
});
