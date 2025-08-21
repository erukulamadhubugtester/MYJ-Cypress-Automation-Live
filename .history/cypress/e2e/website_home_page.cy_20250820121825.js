describe("MakeYourJodi UI Smoke Test", () => {
  beforeEach(() => {
    cy.visit("https://makeyourjodi.com/");
  });

  it("verifies and highlights all key UI elements", () => {
    const highlight = (selector, label) => {
      cy.get(selector).each(($el, index, $list) => {
        cy.wrap($el)
          .scrollIntoView()
          .invoke("css", "outline", "3px solid red")
          .invoke("text")
          .then((text) => {
            if ($list.length > 1) {
              cy.log(`${label} [${index + 1}]: ${text.trim()}`);
            } else {
              cy.log(`${label}: ${text.trim()}`);
            }
          });
      });
    };

    cy.log("🔍 Checking Header Elements");
    highlight(".gap-2 > .w-auto", "Logo Image");
    highlight(".container > .p-2", "Header Container");
    highlight(".text-xl", "Header Title");

    cy.log("🔍 Checking Form Dropdowns and Inputs");
    highlight("#age > .select__control", "Age Dropdown");
    highlight("#education > .select__control", "Education Dropdown");
    highlight(":nth-child(3) > .border", "Location Input");
    highlight("a.w-full > .w-full", "Submit Button");

    cy.log("🔍 Checking Main Content Sections");
    highlight(".sm\\:mt-20", "Main Section Title");
    highlight(".text-black", "Section Text");
    highlight(".flex.mt-6 > .w-full", "Cards Container");

    cy.log("🔍 Checking 'Why Make Your Jodi' Section");
    highlight(
      ".flex.mt-6 > .flex > .text-\\[\\#AB1D79\\]",
      "Why MYJ - Title 1"
    );
    highlight(".flex.mt-6 > .flex > .text-\\[\\#666\\]", "Why MYJ - Desc 1");
    highlight(
      ".md\\:justify-between > :nth-child(4) > .w-full",
      "Why MYJ - Card 2"
    );
    highlight(
      ":nth-child(4) > .flex > .text-\\[\\#AB1D79\\]",
      "Why MYJ - Title 2"
    );
    highlight(":nth-child(4) > .flex > .text-\\[\\#666\\]", "Why MYJ - Desc 2");
    highlight(":nth-child(5) > .w-full", "Why MYJ - Card 3");
    highlight(
      ":nth-child(5) > .flex > .text-\\[\\#AB1D79\\]",
      "Why MYJ - Title 3"
    );
    highlight(":nth-child(5) > .flex > .text-\\[\\#666\\]", "Why MYJ - Desc 3");

    highlight(".md-flex-row > .text-\\[\\#AB1D79\\]", "Card Subtitle");
    highlight(".md\\:p-8 > .text-center", "Centered Title");

    cy.log("🔍 Checking Logo & Footer Section");
    highlight(".mt-5 > a > img", "Footer Logo");
    highlight(".w-\\[200px\\]", "Download App Image");
    highlight(".min-w-\\[280px\\] > .mt-5", "Footer Text Block");

    cy.log("🔍 Checking Social Icons");
    highlight(
      '[href="https://www.linkedin.com/showcase/make-your-jodi/about/?viewAsMember=true"] > .h-\\[30px\\]',
      "LinkedIn Icon"
    );
    highlight(
      '[href="https://www.facebook.com/people/Make-Your-Jodi/61577330596796/?sk=about"] > .h-\\[30px\\]',
      "Facebook Icon"
    );
    highlight(
      '[href="https://www.instagram.com/makeyourjodi.com_?igsh=MXVja2JkaWF2YXhobw=="] > .h-\\[30px\\]',
      "Instagram Icon"
    );
    highlight(
      '[href="https://x.com/MakeYourJodi"] > .h-\\[30px\\]',
      "Twitter Icon"
    );

    highlight(".h-\\[50px\\]", "Copyright");

    cy.log("🔍 Checking Platform Highlights Section");
    highlight(".flex-\\[2\\] > .font-semibold", "Platform Header");
    highlight(
      ".flex > .mt-5 > :nth-child(1) > .transition-all",
      "Platform Card 1"
    );
    highlight(".mt-5 > :nth-child(2) > .transition-all", "Platform Card 2");
    highlight(
      ".sm\\:mt-5 > :nth-child(1) > .transition-all",
      "Platform Card 3"
    );
    highlight(
      ".sm\\:mt-5 > :nth-child(2) > .transition-all",
      "Platform Card 4"
    );
    highlight(".flex-2 > .font-semibold", "Platform Subheader");
    highlight(".flex-2 > .mt-5 > .mb-2 > .transition-all", "Platform Card 5");
    highlight(".xl\\:border-l-\\[0\\.5px\\] > .flex-col", "Platform Card 6");
    highlight(".mt-6 > span", "End Text");
  });
});
