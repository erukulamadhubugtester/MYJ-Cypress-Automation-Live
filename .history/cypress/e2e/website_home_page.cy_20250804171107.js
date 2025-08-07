describe("MakeYourJodi UI Smoke Test", () => {
  before(() => {
    cy.visit("https://makeyourjodi.com/");
  });

  it("verifies header elements", () => {
    cy.get(".gap-2 > .w-auto").should("be.visible");
    cy.get(".container > .p-2").should("be.visible");
    cy.get(".text-xl").should("exist");
  });

  it("verifies search dropdowns and inputs", () => {
    cy.get("#age > .select__control").should("be.visible");
    cy.get("#education > .select__control").should("be.visible");
  });

  it("verifies key homepage sections", () => {
    cy.get(":nth-child(3) > .border").should("exist");
    cy.get("a.w-full > .w-full").should("exist");
    cy.get(".sm\\:mt-20").should("exist");
    cy.get(".text-black").should("exist");
  });

  it("verifies 'Why MakeYourJodi' info tiles", () => {
    cy.get(".flex.mt-6 > .w-full").should("exist");

    cy.get(".flex.mt-6 > .flex > .text-\\[\\#AB1D79\\]").should(
      "contain.text",
      "Smart Matches"
    );
    cy.get(".flex.mt-6 > .flex > .text-\\[\\#666\\]").should("exist");

    cy.get(".md\\:justify-between > :nth-child(4) > .w-full").should("exist");
    cy.get(":nth-child(4) > .flex > .text-\\[\\#AB1D79\\]").should("exist");
    cy.get(":nth-child(4) > .flex > .text-\\[\\#666\\]").should("exist");

    cy.get(":nth-child(5) > .w-full").should("exist");
    cy.get(":nth-child(5) > .flex > .text-\\[\\#AB1D79\\]").should("exist");
    cy.get(":nth-child(5) > .flex > .text-\\[\\#666\\]").should("exist");
  });

  it("verifies testimonials or banner section", () => {
    cy.get(".md-flex-row > .text-\\[\\#AB1D79\\]").should("exist");
    cy.get(".md\\:p-8 > .text-center").should("exist");
  });

  it("verifies footer logo and image", () => {
    cy.get(".mt-5 > a > img").should("be.visible");
    cy.get(".w-\\[200px\\]").should("exist");
    cy.get(".min-w-\\[280px\\] > .mt-5").should("exist");
  });

  it("verifies social media links", () => {
    cy.get('[href*="linkedin"]')
      .should("have.attr", "href")
      .and("include", "linkedin");
    cy.get('[href*="facebook"]')
      .should("have.attr", "href")
      .and("include", "facebook");
    cy.get('[href*="instagram"]')
      .should("have.attr", "href")
      .and("include", "instagram");
    cy.get('[href*="x.com"]')
      .should("have.attr", "href")
      .and("include", "x.com");
  });

  it("verifies footer links and layout", () => {
    cy.get(".h-\\[50px\\]").should("exist");
    cy.get(".flex-\\[2\\] > .font-semibold").should("exist");
    cy.get(".flex > .mt-5 > :nth-child(1) > .transition-all").should("exist");
    cy.get(".mt-5 > :nth-child(2) > .transition-all").should("exist");
    cy.get(".sm\\:mt-5 > :nth-child(1) > .transition-all").should("exist");
    cy.get(".sm\\:mt-5 > :nth-child(2) > .transition-all").should("exist");
    cy.get(".flex-2 > .font-semibold").should("exist");
    cy.get(".flex-2 > .mt-5 > .mb-2 > .transition-all").should("exist");
    cy.get(".xl\\:border-l-\\[0\\.5px\\] > .flex-col").should("exist");
    cy.get(".mt-6 > span").should("exist");
  });
});
