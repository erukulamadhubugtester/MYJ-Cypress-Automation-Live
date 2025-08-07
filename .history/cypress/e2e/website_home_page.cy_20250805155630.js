describe("MakeYourJodi UI Smoke Test", () => {
  it("verifies key elements are present", () => {
    cy.visit("https://makeyourjodi.com/");

    cy.get(".gap-2 > .w-auto").scrollBelowHeader().highlight();
    cy.get(".container > .p-2").scrollBelowHeader().highlight();
    cy.get(".text-xl").scrollBelowHeader().highlight();
    cy.get("#age > .select__control").scrollBelowHeader().highlight();
    cy.get("#education > .select__control").scrollBelowHeader().highlight();
    cy.get(":nth-child(3) > .border").scrollBelowHeader().highlight();
    cy.get("a.w-full > .w-full").scrollBelowHeader().highlight();
    cy.get(".sm\\:mt-20").scrollBelowHeader().highlight();
    cy.get(".text-black").scrollBelowHeader().highlight();
    cy.get(".flex.mt-6 > .w-full").scrollBelowHeader().highlight();
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
    cy.get(":nth-child(5) > .w-full").scrollBelowHeader().highlight();
    cy.get(":nth-child(5) > .flex > .text-\\[\\#AB1D79\\]")
      .scrollIntoView()
      .highlight();
    cy.get(":nth-child(5) > .flex > .text-\\[\\#666\\]")
      .scrollIntoView()
      .highlight();
    cy.get(".md-flex-row > .text-\\[\\#AB1D79\\]").scrollIntoView().highlight();
    cy.get(".md\\:p-8 > .text-center").scrollBelowHeader().highlight();
    cy.get(".mt-5 > a > img").scrollBelowHeader().highlight();
    cy.get(".w-\\[200px\\]").scrollBelowHeader().highlight();
    cy.get(".min-w-\\[280px\\] > .mt-5").scrollBelowHeader().highlight();
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
    cy.get(".h-\\[50px\\]").scrollBelowHeader().highlight();
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
    cy.get(".flex-2 > .font-semibold").scrollBelowHeader().highlight();
    cy.get(".flex-2 > .mt-5 > .mb-2 > .transition-all")
      .scrollIntoView()
      .highlight();
    cy.get(".xl\\:border-l-\\[0\\.5px\\] > .flex-col")
      .scrollIntoView()
      .highlight();
    cy.get(".mt-6 > span").scrollBelowHeader().highlight();
  });
});
