describe("MakeYourJodi - User Connections Page Checking ", () => {
  beforeEach(() => {
    cy.loginAndHandlePopup();
  });

  it("Connections  ", () => {
    cy.url().should("include", "/home");

    // 1. Check the main title
    cy.get(".top-1\\/2 > .text-2xl")
      .should("be.visible")
      .invoke("css", "outline", "3px solid red")
      .invoke("text")
      .then((text) => {
        cy.log("Main Title:", text.trim());
      });

    // connections
    cy.log("🚀 Navigating to Connections Page");

    // 1. Click on Connections link
    cy.get('.lg\\:gap-8 > [href="/connect"]').should("be.visible").click();

    // 2. Wait for the page and validate title
    cy.get(".connections-title", { timeout: 10000 })
      .should("be.visible")
      .invoke("css", "outline", "2px solid green")
      .invoke("text")
      .then((titleText) => {
        const trimmedTitle = titleText.trim();
        cy.log("📄 Connections Page Title:", trimmedTitle);
        expect(trimmedTitle).to.contain("Connections"); // ✅ Assert
      });

    // 3. Check Sent Count
    cy.get(".flex-wrap > :nth-child(1) > .cursor-pointer")
      .should("be.visible")
      .invoke("css", "outline", "2px solid orange")
      .invoke("text")
      .then((sentText) => {
        const sentCount = sentText.trim();
        cy.log("📤 Sent Connections Count:", sentCount);
        expect(sentCount).to.match(/Sent\s+\(\d+\)/); // ✅ Matches "Sent (3)"

        const sentNumber = parseInt(sentCount.match(/\((\d+)\)/)?.[1]);
        cy.log("🔢 Extracted Sent Number:", sentNumber);
        expect(sentNumber).to.be.a("number");
      });

    // 4. Check Received Count
    cy.get(".flex-wrap > :nth-child(2) > .cursor-pointer")
      .should("be.visible")
      .invoke("css", "outline", "2px solid blue")
      .invoke("text")
      .then((receivedText) => {
        const receivedCount = receivedText.trim();
        cy.log("📥 Received Connections Count:", receivedCount);
        expect(receivedCount).to.match(/Received\s+\(\d+\)/); // ✅ Matches "Received (5)"

        const receivedNumber = parseInt(receivedCount.match(/\((\d+)\)/)?.[1]);
        cy.log("🔢 Extracted Received Number:", receivedNumber);
        expect(receivedNumber).to.be.a("number");
      });

    // 5. Check Connected Count
    cy.get(".flex-wrap > :nth-child(3) > .cursor-pointer")
      .should("be.visible")
      .invoke("css", "outline", "2px solid purple")
      .invoke("text")
      .then((connectedText) => {
        const connectedCount = connectedText.trim();
        cy.log("🔗 Connected Count:", connectedCount);
        expect(connectedCount).to.match(/Connected\s+\(\d+\)/); // ✅ Matches "Connected (2)"

        const connectedNumber = parseInt(
          connectedCount.match(/\((\d+)\)/)?.[1]
        );
        cy.log("🔢 Extracted Connected Number:", connectedNumber);
        expect(connectedNumber).to.be.a("number");
      });

    cy.log("✅ All Connection Stats Verified");
  });
});
