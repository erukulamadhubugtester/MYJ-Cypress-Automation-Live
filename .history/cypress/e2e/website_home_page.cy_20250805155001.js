describe("MakeYourJodi UI Smoke Test", () => {
  it("verifies key elements are present and highlights them", () => {
    cy.visit("https://makeyourjodi.com/");

    const highlight = (selector) => {
      cy.get(selector)
        .scrollIntoView()
        .then(($el) => {
          $el[0].style.border = "3px solid red"; // Highlight
        });
    };

    highlight(".gap-2 > .w-auto");
    highlight(".container > .p-2");
    highlight(".text-xl");
    highlight("#age > .select__control");
    highlight("#education > .select__control");
    highlight(":nth-child(3) > .border");
    highlight("a.w-full > .w-full");
    highlight(".sm\\:mt-20");
    highlight(".text-black");
    highlight(".flex.mt-6 > .w-full");
    highlight(".flex.mt-6 > .flex > .text-\\[\\#AB1D79\\]");
    highlight(".flex.mt-6 > .flex > .text-\\[\\#666\\]");
    highlight(".md\\:justify-between > :nth-child(4) > .w-full");
    highlight(":nth-child(4) > .flex > .text-\\[\\#AB1D79\\]");
    highlight(":nth-child(4) > .flex > .text-\\[\\#666\\]");
    highlight(":nth-child(5) > .w-full");
    highlight(":nth-child(5) > .flex > .text-\\[\\#AB1D79\\]");
    highlight(":nth-child(5) > .flex > .text-\\[\\#666\\]");
    highlight(".md-flex-row > .text-\\[\\#AB1D79\\]");
    highlight(".md\\:p-8 > .text-center");
    highlight(".mt-5 > a > img");
    highlight(".w-\\[200px\\]");
    highlight(".min-w-\\[280px\\] > .mt-5");
    highlight(
      '[href="https://www.linkedin.com/showcase/make-your-jodi/about/?viewAsMember=true"] > .h-\\[30px\\]'
    );
    highlight(
      '[href="https://www.facebook.com/people/Make-Your-Jodi/61577330596796/?sk=about"] > .h-\\[30px\\]'
    );
    highlight(
      '[href="https://www.instagram.com/makeyourjodi.com_?igsh=MXVja2JkaWF2YXhobw=="] > .h-\\[30px\\]'
    );
    highlight('[href="https://x.com/MakeYourJodi"] > .h-\\[30px\\]');
    highlight(".h-\\[50px\\]");
    highlight(".flex-\\[2\\] > .font-semibold");
    highlight(".flex > .mt-5 > :nth-child(1) > .transition-all");
    highlight(".mt-5 > :nth-child(2) > .transition-all");
    highlight(".sm\\:mt-5 > :nth-child(1) > .transition-all");
    highlight(".sm\\:mt-5 > :nth-child(2) > .transition-all");
    highlight(".flex-2 > .font-semibold");
    highlight(".flex-2 > .mt-5 > .mb-2 > .transition-all");
    highlight(".xl\\:border-l-\\[0\\.5px\\] > .flex-col");
    highlight(".mt-6 > span");
  });
});
