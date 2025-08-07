describe("MakeYourJodi UI Smoke Test", () => {
  it("verifies key elements are present", () => {
    cy.visit("https://makeyourjodi.com/");

    cy.get(".gap-2 > .w-auto").scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
;
    cy.get(".container > .p-2").scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
;
    cy.get(".text-xl").scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
;
    cy.get("#age > .select__control").scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
;
    cy.get("#education > .select__control").scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
;
    cy.get(":nth-child(3) > .border").scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
;
    cy.get("a.w-full > .w-full").scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
;
    cy.get(".sm\\:mt-20").scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
;
    cy.get(".text-black").scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
;
    cy.get(".flex.mt-6 > .w-full").scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
;
    cy.get(".flex.mt-6 > .flex > .text-\\[\\#AB1D79\\]").scrollIntoView({
      block: "center",
    });
    cy.get(".flex.mt-6 > .flex > .text-\\[\\#666\\]").scrollIntoView({
      block: "center",
    });
    cy.get(".md\\:justify-between > :nth-child(4) > .w-full").scrollIntoView({
      block: "center",
    });
    cy.get(":nth-child(4) > .flex > .text-\\[\\#AB1D79\\]").scrollIntoView({
      block: "center",
    });
    cy.get(":nth-child(4) > .flex > .text-\\[\\#666\\]").scrollIntoView({
      block: "center",
    });
    cy.get(":nth-child(5) > .w-full").scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
;
    cy.get(":nth-child(5) > .flex > .text-\\[\\#AB1D79\\]").scrollIntoView({
      block: "center",
    });
    cy.get(":nth-child(5) > .flex > .text-\\[\\#666\\]").scrollIntoView({
      block: "center",
    });
    cy.get(".md-flex-row > .text-\\[\\#AB1D79\\]").scrollIntoView({
      block: "center",
    });
    cy.get(".md\\:p-8 > .text-center").scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
;
    cy.get(".mt-5 > a > img").scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
;
    cy.get(".w-\\[200px\\]").scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
;
    cy.get(".min-w-\\[280px\\] > .mt-5").scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
;
    cy.get(
      '[href="https://www.linkedin.com/showcase/make-your-jodi/about/?viewAsMember=true"] > .h-\\[30px\\]'
    ).scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
;
    cy.get(
      '[href="https://www.facebook.com/people/Make-Your-Jodi/61577330596796/?sk=about"] > .h-\\[30px\\]'
    ).scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
;
    cy.get(
      '[href="https://www.instagram.com/makeyourjodi.com_?igsh=MXVja2JkaWF2YXhobw=="] > .h-\\[30px\\]'
    ).scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
;
    cy.get(
      '[href="https://x.com/MakeYourJodi"] > .h-\\[30px\\]'
    ).scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
;
    cy.get(".h-\\[50px\\]").scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
;
    cy.get(".flex-\\[2\\] > .font-semibold").scrollIntoView({
      block: "center",
    });
    cy.get(".flex > .mt-5 > :nth-child(1) > .transition-all").scrollIntoView({
      block: "center",
    });
    cy.get(".mt-5 > :nth-child(2) > .transition-all").scrollIntoView({
      block: "center",
    });
    cy.get(".sm\\:mt-5 > :nth-child(1) > .transition-all").scrollIntoView({
      block: "center",
    });
    cy.get(".sm\\:mt-5 > :nth-child(2) > .transition-all").scrollIntoView({
      block: "center",
    });
    cy.get(".flex-2 > .font-semibold").scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
;
    cy.get(".flex-2 > .mt-5 > .mb-2 > .transition-all").scrollIntoView({
      block: "center",
    });
    cy.get(".xl\\:border-l-\\[0\\.5px\\] > .flex-col").scrollIntoView({
      block: "center",
    });
    cy.get(".mt-6 > span").scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
;
  });
});
