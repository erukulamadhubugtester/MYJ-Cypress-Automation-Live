describe("MakeYourJodi UI Smoke Test", () => {
  it("verifies key elements are present", () => {
    cy.visit("https://makeyourjodi.com/");

    const elementsToHighlight = [
      ".gap-2 > .w-auto",
      ".container > .p-2",
      ".text-xl",
      "#age > .select__control",
      "#education > .select__control",
      ":nth-child(3) > .border",
      "a.w-full > .w-full",
      ".sm\\:mt-20",
      ".text-black",
      ".flex.mt-6 > .w-full",
      ".flex.mt-6 > .flex > .text-\\[\\#AB1D79\\]",
      ".flex.mt-6 > .flex > .text-\\[\\#666\\]",
      ".md\\:justify-between > :nth-child(4) > .w-full",
      ":nth-child(4) > .flex > .text-\\[\\#AB1D79\\]",
      ":nth-child(4) > .flex > .text-\\[\\#666\\]",
      ":nth-child(5) > .w-full",
      ":nth-child(5) > .flex > .text-\\[\\#AB1D79\\]",
      ":nth-child(5) > .flex > .text-\\[\\#666\\]",
      ".md-flex-row > .text-\\[\\#AB1D79\\]",
      ".md\\:p-8 > .text-center",
      ".mt-5 > a > img",
      ".w-\\[200px\\]",
      ".min-w-\\[280px\\] > .mt-5",
      '[href="https://www.linkedin.com/showcase/make-your-jodi/about/?viewAsMember=true"] > .h-\\[30px\\]',
      '[href="https://www.facebook.com/people/Make-Your-Jodi/61577330596796/?sk=about"] > .h-\\[30px\\]',
      '[href="https://www.instagram.com/makeyourjodi.com_?igsh=MXVja2JkaWF2YXhobw=="] > .h-\\[30px\\]',
      '[href="https://x.com/MakeYourJodi"] > .h-\\[30px\\]',
      ".h-\\[50px\\]",
      ".flex-\\[2\\] > .font-semibold",
      ".flex > .mt-5 > :nth-child(1) > .transition-all",
      ".mt-5 > :nth-child(2) > .transition-all",
      ".sm\\:mt-5 > :nth-child(1) > .transition-all",
      ".sm\\:mt-5 > :nth-child(2) > .transition-all",
      ".flex-2 > .font-semibold",
      ".flex-2 > .mt-5 > .mb-2 > .transition-all",
      ".xl\\:border-l-\\[0\\.5px\\] > .flex-col",
      ".mt-6 > span",
    ];

    elementsToHighlight.forEach((selector) => {
      cy.get(selector, { timeout: 10000 }).scrollIntoView().highlight();
    });
  });
});
