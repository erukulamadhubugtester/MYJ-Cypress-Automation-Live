describe("MakeYourJodi UI Smoke Test", () => {
  beforeEach(() => {
    cy.visit("https://makeyourjodi.com/");
  });

  it("verifies and highlights all key UI elements", () => {
    cy.log("🔍 Checking Header Elements");
    cy.get(".gap-2 > .w-auto").scrollIntoView().highlight();
    cy.get(".container > .p-2").scrollIntoView().highlight();
    cy.get(".text-xl").scrollIntoView().highlight();

    cy.log("🔍 Checking Form Dropdowns and Inputs");
    cy.get("#age > .select__control").scrollIntoView().highlight();
    cy.get("#education > .select__control").scrollIntoView().highlight();
    cy.get(":nth-child(3) > .border").scrollIntoView().highlight();
    cy.get("a.w-full > .w-full").scrollIntoView().highlight();

    cy.log("🔍 Checking Main Content Sections");
    cy.get(".sm\\:mt-20").scrollIntoView().highlight();
    cy.get(".text-black").scrollIntoView().highlight();
    cy.get(".flex.mt-6 > .w-full").scrollIntoView().highlight();

    cy.log("🔍 Checking 'Why Make Your Jodi' Section");
    cy.get(".flex.mt-6 > .flex > .text-\\[\\#AB1D79\\]")
      .scrollIntoView()
      .highlight();
    cy.get(".flex.mt-6 > .flex > .text-\\[\\#666\\]")
      .scrollIntoView()
      .highlight();

    cy.get(".md\\:justify-between > :nth-child(4) > .w-full")
      .scrollIntoView()
      .highlight();
    cy.get(":nth-child(4) > .flex > .text-\\[\\#AB1D79\\]")
      .scrollIntoView()
      .highlight();
    cy.get(":nth-child(4) > .flex > .text-\\[\\#666\\]")
      .scrollIntoView()
      .highlight();

    cy.get(":nth-child(5) > .w-full").scrollIntoView().highlight();
    cy.get(":nth-child(5) > .flex > .text-\\[\\#AB1D79\\]")
      .scrollIntoView()
      .highlight();
    cy.get(":nth-child(5) > .flex > .text-\\[\\#666\\]")
      .scrollIntoView()
      .highlight();

    cy.get(".md-flex-row > .text-\\[\\#AB1D79\\]").scrollIntoView().highlight();
    cy.get(".md\\:p-8 > .text-center").scrollIntoView().highlight();

    cy.log("🔍 Checking Logo & Footer Section");
    cy.get(".mt-5 > a > img").scrollIntoView().highlight();
    cy.get(".w-\\[200px\\]").scrollIntoView().highlight();
    cy.get(".min-w-\\[280px\\] > .mt-5").scrollIntoView().highlight();

    cy.log("🔍 Checking Social Icons");
    cy.get(
      '[href="https://www.linkedin.com/showcase/make-your-jodi/about/?viewAsMember=true"] > .h-\\[30px\\]'
    )
      .scrollIntoView()
      .highlight();
    cy.get(
      '[href="https://www.facebook.com/people/Make-Your-Jodi/61577330596796/?sk=about"] > .h-\\[30px\\]'
    )
      .scrollIntoView()
      .highlight();
    cy.get(
      '[href="https://www.instagram.com/makeyourjodi.com_?igsh=MXVja2JkaWF2YXhobw=="] > .h-\\[30px\\]'
    )
      .scrollIntoView()
      .highlight();
    cy.get('[href="https://x.com/MakeYourJodi"] > .h-\\[30px\\]')
      .scrollIntoView()
      .highlight();

    cy.get(".h-\\[50px\\]").scrollIntoView().highlight();

    cy.log("🔍 Checking Platform Highlights Section");
    cy.get(".flex-\\[2\\] > .font-semibold").scrollIntoView().highlight();
    cy.get(".flex > .mt-5 > :nth-child(1) > .transition-all")
      .scrollIntoView()
      .highlight();
    cy.get(".mt-5 > :nth-child(2) > .transition-all")
      .scrollIntoView()
      .highlight();
    cy.get(".sm\\:mt-5 > :nth-child(1) > .transition-all")
      .scrollIntoView()
      .highlight();
    cy.get(".sm\\:mt-5 > :nth-child(2) > .transition-all")
      .scrollIntoView()
      .highlight();
    cy.get(".flex-2 > .font-semibold").scrollIntoView().highlight();
    cy.get(".flex-2 > .mt-5 > .mb-2 > .transition-all")
      .scrollIntoView()
      .highlight();
    cy.get(".xl\\:border-l-\\[0\\.5px\\] > .flex-col")
      .scrollIntoView()
      .highlight();
    cy.get(".mt-6 > span").scrollIntoView().highlight();
  });
});
